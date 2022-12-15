"use strict";
// ---Init HTML formatting
const body = document.body;
const mapBox = document.createElement('div');
mapBox.className = "map-box";
body.appendChild(mapBox);
//
const map = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
map.id = "svg-map";
//
mapBox.appendChild(map);
//
//
//
fetch("../media/svg/LV_areas_clean.svg")
    .then(response => response.text())
    .then((response) => {
    const fetchedSVG = response;
    if (fetchedSVG.indexOf('<svg') === -1) {
        return;
    }
    const parser = new DOMParser();
    const parsedSVG = parser.parseFromString(fetchedSVG, "image/svg+xml");
    console.log(fetchedSVG);
    const rigaPath = parsedSVG.getElementById("0000000");
    rigaPath.setAttribute("fill", "Purple");
    rigaPath.setAttribute("stroke", "Orange");
    if (null !== rigaPath) {
        map.appendChild(rigaPath);
    }
});
