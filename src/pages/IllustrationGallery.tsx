import Gallery, { Content } from "../components/Gallery";

import angelaLegacy from "../content/illustration/angela.png";
import angelaWebP from "../content/illustration/angela.webp";
import angelaAvif from "../content/illustration/angela.avif";

import birdHouseLegacy from "../content/illustration/bird-house.png";
import birdHouseWebP from "../content/illustration/bird-house.webp";
import birdHouseAvif from "../content/illustration/bird-house.avif";

import cheersLegacy from "../content/illustration/cheers.jpg";
import cheersWebP from "../content/illustration/cheers.webp";
import cheersAvif from "../content/illustration/cheers.avif";

import chemexFlowerLegacy from "../content/illustration/chemex-flower.jpg";
import chemexFlowerWebP from "../content/illustration/chemex-flower.webp";
import chemexFlowerAvif from "../content/illustration/chemex-flower.avif";

import cocktailLegacy from "../content/illustration/cocktail.png";
import cocktailWebP from "../content/illustration/cocktail.webp";
import cocktailAvif from "../content/illustration/cocktail.avif";

import coffeeSwimLegacy from "../content/illustration/coffee-swim.jpg";
import coffeeSwimWebP from "../content/illustration/coffee-swim.webp";
import coffeeSwimAvif from "../content/illustration/coffee-swim.avif";

import drinksLegacy from "../content/illustration/drinks.png";
import drinksWebP from "../content/illustration/drinks.webp";
import drinksAvif from "../content/illustration/drinks.avif";

import fourCubePeopleLegacy from "../content/illustration/four-cube-people.png";
import fourCubePeopleWebP from "../content/illustration/four-cube-people.webp";
import fourCubePeopleAvif from "../content/illustration/four-cube-people.avif";

import goofyGuyLegacy from "../content/illustration/goofy-guy.jpg";
import goofyGuyAvif from "../content/illustration/goofy-guy.avif";

import hannahLegacy from "../content/illustration/hannah.jpg";
import hannahWebP from "../content/illustration/hannah.webp";
import hannahAvif from "../content/illustration/hannah.avif";

import laptopCoffeeBookLegacy from "../content/illustration/laptop-coffee-book.jpg";
import laptopCoffeeBookWebP from "../content/illustration/laptop-coffee-book.webp";
import laptopCoffeeBookAvif from "../content/illustration/laptop-coffee-book.avif";

import larryCircleLegacy from "../content/illustration/larry-circle.jpg";
import larryCircleWebP from "../content/illustration/larry-circle.webp";
import larryCircleAvif from "../content/illustration/larry-circle.avif";

import larryProfileLegacy from "../content/illustration/larry-profile.png";
import larryProfileWebP from "../content/illustration/larry-profile.webp";
import larryProfileAvif from "../content/illustration/larry-profile.avif";

import redHeadStudentLegacy from "../content/illustration/red-head-student.jpg";
import redHeadStudentWebP from "../content/illustration/red-head-student.webp";
import redHeadStudentAvif from "../content/illustration/red-head-student.avif";

import sadWomanLegacy from "../content/illustration/sad-woman.png";
import sadWomanWebP from "../content/illustration/sad-woman.webp";
import sadWomanAvif from "../content/illustration/sad-woman.avif";

import sabrinaLegacy from "../content/illustration/sabrina.jpg";
import sabrinaWebP from "../content/illustration/sabrina.webp";
import sabrinaAvif from "../content/illustration/sabrina.avif";

import sicquanBandLegacy from "../content/illustration/sicquan-band.jpg";
import sicquanBandWebP from "../content/illustration/sicquan-band.webp";
import sicquanBandAvif from "../content/illustration/sicquan-band.avif";

import stuckLegacy from "../content/illustration/stuck.png";
import stuckWebP from "../content/illustration/stuck.webp";
import stuckAvif from "../content/illustration/stuck.avif";

import weirdGuyLegacy from "../content/illustration/weird-guy.jpg";
import weirdGuyWebP from "../content/illustration/weird-guy.webp";
import weirdGuyAvif from "../content/illustration/weird-guy.avif";

import robotLegacy from "../content/illustration/robot.png";
import robotWebP from "../content/illustration/robot.webp";
import robotAvif from "../content/illustration/robot.avif";

import selfPortraitLegacy from "../content/illustration/self-portrait.png";
import selfPortraitWebP from "../content/illustration/self-portrait.webp";
import selfPortraitAvif from "../content/illustration/self-portrait.avif";

import boyWithBalloonLegacy from "../content/illustration/boy-with-balloon.jpg";
import boyWithBalloonWebP from "../content/illustration/boy-with-balloon.webp";
import boyWithBalloonAvif from "../content/illustration/boy-with-balloon.avif";

import lighthouseLegacy from "../content/illustration/lighthouse.jpg";
import lighthouseWebP from "../content/illustration/lighthouse.webp";
import lighthouseAvif from "../content/illustration/lighthouse.avif";

import manInBoatLegacy from "../content/illustration/man-in-boat.jpg";
import manInBoatWebP from "../content/illustration/man-in-boat.webp";
import manInBoatAvif from "../content/illustration/man-in-boat.avif";

