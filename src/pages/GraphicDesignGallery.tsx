import Gallery, { Content, Source } from "../components/Gallery";
import { images } from "../content/graphic-design";

const content: Content[] = [
  {
    id: "greenery",
    legacyType: "png",
    description: "Greenery",
  },
  {
    id: "aranciata",
    legacyType: "png",
    description: "Aranciata",
  },
  {
    id: "color-pairings",
    legacyType: "png",
    description: "Color Pairings",
  },
  {
    id: "every-day-is-ice-cream-day",
    legacyType: "png",
    description: "Every Day is Ice Cream Day",
  },
  {
    id: "i-know-the-end",
    legacyType: "jpg",
    description: "I Know The End",
  },
  {
    id: "editorial",
    legacyType: "png",
    description: "Editorial",
  },
]
  .map((content) => {
    try {
      return {
        ...content,
        sources: Object.entries(images[content.id]).flatMap(([fileType, b]) =>
          Object.entries(b).flatMap(
            ([width, file]): Source => ({
              id: file,
              src: `${process.env.PUBLIC_URL}/graphic-design/optimized/${file}`,
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
    legacySrc: `${process.env.PUBLIC_URL}/graphic-design/${content.id}.${content.legacyType}`,
  }));

const GraphicDesignGallery = () => <Gallery content={content} />;

export default GraphicDesignGallery;
