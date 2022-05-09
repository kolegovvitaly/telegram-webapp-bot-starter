import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WebAppProvider from "./contexts/appContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <WebAppProvider>
      <App />
    </WebAppProvider>
  </React.StrictMode>
);
