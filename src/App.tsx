import { Route, Routes } from "react-router-dom";
import GraphicDesignGallery from "./pages/GraphicDesignGallery";
import IllustrationGallery from "./pages/IllustrationGallery";

const App = () => (
  <Routes>
    <Route index element={<IllustrationGallery />} />
    <Route path="/graphic-design" element={<GraphicDesignGallery />} />
  </Routes>
);

export default App;
