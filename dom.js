// selecting element by id
document.getElementById("greetDOM").innerHTML += " DOM ";
document.getElementById("para").style.color = "red";
//console logging our document object
console.dir(document);
// to change button style on click
function changeColFun() {
  document.getElementById("btn").style.backgroundColor = "blue";
  document.getElementById("btn").style.color = "white";
}
