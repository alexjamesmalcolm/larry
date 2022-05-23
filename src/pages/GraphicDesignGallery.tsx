import Gallery, { Content } from "../components/Gallery";

import greeneryLegacy from "../content/graphic-design/greenery.png";
import greeneryWebP from "../content/graphic-design/greenery.webp";
import greeneryAvif from "../content/graphic-design/greenery.avif";

import aranciataLegacy from "../content/graphic-design/aranciata.png";
import aranciataWebP from "../content/graphic-design/aranciata.webp";
import aranciataAvif from "../content/graphic-design/aranciata.avif";

import colorPairingsLegacy from "../content/graphic-design/color-pairings.png";
import colorPairingsWebP from "../content/graphic-design/color-pairings.webp";
import colorPairingsAvif from "../content/graphic-design/color-pairings.avif";

import everyDayIsIceCreamDayLegacy from "../content/graphic-design/every-day-is-ice-cream-day.png";
import everyDayIsIceCreamDayWebP from "../content/graphic-design/every-day-is-ice-cream-day.webp";
import everyDayIsIceCreamDayAvif from "../content/graphic-design/every-day-is-ice-cream-day.avif";

import iKnowTheEndLegacy from "../content/graphic-design/i-know-the-end.jpg";
import iKnowTheEndWebP from "../content/graphic-design/i-know-the-end.webp";
import iKnowTheEndAvif from "../content/graphic-design/i-know-the-end.avif";

import editorialLegacy from "../content/graphic-design/editorial.png";
import editorialWebP from "../content/graphic-design/editorial.webp";
import editorialAvif from "../content/graphic-design/editorial.avif";

const content: Content[] = [
  {
    id: "greenery",
    legacySrc: greeneryLegacy,
    sources: [
      { id: "avif", src: greeneryAvif },
      { id: "webp", src: greeneryWebP },
    ],
    description: "Greenery",
  },
  {
    id: "aranciata",
    legacySrc: aranciataLegacy,
    sources: [
      { id: "avif", src: aranciataAvif },
      { id: "webp", src: aranciataWebP },
    ],
    description: "Aranciata",
  },
  {
    id: "colorPairings",
    legacySrc: colorPairingsLegacy,
    sources: [
      { id: "avif", src: colorPairingsAvif },
      { id: "webp", src: colorPairingsWebP },
    ],

    description: "Color Pairings",
  },
  {
    id: "every-day-is-ice-cream-day",
    legacySrc: everyDayIsIceCreamDayLegacy,
    sources: [
      { id: "avif", src: everyDayIsIceCreamDayAvif },
      { id: "webp", src: everyDayIsIceCreamDayWebP },
    ],

    description: "Every Day is Ice Cream Day",
  },
  {
    id: "i-know-the-end",
    legacySrc: iKnowTheEndLegacy,
    sources: [
      { id: "avif", src: iKnowTheEndAvif },
      { id: "webp", src: iKnowTheEndWebP },
    ],

    description: "I Know The End",
  },
  {
    id: "editorial",
    legacySrc: editorialLegacy,
    sources: [
      { id: "avif", src: editorialAvif },
      { id: "webp", src: editorialWebP },
    ],
    description: "Editorial",
  },
];

const GraphicDesignGallery = () => <Gallery content={content} />;

export default GraphicDesignGallery;
