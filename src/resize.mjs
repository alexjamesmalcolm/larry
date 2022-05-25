import sharp from "sharp";
import fs from "fs/promises";

const getAllWidths = (width) => {
  const limit = 200;
  const firstTry = width - (width % limit);
  if (firstTry === 0) {
    return [width];
  }
  if (firstTry !== width) {
    return [width, firstTry, ...getAllWidthsRecursive(firstTry, limit)];
  }
  return [width, ...getAllWidthsRecursive(firstTry, limit)];
};
const getAllWidthsRecursive = (width, limit) => {
  const nextWidth = width - limit;
  if (nextWidth === 0) return [];
  return [nextWidth, ...getAllWidthsRecursive(nextWidth, limit)];
};

const main = async () => {
  const folderPaths = [
    "src/content/illustration",
    "src/content/graphic-design",
  ];

  for await (const folderPath of folderPaths) {
    console.log(`Processing directory ${folderPath}`);
    const directory = await fs.opendir(folderPath);
    const optimizedDirectoryPath = `${folderPath}/optimized`;
    let isOptimizedPresent = false;
    for await (const entity of await fs.opendir(folderPath)) {
      if (entity.name === "optimized") {
        isOptimizedPresent = true;
      }
    }
    if (isOptimizedPresent) {
      await fs.rm(optimizedDirectoryPath, { recursive: true });
    }

    await fs.mkdir(optimizedDirectoryPath);

    for await (const image of directory) {
      if (!image.isDirectory()) {
        console.log(`Processing ${image.name}`);
        const loadImage = () => sharp(`${folderPath}/${image.name}`);

        const metadata = await loadImage().metadata();

        for await (const type of ["avif", "webp"]) {
          const allWidths = getAllWidths(metadata.width);
          for await (const width of allWidths) {
            const optimizedImageName = `${
              image.name.split(".")[0]
            }-${width}w.${type}`;
            const optimizedImagePath = `${optimizedDirectoryPath}/${optimizedImageName}`;
            console.log(`Creating ${optimizedImageName} from ${image.name}`);
            await loadImage()
              .resize({ width, fit: "inside" })
              .toFile(optimizedImagePath)
              .finally(() => {
                console.log(
                  `Finished creating ${optimizedImageName} from ${image.name}`
                );
              });
          }
        }
      }
    }
  }
};

try {
  main();
} catch (error) {
  console.error(error);
}
