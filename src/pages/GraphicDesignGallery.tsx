import Gallery, { Content } from "../components/Gallery";
import { images } from "../content/graphic-design";
import { prepareContent } from "../utils/prepareContent";

const content: Content[] = prepareContent({
  images,
  folderName: "graphic-design",
  content: [
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
  ],
});

const GraphicDesignGallery = () => <Gallery content={content} />;

export default GraphicDesignGallery;
