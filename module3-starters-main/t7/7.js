'use strict';
document.getElementById("trigger").onmouseover = function() {mouseOver()};
document.getElementById("trigger").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("target").src = 'img/picB.jpg';
}

function mouseOut() {
  document.getElementById("target").src = 'img/picA.jpg';
}