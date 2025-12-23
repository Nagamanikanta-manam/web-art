import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
   <BrowserRouter basename="/webart">

      <ScrollToTop />

      <App />
    </BrowserRouter>
  </StrictMode>
);
