import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter as Router } from "react-router-dom";
import "./i18n.js";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <React.Suspense fallback="laading...">
        <Router>
          <App />
        </Router>
      </React.Suspense>
    </Provider>
  </React.StrictMode>
);
