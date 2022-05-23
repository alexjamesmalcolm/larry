import Gallery, { Content } from "../components/Gallery";

import greenery from "../content/graphic-design/greenery.png";
import aranciata from "../content/graphic-design/aranciata.png";
import colorPairings from "../content/graphic-design/color-pairings.png";
import everyDayIsIceCreamDay from "../content/graphic-design/every-day-is-ice-cream-day.png";
import iKnowTheEnd from "../content/graphic-design/i-know-the-end.jpg";
import editorial from "../content/graphic-design/editorial.png";

const content: Content[] = [
  { id: "greenery", legacySrc: greenery, description: "Greenery" },
  { id: "aranciata", legacySrc: aranciata, description: "Aranciata" },
  {
    id: "colorPairings",
    legacySrc: colorPairings,

    description: "Color Pairings",
  },
  {
    id: "every-day-is-ice-cream-day",
    legacySrc: everyDayIsIceCreamDay,

    description: "Every Day is Ice Cream Day",
  },
  {
    id: "i-know-the-end",
    legacySrc: iKnowTheEnd,

    description: "I Know The End",
  },
  { id: "editorial", legacySrc: editorial, description: "Editorial" },
];

const GraphicDesignGallery = () => <Gallery content={content} />;

export default GraphicDesignGallery;
