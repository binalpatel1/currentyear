import React from "react";
import ReactDOM from "react-dom";

const fName = "binal";
const mName = "p";
const currentTime = new Date();
const currentYear = currentTime.getFullYear();

ReactDOM.render(
  <div>
    <h1>your name {fName + " " + mName}</h1>
    <h2>current year {currentYear}</h2>
  </div>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
