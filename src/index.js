import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ScrollToTop from "./components/common/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
