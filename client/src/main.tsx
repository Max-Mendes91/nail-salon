import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { initGA, setupScrollTracking } from "./lib/analytics";

// Initialize Google Analytics
initGA();

// Setup scroll depth tracking
setupScrollTracking();

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
