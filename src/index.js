import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Router from "./Router";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  rootElement
);
