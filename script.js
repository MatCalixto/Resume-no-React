const navigation = document.getElementById("navigation");
const menuItem1 = document.getElementById("menuItem1")
const menuItem2 = document.getElementById("menuItem2")
const menuItem3 = document.getElementById("menuItem3")
const menuItem4 = document.getElementById("menuItem4")
const bar1 = document.getElementById("bar1")
const bar2 = document.getElementById("bar2")
let pressed = true;
function toggleMenu() {
  let docWidth = document.body.clientWidth;
  if (docWidth <= 700) {
    if(pressed) {
      menuItem1.style.fontSize = "1.4em"
      menuItem2.style.fontSize = "1.4em"
      menuItem3.style.fontSize = "1.4em"
      menuItem4.style.fontSize = "1.4em"
      navigation.style.display = "flex"
      navigation.style.flexDirection = "column"
      navigation.style.alignItems = "center"
      navigation.style.maxHeight = "40vh"
      navigation.style.gap = "0.5em"
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
}
const startDiv = document.getElementById("startDiv");
const skillsDiv = document.getElementById("skillsDiv");
const Skills = document.getElementById("Skills");
const Projects = document.getElementById("Projects");
const Contact = document.getElementById("Contact");
const SkillsY = Skills.getBoundingClientRect().y - 20 - startDiv.getBoundingClientRect().y;
const ProjectsY = Projects.getBoundingClientRect().y - 40 - startDiv.getBoundingClientRect().y;
const ContactY = Contact.getBoundingClientRect().y - 600 -
startDiv.getBoundingClientRect().y;
const docWidth = document.body.clientWidth;
const docHeight = document.body.clientHeight;
console.log (SkillsY, ProjectsY, ContactY, docHeight)
const header = document.getElementById("header");
document.getElementById("body").onscroll = function myFunc
() {
  let scroll = document.scrollingElement.scrollTop;
  let yvalue = scroll * 0.5;
  startDiv.style.backgroundPosition = "center " + yvalue + "px";
  skillsDiv.style.backgroundPosition = "center " + (yvalue - 500) + "px";
  Contact.style.backgroundPosition = "center " + (yvalue + 50) + "px";
  if (scroll == 0) {
    header.style.transition = "all 0.3s ease-in-out";
    header.style.background = "";
  }
  else {
    header.style.transition = "all 0.3s ease-in-out";
    header.style.background = "rgb(21, 21, 21)";
  }
  if (docWidth <= 700) {
    if (scroll < SkillsY) {
      menuItem1.style.color = "rgb(168, 168, 168)"; 
      menuItem2.style.color = "white";
      menuItem3.style.color = "white";
      menuItem4.style.color = "white";
    }
    else if (scroll >= SkillsY && scroll < ProjectsY) {
      menuItem1.style.color = "white"; 
      menuItem2.style.color = "rgb(168, 168, 168)";
      menuItem3.style.color = "white";
      menuItem4.style.color = "white";
    }
    else if (scroll >= ProjectsY && scroll < ContactY) {
      menuItem1.style.color = "white"; 
      menuItem2.style.color = "white";
      menuItem3.style.color = "rgb(168, 168, 168)";
      menuItem4.style.color = "white";
    }
    else if (scroll >= ContactY) {
      menuItem1.style.color = "white"; 
      menuItem2.style.color = "white";
      menuItem3.style.color = "white";
      menuItem4.style.color = "rgb(168, 168, 168)";
    }
  }
}