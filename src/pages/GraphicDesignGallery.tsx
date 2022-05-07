import Gallery, { Content } from "../components/Gallery";

import greenery from "../content/graphic-design/greenery.jpg";
import aranciata from "../content/graphic-design/aranciata.png";
import colorPairings from "../content/graphic-design/color-pairings.jpg";
import everyDayIsIceCreamDay from "../content/graphic-design/every-day-is-ice-cream-day.jpg";
import iKnowTheEnd from "../content/graphic-design/i-know-the-end.jpg";

const content: Content[] = [
  { id: "greenery", src: greenery, description: "", name: "Greenery" },
  { id: "aranciata", src: aranciata, description: "", name: "Aranciata" },
  {
    id: "colorPairings",
    src: colorPairings,
    description: "",
    name: "Color Pairings",
  },
  {
    id: "every-day-is-ice-cream-day",
    src: everyDayIsIceCreamDay,
    description: "",
    name: "Every Day is Ice Cream Day",
  },
  {
    id: "i-know-the-end",
    src: iKnowTheEnd,
    description: "",
    name: "I Know The End",
  },
];

const GraphicDesignGallery = () => <Gallery content={content} />;

export default GraphicDesignGallery;
