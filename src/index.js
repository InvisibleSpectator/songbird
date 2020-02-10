import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./progressbar/progressbar.component";
let a = ["s","as","asda"]; 
ReactDOM.render(<App stages={a}/>, document.querySelector("#root"));