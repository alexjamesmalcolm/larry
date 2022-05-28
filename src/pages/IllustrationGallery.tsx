import Gallery, { Content } from "../components/Gallery";
import { images } from "../content/illustration";
import { prepareContent } from "../utils/prepareContent";

const content: Content[] = prepareContent({
  images,
  folderName: "illustration",
  content: [
    {
      legacyType: "jpg",
      id: "coffee-swim",
      description: "Coffee Swim",
    },
    {
      legacyType: "png",
      id: "bird-house",
      description: "Bird House",
    },
    {
      legacyType: "jpg",
      id: "chemex-flower",
      description: "Chemex Flower",
    },
    {
      legacyType: "jpg",
      id: "cheers",
      description: "Cheers",
    },
    {
      legacyType: "jpg",
      id: "weird-guy",
      description: "Weird Guy",
    },
    {
      legacyType: "jpg",
      id: "red-head-student",
      description: "Red Head Student",
    },
    {
      legacyType: "jpg",
      id: "laptop-coffee-book",
      description: "Laptop Coffee Book",
    },
    {
      legacyType: "png",
      id: "four-cube-people",
      description: "Four Cube People",
    },
    {
      legacyType: "jpg",
      id: "hannah",
      description: "Hannah",
    },
    {
      legacyType: "jpg",
      id: "goofy-guy",
      description: "Goofy Guy",
    },
    {
      legacyType: "jpg",
      id: "larry-circle",
      description: "Larry Circle",
    },
    {
      legacyType: "jpg",
      id: "sabrina",
      description: "Sabrina",
    },
    {
      legacyType: "jpg",
      description: "Boy with balloon",
      id: "boy-with-balloon",
    },
    {
      legacyType: "jpg",
      description: "lighthouse",
      id: "lighthouse",
    },
    {
      legacyType: "jpg",
      description: "Man in boat",
      id: "man-in-boat",
    },
    {
      legacyType: "jpg",
      id: "sicquan-band",
      description: "Sicquan Band",
    },
    {
      legacyType: "png",
      id: "drinks",
      description: "Drinks",
    },
    {
      legacyType: "png",
      id: "cocktail",
      description: "Cocktail",
    },
    {
      legacyType: "png",
      id: "larry-profile",
      description: "Larry Profile",
    },
    {
      legacyType: "png",
      id: "sad-woman",
      description: "Sad Woman",
    },
    {
      legacyType: "png",
      id: "robot",
      description: "Robot",
    },
    {
      legacyType: "png",
      id: "self-portrait",
      description: "Self Portrait",
    },
    {
      legacyType: "png",
      id: "angela",
      description: "Angela",
    },
    {
      legacyType: "png",
      id: "stuck",
      description: "Stuck",
    },
  ],
});

const IllustrationGallery = () => <Gallery content={content} />;

export default IllustrationGallery;
