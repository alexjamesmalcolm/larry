import sharp from "sharp";
import fs from "fs/promises";
import { MultiBar } from "cli-progress";

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
  const folderPaths = ["public/illustration", "public/graphic-design"];

  for await (const folderPath of folderPaths) {
    // console.log(`Processing directory ${folderPath}`);
    const progress = new MultiBar({
      hideCursor: true,
      clearOnComplete: false,
      autopadding: true,
      format: "[{bar}] {percentage}% | {value}/{total} | {imageName}",
    });
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
      if (
        !image.isDirectory() &&
        ["png", "jpeg", "jpg"].some((imageType) =>
          image.name.endsWith(imageType)
        )
      ) {
        const loadImage = () => sharp(`${folderPath}/${image.name}`);

        const metadata = await loadImage().metadata();

        const allWidths = getAllWidths(metadata.width)
          .filter((width) => width <= 4000)
          .sort((a, b) => a - b);

        const types = ["webp", "avif"];

        const bar = progress.create(allWidths.length * types.length, 0);
        bar.update({ imageName: image.name.split(".")[0] });

        for await (const type of types) {
          for await (const width of allWidths) {
            const optimizedImageName = `${
              image.name.split(".")[0]
            }-${width}w.${type}`;
            const optimizedImagePath = `${optimizedDirectoryPath}/${optimizedImageName}`;
            loadImage()
              .resize({ width, fit: "inside" })
              .toFile(optimizedImagePath)
              .finally(() => {
                bar.increment();
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
