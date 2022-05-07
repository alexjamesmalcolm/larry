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
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                classNames(styles.link, { [styles.active]: isActive })
              }
            >
              Illustrations
            </NavLink>
          </li>
          <li>
            <NavLink to="graphic-design">Graphic Design</NavLink>
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
