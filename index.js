"use strict";

const navToggle = () => {
  let x = document.getElementById("nav-bar");
  if (x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
};

// const navToggle = () => {
//   let x = document.getElementById("nav-bar");
//   x.className === "nav-bar" ?
//   x.className += " responsive":
//   x.className = "nav-bar";
// };
