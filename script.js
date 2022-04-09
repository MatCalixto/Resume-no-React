const navigation = document.getElementById("navigation");
const menuItem1 = document.getElementById("menuItem1")
const menuItem2 = document.getElementById("menuItem2")
const menuItem3 = document.getElementById("menuItem3")
const menuItem4 = document.getElementById("menuItem4")
const bar1 = document.getElementById("bar1")
const bar2 = document.getElementById("bar2")
let pressed = true;
function toggleMenu() {
  if(pressed) {
    menuItem1.style.fontSize = "1.4em"
    menuItem2.style.fontSize = "1.4em"
    menuItem3.style.fontSize = "1.4em"
    menuItem4.style.fontSize = "1.4em"
    navigation.style.display = "flex"
    navigation.style.flexDirection = "column"
    navigation.style.maxHeight = "40vh"
    navigation.style.gap = "0.5em"
    navigation.style.alignItems = "center"
    bar1.style.transform = "rotate(45deg) translate(0, 1vh)"
    bar2.style.transform = "rotate(-45deg) translate(0, -1vh)"
    pressed = false;
  }
  else {
    menuItem1.style.fontSize = "0em"
    menuItem2.style.fontSize = "0em"
    menuItem3.style.fontSize = "0em"
    menuItem4.style.fontSize = "0em"
    navigation.style.maxHeight = "0vh"
    bar1.style.transform = "rotate(0deg) translate(0px, 0px)"
    bar2.style.transform = "rotate(0deg) translate(0px, 0px)"
    pressed = true;
  }
}
const startDiv = document.getElementById("startDiv");
const skillsDiv = document.getElementById("skillsDiv");
const endDiv = document.getElementById("endDiv");
let scroll = document.scrollingElement.scrollTop;
let xvalue = "center";
let yvalue = scroll * 0.5;
startDiv.style.backgroundPosition = xvalue + " " + yvalue + "px";
skillsDiv.style.backgroundPosition = xvalue + " " + (yvalue - 500) + "px";
endDiv.style.backgroundPosition = xvalue + " " + (yvalue + 50) + "px";
const header = document.getElementById("header");
document.getElementById("body").onscroll = function myFunc() {
  let scroll = document.scrollingElement.scrollTop;
  let xvalue = "center";
  let yvalue = scroll * 0.5;
  startDiv.style.backgroundPosition = xvalue + " " + yvalue + "px";
  skillsDiv.style.backgroundPosition = xvalue + " " + (yvalue - 500) + "px";
  endDiv.style.backgroundPosition = xvalue + " " + (yvalue + 50) + "px";
  if (scroll == 0) {
    header.style.transition = "all 0.3s ease-in-out";
    header.style.background = "";
  }
  else {
    header.style.transition = "all 0.3s ease-in-out";
    header.style.background = "rgb(21, 21, 21)";
  }
}