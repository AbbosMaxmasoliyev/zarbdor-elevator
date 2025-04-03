import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./config/i18.js"; // 🔥 i18nni shu yerda chaqiramiz

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
