import Gallery, { Content } from "../components/Gallery";

import angela from "../content/illustration/angela.png";
import birdHouse from "../content/illustration/bird-house.png";
import cheers from "../content/illustration/cheers.jpg";
import chemexFlower from "../content/illustration/chemex-flower.jpg";
import cocktail from "../content/illustration/cocktail.png";
import coffeeSwim from "../content/illustration/coffee-swim.jpg";
import drinks from "../content/illustration/drinks.png";
import fourCubePeople from "../content/illustration/four-cube-people.png";
import goofyGuy from "../content/illustration/goofy-guy.jpg";
import hannah from "../content/illustration/hannah.jpg";
import laptopCoffeeBook from "../content/illustration/laptop-coffee-book.jpg";
import larryCircle from "../content/illustration/larry-circle.jpg";
import larryProfile from "../content/illustration/larry-profile.png";
import redHeadStudent from "../content/illustration/red-head-student.jpg";
import sadWoman from "../content/illustration/sad-woman.png";
import sabrina from "../content/illustration/sabrina.jpg";
import sicquanBand from "../content/illustration/sicquan-band.jpg";
import stuck from "../content/illustration/stuck.png";
import weirdGuy from "../content/illustration/weird-guy.jpg";
import robot from "../content/illustration/robot.png";
import selfPortrait from "../content/illustration/self-portrait.png";

const content: Content[] = [
  { src: coffeeSwim, id: "coffee-swim", description: "Coffee Swim" },
  {
    src: birdHouse,
    id: "bird-house",
    description: "Bird House",
  },
  {
    src: chemexFlower,
    id: "chemex-flower",
    description: "Chemex Flower",
  },
  {
    src: cheers,
    id: "cheers",
    description: "Cheers",
  },
  { src: weirdGuy, id: "weird-guy", description: "Weird Guy" },
  {
    src: redHeadStudent,
    id: "red-head-student",
    description: "Red Head Student",
  },
  {
    src: laptopCoffeeBook,
    id: "laptop-coffee-book",
    description: "Laptop Coffee Book",
  },
  {
    src: fourCubePeople,
    id: "four-cube-people",
    description: "Four Cube People",
  },
  { src: hannah, id: "hannah", description: "Hannah" },
  {
    src: goofyGuy,
    id: "goofy-guy",
    description: "Goofy Guy",
  },
  {
    src: larryCircle,
    id: "larry-circle",
    description: "Larry Circle",
  },
  { src: sabrina, id: "sabrina", description: "Sabrina" },
  {
    src: sicquanBand,
    id: "sicquan-band",
    description: "Sicquan Band",
  },
  { src: drinks, id: "drinks", description: "Drinks" },
  {
    src: cocktail,
    id: "cocktail",
    description: "Cocktail",
  },
  {
    src: larryProfile,
    id: "larry-profile",
    description: "Larry Profile",
  },
  { src: sadWoman, id: "saw-woman", description: "Sad Woman" },
  { src: robot, id: "robot", description: "Robot" },
  {
    src: selfPortrait,
    id: "self-portrait",
    description: "Self Portrait",
  },
  {
    src: angela,
    id: "angela",
    description: "Angela",
  },
  { src: stuck, id: "stuck", description: "Stuck" },
];

const IllustrationGallery = () => <Gallery content={content} />;

export default IllustrationGallery;
