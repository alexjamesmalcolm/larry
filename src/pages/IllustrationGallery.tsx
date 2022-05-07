import Gallery, { Content } from "../components/Gallery";

import angela from "../content/illustration/angela.png";
import birdHouse from "../content/illustration/bird-house.png";
import characterExplorationTwo from "../content/illustration/character-exploration-2.jpg";
import characterExploration from "../content/illustration/character-exploration.jpg";
import cheers from "../content/illustration/cheers.jpg";
import chemexFlower from "../content/illustration/chemex-flower.jpg";
import cocktail from "../content/illustration/cocktail.png";
import coffeeSwim from "../content/illustration/coffee-swim.jpg";
import drinks from "../content/illustration/drinks.png";
import fourCubePeople from "../content/illustration/four-cube-people.png";
import goofyGuy from "../content/illustration/goofy-guy.jpg";
import guyOnLaptop from "../content/illustration/guy-on-laptop.jpg";
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
  { src: coffeeSwim, id: "coffee-swim", name: "Coffee Swim", description: "" },
  {
    src: redHeadStudent,
    id: "red-head-student",
    name: "Red Head Student",
    description: "",
  },
  {
    src: chemexFlower,
    id: "chemex-flower",
    name: "Chemex Flower",
    description: "",
  },
  {
    src: cheers,
    id: "cheers",
    name: "Cheers",
    description: "",
  },
  { src: weirdGuy, id: "weird-guy", name: "Weird Guy", description: "" },
  {
    src: guyOnLaptop,
    id: "guy-on-laptop",
    name: "Guy on Laptop",
    description: "",
  },
  {
    src: laptopCoffeeBook,
    id: "laptop-coffee-book",
    name: "Laptop Coffee Book",
    description: "",
  },
  {
    src: characterExplorationTwo,
    id: "character-exploration-two",
    name: "Character Exploration Two",
    description: "",
  },
  {
    src: characterExploration,
    id: "character-exploration",
    name: "Character Exploration",
    description: "",
  },
  {
    src: fourCubePeople,
    id: "four-cube-people",
    name: "Four Cube People",
    description: "",
  },
  { src: hannah, id: "hannah", name: "Hannah", description: "" },
  {
    src: goofyGuy,
    id: "goofy-guy",
    name: "Goofy Guy",
    description: "",
  },
  {
    src: larryCircle,
    id: "larry-circle",
    name: "Larry Circle",
    description: "",
  },
  { src: sabrina, id: "sabrina", name: "Sabrina", description: "" },
  {
    src: sicquanBand,
    id: "sicquan-band",
    name: "Sicquan Band",
    description: "",
  },
  { src: drinks, id: "drinks", name: "Drinks", description: "" },
  {
    src: cocktail,
    id: "cocktail",
    name: "Cocktail",
    description: "",
  },
  {
    src: larryProfile,
    id: "larry-profile",
    name: "Larry Profile",
    description: "",
  },
  { src: sadWoman, id: "saw-woman", name: "Sad Woman", description: "" },
  { src: robot, id: "robot", name: "Robot", description: "" },
  {
    src: selfPortrait,
    id: "self-portrait",
    name: "Self Portrait",
    description: "",
  },
  {
    src: angela,
    id: "angela",
    name: "Angela",
    description: "",
  },
  {
    src: birdHouse,
    id: "bird-house",
    name: "Bird House",
    description: "",
  },
  { src: stuck, id: "stuck", name: "Stuck", description: "" },
];

const IllustrationGallery = () => <Gallery content={content} />;

export default IllustrationGallery;
