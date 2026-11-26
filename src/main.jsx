import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "../assets/css/styles.css";
import "../assets/css/redesign.css";
import "../assets/css/additions.css";
import "../assets/css/lab-sections.css";
import "../assets/css/theme.css";
import "../assets/css/portfolio.css";

document.documentElement.classList.add("js");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