const content: Content[] = [
  {
    legacySrc: coffeeSwimLegacy,
    sources: [
      {
        id: "avif",
        src: coffeeSwimAvif,
      },
      {
        id: "webp",
        src: coffeeSwimWebP,
      },
    ],
    id: "coffee-swim",
    description: "Coffee Swim",
  },
  {
    legacySrc: birdHouseLegacy,
    sources: [
      { id: "avif", src: birdHouseAvif },
      { id: "webp", src: birdHouseWebP },
    ],
    id: "bird-house",
    description: "Bird House",
  },
  {
    legacySrc: chemexFlowerLegacy,
    sources: [
      { id: "avif", src: chemexFlowerAvif },
      { id: "webp", src: chemexFlowerWebP },
    ],
    id: "chemex-flower",
    description: "Chemex Flower",
  },
  {
    legacySrc: cheersLegacy,
    sources: [
      { id: "avif", src: cheersAvif },
      { id: "webp", src: cheersWebP },
    ],
    id: "cheers",
    description: "Cheers",
  },
  {
    legacySrc: weirdGuyLegacy,
    sources: [
      { id: "avif", src: weirdGuyAvif },
      { id: "webp", src: weirdGuyWebP },
    ],
    id: "weird-guy",
    description: "Weird Guy",
  },
  {
    legacySrc: redHeadStudentLegacy,
    sources: [
      { id: "avif", src: redHeadStudentAvif },
      { id: "webp", src: redHeadStudentWebP },
    ],
    id: "red-head-student",
    description: "Red Head Student",
  },
  {
    legacySrc: laptopCoffeeBookLegacy,
    sources: [
      { id: "avif", src: laptopCoffeeBookAvif },
      { id: "webp", src: laptopCoffeeBookWebP },
    ],
    id: "laptop-coffee-book",
    description: "Laptop Coffee Book",
  },
  {
    legacySrc: fourCubePeopleLegacy,
    sources: [
      { id: "avif", src: fourCubePeopleAvif },
      { id: "webp", src: fourCubePeopleWebP },
    ],
    id: "four-cube-people",
    description: "Four Cube People",
  },
  {
    legacySrc: hannahLegacy,
    sources: [
      { id: "avif", src: hannahAvif },
      { id: "webp", src: hannahWebP },
    ],
    id: "hannah",
    description: "Hannah",
  },
  {
    legacySrc: goofyGuyLegacy,
    sources: [{ id: "avif", src: goofyGuyAvif }],
    id: "goofy-guy",
    description: "Goofy Guy",
  },
  {
    legacySrc: larryCircleLegacy,
    sources: [
      { id: "avif", src: larryCircleAvif },
      { id: "webp", src: larryCircleWebP },
    ],
    id: "larry-circle",
    description: "Larry Circle",
  },
  {
    legacySrc: sabrinaLegacy,
    sources: [
      { id: "avif", src: sabrinaAvif },
      { id: "webp", src: sabrinaWebP },
    ],
    id: "sabrina",
    description: "Sabrina",
  },
  {
    legacySrc: boyWithBalloonLegacy,
    description: "Boy with balloon",
    id: "boy-with-balloon",
    sources: [
      { id: "webp", src: boyWithBalloonWebP },
      { id: "avif", src: boyWithBalloonAvif },
    ],
  },
  {
    legacySrc: lighthouseLegacy,
    description: "lighthouse",
    id: "lighthouse",
    sources: [
      { id: "avif", src: lighthouseAvif },
      { id: "webp", src: lighthouseWebP },
    ],
  },
  {
    legacySrc: manInBoatLegacy,
    description: "Man in boat",
    id: "man-in-boat",
    sources: [
      { id: "avif", src: manInBoatAvif },
      { id: "webp", src: manInBoatWebP },
    ],
  },
  {
    legacySrc: sicquanBandLegacy,
    sources: [
      { id: "avif", src: sicquanBandAvif },
      { id: "webp", src: sicquanBandWebP },
    ],
    id: "sicquan-band",
    description: "Sicquan Band",
  },
  {
    legacySrc: drinksLegacy,
    sources: [
      { id: "avif", src: drinksAvif },
      { id: "webp", src: drinksWebP },
    ],
    id: "drinks",
    description: "Drinks",
  },
  {
    legacySrc: cocktailLegacy,
    sources: [
      { id: "avif", src: cocktailAvif },
      { id: "webp", src: cocktailWebP },
    ],
    id: "cocktail",
    description: "Cocktail",
  },
  {
    legacySrc: larryProfileLegacy,
    sources: [
      { id: "avif", src: larryProfileAvif },
      { id: "webp", src: larryProfileWebP },
    ],
    id: "larry-profile",
    description: "Larry Profile",
  },
  {
    legacySrc: sadWomanLegacy,
    sources: [
      { id: "avif", src: sadWomanAvif },
      { id: "webp", src: sadWomanWebP },
    ],
    id: "saw-woman",
    description: "Sad Woman",
  },
  {
    legacySrc: robotLegacy,
    sources: [
      { id: "avif", src: robotAvif },
      { id: "webp", src: robotWebP },
    ],
    id: "robot",
    description: "Robot",
  },
  {
    legacySrc: selfPortraitLegacy,
    sources: [
      { id: "avif", src: selfPortraitAvif },
      { id: "webp", src: selfPortraitWebP },
    ],
    id: "self-portrait",
    description: "Self Portrait",
  },
  {
    legacySrc: angelaLegacy,
    sources: [
      { id: "avif", src: angelaAvif },
      {
        id: "webp",
        src: angelaWebP,
      },
    ],
    id: "angela",
    description: "Angela",
  },
  {
    legacySrc: stuckLegacy,
    sources: [
      { id: "avif", src: stuckAvif },
      { id: "webp", src: stuckWebP },
    ],
    id: "stuck",
    description: "Stuck",
  },
];

const IllustrationGallery = () => <Gallery content={content} />;

export default IllustrationGallery;
