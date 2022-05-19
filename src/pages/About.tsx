import styles from "./About.module.css";
import headshot from "../images/headshot.jpg";

const About = () => (
  <div className={styles.container}>
    <img
      src={headshot}
      alt="Larry Mitchell in an orange beanie with a nice jean jacket"
      className={styles.headshot}
    />
    <p className={styles.description}>
      Born in Cleveland, Ohio Larry moved to Columbus, Ohio to study Graphic
      Design and Fine Arts at the school of Columbus College of Art and Design.
      During this time Larry worked as a freelance Graphic Designer for both
      small and large companies while working at a local ice cream shop.
    </p>
  </div>
);

export default About;
