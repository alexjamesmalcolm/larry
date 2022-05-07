import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

const Provider = ({ children }: { children?: ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

export default Provider;
