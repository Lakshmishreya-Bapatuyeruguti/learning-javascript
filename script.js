// "use strict";
document.getElementById("greet").innerHTML += "World";
console.log("Hello ");
var fname = "lakshmi";
let year = 2023;
console.log(fname);
console.log(typeof fname);
console.log(year);
console.log(typeof year);
let company = "Simform";
year = 2022;
console.log(year);
// {
//   let b = 102;
//   console.log(b);
// }
// console.log(b);
console.log(company[5]);
console.log(company.length);

// string methods
let myName = " shreya    ";
console.log(myName.length);
console.log(myName);
let newName = myName.trim(); //remove space
console.log(newName.length);
let capName = newName.toUpperCase();
console.log(capName);
let mySliceName = newName.slice(0, 3);
console.log(mySliceName);

// Type-Casting
let num = 10;
console.log(typeof num);
let num2 = num + ""; // shortcut to convert int to string
console.log(typeof num2);
let num3 = +num2; // shortcut to convert string to int
console.log(typeof num3);

let num4 = String(num3);
console.log(typeof num4);
let num5 = Number(num4);
console.log(typeof num5);

// string cocatenation
let fullName = fname + myName;
console.log(fullName);

// Template String

let doj = 2023;
office = "Simform Solutions";

let placed = `I Joined the ${office} in ${doj}`;
console.log(placed);

// ternary operator
let age = 20;
age > 21
  ? console.log("you are in your early 20's ")
  : console.log("you are less than 21");
//   And or ! operators
let friend = "Tom";
let friendAge = 10;
if (friend === "Tom" && friendAge === 10) {
  console.log("VAlid Friend");
}
if (friend === "Tom" || friendAge === 10) {
  console.log("VAlid Friend");
}
if (friend !== "Joe") {
  console.log(" Not VAlid Friend");
}
// prompt takes input as string by default

// let nump = prompt("Enter number");
// console.log(nump, typeof nump);

// let nump2 = +prompt("Enter number");
// console.log(nump2, typeof nump2);

// loopings

let n = 1;
while (n < 10) {
  console.log(n);
  n++;
}
let s = 0;
for (let m = 1; m <= 100; m++) {
  s += m;
}
console.log(s);

let k = 10;
do {
  console.log(k);
} while (k < 10);
