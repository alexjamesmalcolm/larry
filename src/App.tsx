import { Route, Routes, NavLink } from "react-router-dom";
import GraphicDesignGallery from "./pages/GraphicDesignGallery";
import IllustrationGallery from "./pages/IllustrationGallery";
import styles from "./App.module.css";
import classNames from "classnames";
import { useCallback } from "react";
import instagram from "./images/instagram.svg";
import linkedin from "./images/linkedin.svg";
import About from "./pages/About";

const App = () => {
  const navLinkClassName = useCallback<
    (props: { isActive: boolean }) => string | undefined
  >(
    ({ isActive }) => classNames(styles.link, { [styles.active]: isActive }),
    []
  );
  return (
    <div>
      <header className={styles.header}>
        <h1 id={styles.larryMitchell}>Larry Mitchell</h1>
        <nav className={styles.navigation}>
          <ul>
            <li id={styles.illustrations}>
              <NavLink to="/" className={navLinkClassName}>
                Illustrations
              </NavLink>
            </li>
            <li id={styles.graphicDesign}>
              <NavLink to="graphic-design" className={navLinkClassName}>
                Graphic Design
              </NavLink>
            </li>
            <li id={styles.about}>
              {/* <NavLink to="about" className={navLinkClassName}>
                About
              </NavLink> */}
            </li>
            <li id={styles.instagram}>
              <a
                href="https://www.instagram.com/larry.mitchell/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <img src={instagram} alt="Instagram" />
              </a>
            </li>
            <li id={styles.linkedin}>
              <a
                href="https://www.linkedin.com/in/lawrence-mitchell-a89313102/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <img height="20px" src={linkedin} alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route index element={<IllustrationGallery />} />
        <Route path="/graphic-design" element={<GraphicDesignGallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
