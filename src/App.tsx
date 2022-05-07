import { Route, Routes, NavLink } from "react-router-dom";
import GraphicDesignGallery from "./pages/GraphicDesignGallery";
import IllustrationGallery from "./pages/IllustrationGallery";
import styles from "./App.module.css";
import classNames from "classnames";

const App = () => (
  <div>
    <header className={styles.header}>
      <h1>Larry Mitchell</h1>
      <nav className={styles.navigation}>
        <ul>
          <li style={{ gridColumn: "3" }}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                classNames(styles.link, { [styles.active]: isActive })
              }
            >
              Illustrations
            </NavLink>
          </li>
          <li style={{ gridColumn: "5" }}>
            <NavLink to="graphic-design">Graphic Design</NavLink>
          </li>
          <li style={{ gridColumn: "7" }}>
            <NavLink to="about">About</NavLink>
          </li>
          <li style={{ gridColumn: "9" }}>
            <NavLink to="about">Instagram</NavLink>
          </li>
          <li style={{ gridColumn: "11" }}>
            <NavLink to="about">LinkedIn</NavLink>
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

export default App;
