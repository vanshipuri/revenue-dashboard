// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // ✅ no typo, capital A, right path

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
