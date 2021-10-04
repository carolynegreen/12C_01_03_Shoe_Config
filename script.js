"use strict";
window.addEventListener("DOMContentLoaded", start);

let swoosh;
let toe;
let back;
let middle;
let panels;
let sole;
let laces;

async function start() {
  let response = await fetch("airforce.svg");
  let mySvgData = await response.text();
  document.querySelector("section").innerHTML = mySvgData;

  swoosh = document.querySelector("#Swoosh");
  toe = document.querySelector("#Top");
  back = document.querySelector("#Back");
  middle = document.querySelector("#Middle");
  panels = document.querySelector("#Panels");
  sole = document.querySelector("#Sole");
  laces = document.querySelector("#Laces");

  manipSVG();
}

let currentColor = "white";

function setColor(element, colorString) {
  console.log(element);
  console.log(colorString);
  element.style.fill = colorString;
}

function manipSVG() {
  setColor(swoosh, currentColor);
  setColor(toe, currentColor);
  setColor(back, currentColor);
  setColor(middle, currentColor);
  setColor(panels, currentColor);
  setColor(sole, currentColor);
  setColor(laces, currentColor);

  swoosh.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
  });
  toe.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
  });

  document.querySelectorAll(".color-selector").forEach((element) => {
    element.addEventListener("click", (event) => {
      currentColor = event.target.style.backgroundColor;
      console.log(currentColor);
    });
  });
}
