import { Route, Routes, NavLink } from "react-router-dom";
import GraphicDesignGallery from "./pages/GraphicDesignGallery";
import IllustrationGallery from "./pages/IllustrationGallery";
import styles from "./App.module.css";
import classNames from "classnames";
import { useCallback } from "react";
import instagram from "./images/instagram.svg";
import linkedin from "./images/linkedin.svg";

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
        <h1>Larry Mitchell</h1>
        <nav className={styles.navigation}>
          <ul>
            <li style={{ gridColumn: "3" }}>
              <NavLink to="/" className={navLinkClassName}>
                Illustrations
              </NavLink>
            </li>
            <li style={{ gridColumn: "5" }}>
              <NavLink to="graphic-design" className={navLinkClassName}>
                Graphic Design
              </NavLink>
            </li>
            <li style={{ gridColumn: "7" }}>
              <NavLink to="about" className={navLinkClassName}>
                About
              </NavLink>
            </li>
            <li style={{ gridColumn: "9" }}>
              <a
                href="https://www.instagram.com/larry.mitchell/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <img src={instagram} alt="Instagram" />
              </a>
            </li>
            <li style={{ gridColumn: "11" }}>
              <a
                href="https://www.linkedin.com/in/lawrence-mitchell-a89313102/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <img
                  height="20px"
                  className={styles.linkedin}
                  src={linkedin}
                  alt="LinkedIn"
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route index element={<IllustrationGallery />} />
        <Route path="/graphic-design" element={<GraphicDesignGallery />} />
      </Routes>
    </div>
  );
};

export default App;
