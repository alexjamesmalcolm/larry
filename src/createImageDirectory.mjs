import fs from "fs/promises";

const directories = [
  { source: "public/illustration", indexDirectory: "src/content/illustration" },
  {
    source: "public/graphic-design",
    indexDirectory: "src/content/graphic-design",
  },
];

for await (const { source: directoryPath, indexDirectory } of directories) {
  const optimizedDirectory = await fs.readdir(`${directoryPath}/optimized`);
  const images = optimizedDirectory.map((optimizedImage) => ({
    file: optimizedImage,
    width: parseInt(optimizedImage.match(/\d+(?=w)/)[0]),
    fileType: optimizedImage.split(".")[1],
    name: optimizedImage.match(/.+(?=-\d+)/)[0],
  }));
  const indexFileContents = images.reduce((accumulator, currentValue) => {
    if (!(currentValue.name in accumulator)) {
      accumulator[currentValue.name] = {};
    }
    if (!(currentValue.fileType in accumulator[currentValue.name])) {
      accumulator[currentValue.name][currentValue.fileType] = {};
    }
    accumulator[currentValue.name][currentValue.fileType][currentValue.width] =
      currentValue.file;

    return accumulator;
  }, {});
  const indexFilePath = `${indexDirectory}/index.ts`;
  try {
    await fs.rm(indexFilePath);
  } catch (error) {}
  await fs.writeFile(
    indexFilePath,
    `export const images: Record<string, Record<string, Record<string, string>>> = ${JSON.stringify(
      indexFileContents
    )}`
  );
}
