import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/news_explorer_frontend/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
