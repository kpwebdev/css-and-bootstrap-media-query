const widthSpan = document.querySelector("span#width");
const heightSpan = document.querySelector("span#height");
const responsiveDiv = document.querySelector("div#responsiveDiv");

function updateWidthAndHeight(e) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  widthSpan.innerHTML = width;
  heightSpan.innerHTML = height;
}

window.addEventListener("DOMContentLoaded", updateWidthAndHeight);

window.addEventListener("resize", updateWidthAndHeight);

console.log("widthSpan", widthSpan);
console.log("heightSpan", heightSpan);
console.log("responsiveDiv", responsiveDiv);
