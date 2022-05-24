import { Route, Routes, NavLink } from "react-router-dom";
import styles from "./App.module.css";
import classNames from "classnames";
import { lazy, Suspense, useCallback } from "react";
import instagram from "./images/instagram.svg";
import linkedin from "./images/linkedin.svg";
import Loading from "./pages/Loading";

const GraphicDesignGallery = lazy(() => import("./pages/GraphicDesignGallery"));
const IllustrationGallery = lazy(() => import("./pages/IllustrationGallery"));
const About = lazy(() => import("./pages/About"));
const Admin = lazy(() => import("./pages/Admin"));

const App = () => {
  const navLinkClassName = useCallback<
    (props: { isActive: boolean }) => string | undefined
  >(
    ({ isActive }) => classNames(styles.link, { [styles.active]: isActive }),
    []
  );
  return (
    <>
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
                <img
                  src={instagram}
                  alt="Instagram"
                  width="24px"
                  height="24px"
                />
              </a>
            </li>
            <li id={styles.linkedin}>
              <a
                href="https://www.linkedin.com/in/lawrence-mitchell-a89313102/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <img src={linkedin} alt="LinkedIn" width="20px" height="20px" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Routes>
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <IllustrationGallery />
              </Suspense>
            }
          />
          <Route
            path="/graphic-design"
            element={
              <Suspense fallback={<Loading />}>
                <GraphicDesignGallery />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/admin"
            element={
              <Suspense fallback={<Loading />}>
                <Admin />
              </Suspense>
            }
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
