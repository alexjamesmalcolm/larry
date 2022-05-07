import { Route, Routes } from "react-router-dom";
import GraphicDesignGallery from "./pages/GraphicDesignGallery";
import IllustrationGallery from "./pages/IllustrationGallery";

const App = () => (
  <div>
    <header>
      <h1>Larry Mitchell</h1>
    </header>
    <Routes>
      <Route index element={<IllustrationGallery />} />
      <Route path="/graphic-design" element={<GraphicDesignGallery />} />
    </Routes>
  </div>
);

export default App;
