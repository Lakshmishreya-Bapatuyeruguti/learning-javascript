//console logging our document object
console.dir(document);

// selecting element by id
document.getElementById("greetDOM").innerHTML += " DOM ";

//selecting element by class
let collec = (document.getElementsByClassName("pTag")[0].style.color = "red");

//queryselector -return first class
let item = document.querySelector(".item");
console.log(item);

//queryselectorAll - Returns all as a node list
let items = document.querySelectorAll(".item");
console.log(items);

//targeting one of the list item
document.querySelectorAll(".item")[3].style.backgroundColor = "lightgreen";

//selecting by tag
let collTag = document.getElementsByTagName("li");
console.log(collTag);

//innerHTML
document.querySelector("h2").innerHTML += " - Appending content";
document.querySelector("h3").innerHTML = " Overwriting content ";
document.querySelector("h4").innerHTML =
  "<p class=secHeading> Paragragh tag added using innerHTML</p>";

//classList
let cList = document.querySelector("#greetDOM").classList;
console.log(cList);
//add class
cList.add("welcome");
//remove class
cList.remove("welcome");
// toggle class
cList.toggle("welcome");
cList.toggle("welcome");

//create element

let createListItem = document.createElement("li");
createListItem.textContent = "added element using create element";
let listItem = document.querySelector(".itemList");
//append
listItem.appendChild(createListItem);
//prepend
listItem.prepend(createListItem);

//getting dimensions of an element

let info = document.querySelector("#btn").getBoundingClientRect();
console.log(info);

// to change button style on click without eventListener
function bgColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
function changeColFun() {
  // document.getElementById("btn").style.backgroundColor = "blue";
  // document.getElementById("btn").style.color = "white ";
  const bg = bgColor();
  console.log(bg);
  document.body.style.background = `${bg}`;
}
//to change button style on click with eventListener - click
const btn = document.querySelector(".btnType2");
btn.addEventListener("click", function () {
  btn.style.backgroundColor = "seagreen";
  btn.style.color = "white ";
  // this in event listeners
  console.log(this.value);
});

//  keyboard press event listener
document.addEventListener("keydown", (event) => {
  const keyPressed = document.querySelector(".pTag2");
  console.log(event);
  keyPressed.innerHTML += ` ${event.key}`;
});
document.addEventListener("keypress", (event) => {
  const keyPressed = document.querySelector(".pTag3");
  console.log(event);
  keyPressed.innerHTML += ` ${event.key}`;
});

//submit event

const formSelect = document.querySelector(".formType");
const submittedVal = document.querySelector(".formType input[type='text']");
formSelect.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(submittedVal.value);
});
