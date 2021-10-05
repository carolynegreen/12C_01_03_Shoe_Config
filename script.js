"use strict";
document.addEventListener("DOMContentLoaded", start);

let swoosh;
let tops;
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
  tops = document.querySelector("#Top");
  back = document.querySelector("#Back");
  middle = document.querySelector("#Middle");
  panels = document.querySelector("#Panels");
  sole = document.querySelector("#Sole");
  laces = document.querySelector("#Laces");

  manipulateSvg();
}
let currentColor = "white";

function setColor(part, colorFill) {
  part.style.fill = colorFill;
}

function manipulateSvg() {
  setColor(swoosh, currentColor);
  setColor(tops, currentColor);
  setColor(back, currentColor);
  setColor(middle, currentColor);
  setColor(panels, currentColor);
  setColor(sole, currentColor);
  setColor(laces, currentColor);

  swoosh.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
  });
  tops.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
  });
  back.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
  });
  middle.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
  });
  panels.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
  });
  sole.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
  });
  laces.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
  });

  document.querySelectorAll("circle").forEach((element) => {
    element.addEventListener("click", (event) => {
      currentColor = event.target.style.fill;
      console.log(currentColor);
    });
  });
}
