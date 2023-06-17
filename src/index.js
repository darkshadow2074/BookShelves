import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { CategoryProvider } from "./context/categoryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <CategoryProvider>
        <App />
      </CategoryProvider>
    </Router>
  </React.StrictMode>
);
