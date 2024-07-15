import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./i18n.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense fallback="laading...">
      <Router>
        <App />
      </Router>
    </React.Suspense>
  </React.StrictMode>
);
