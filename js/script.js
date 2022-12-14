"use strict";
// ---Init HTML formatting
const body = document.body;
const mapBox = document.createElement('div');
mapBox.className = "map-box";
body.appendChild(mapBox);
//
const map = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//
mapBox.appendChild(map);
//
//
let fetchedSVG = "";
//
fetch("../Irrelevant/LV_areas_opt.svg")
    // fetch("../media/svg/LV_areas_clean.svg")
    .then(response => response.text())
    .then(svg => fetchedSVG = svg);
const parser = new DOMParser();
const parsedSVG = parser.parseFromString(fetchedSVG, "image/svg+xml");
const rigaPath = parsedSVG.getElementById("heyhey");
console.log(parsedSVG);
mapBox.appendChild(rigaPath);
