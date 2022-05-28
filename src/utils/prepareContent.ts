import { Content, Source } from "../components/Gallery";

export const prepareContent = ({
  content,
  folderName,
  images,
}: {
  content: (Pick<Content, "description" | "id"> & { legacyType: string })[];
  images: Record<string, Record<string, Record<string, string>>>;
  folderName: string;
}): Content[] =>
  content
    .map((content) => {
      try {
        return {
          ...content,
          sources: Object.entries(images[content.id]).flatMap(([fileType, b]) =>
            Object.entries(b).flatMap(
              ([width, file]): Source => ({
                id: file,
                src: `${process.env.PUBLIC_URL}/${folderName}/optimized/${file}`,
                type: `image/${fileType}`,
                width: parseInt(width),
              })
            )
          ),
        };
      } catch (error) {
        return content;
      }
    })
    .map((content) => ({
      ...content,
      legacySrc: `${process.env.PUBLIC_URL}/${folderName}/${content.id}.${content.legacyType}`,
    }));
