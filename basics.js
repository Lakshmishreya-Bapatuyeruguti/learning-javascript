// "use strict";

// Type of and variable declaration

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

console.log(company[5]);
console.log(company.length);

//string methods

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
// shortcut to convert int to string
let num2 = num + "";
console.log(typeof num2);
// shortcut to convert string to int
let num3 = +num2;
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

// And or ! operators

let friend = "Tom";
let friendAge = 10;
if (friend === "Tom" && friendAge === 10) {
  console.log("Valid Friend");
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

// Arrays -reference type , array in js is a object

let a = [10, "shreya", "mango"];
console.log(typeof a); //
console.log(Array.isArray(a));

// object literal
let obj = {};
console.log(typeof obj);
console.log(Array.isArray(obj));

// Array Methods

console.log("length of array:", a.length);
console.log(a);
a.push("World"); //push
console.log(a);
let popped = a.pop(); //pop
console.log(a);
console.log("popped element :", popped);
let shifted = a.shift(); // shift- removes first element
console.log(a);
console.log("shifted element :", shifted);
let unshifted = a.unshift("LAkshmi"); //unshift add an element to first place
console.log(a);
console.log("added element :", unshifted);

let a1 = [1, 2, 3];
let a2 = a1; //copying a1 in a2
a1.push(4); //changes will be reflected in both arrays as arrays are reference typed
console.log(a1);
console.log(a2);
console.log("Are both array referring to same memory location: ", a1 === a2);

// Cloning Array - so that changes in one array will not impact other array

let a3 = [10, 20];
let a4 = a3.slice(0); //One method to clone - use slice
a3.push(4);
console.log(a3);
console.log(a4);
console.log("Are both array referring to same memory location: ", a3 === a4);

let a5 = [5, 15];
let a6 = a5.concat(); // another method to clone - use concat
a5.push(4);
console.log(a5);
console.log(a6);
console.log("Are both array referring to same memory location: ", a5 === a6);

// spread operator in arrays

let a7 = [50, 100];
let a8 = [...a7, 200, 600]; // another method to clone - use spead operator
a7.push(4);
console.log(a7);
console.log(a8);
console.log("Are both array referring to same memory location: ", a7 === a8);

// For of Loop - returns values in array one by one

let animals = ["dog", "cat", "rat", "mouse"];
for (let animal of animals) {
  console.log(animal);
}

// For in Loop - returns indexes of array one by one

for (let index in animals) {
  console.log(index);
  console.log(animals[index]);
}

//Array destructuring

let scores = [10, 20, 60, 90];
console.log(scores);
let [score1, score2, score3, score4, score5] = scores; //array destructuring
console.log(score1, score2, score3, score4, score5);
console.log(score1, score2);
// array destructuring skiiping a third element by using ','
let [score1a, score2a, , score4a] = scores;
console.log(score1a, score2a, score4a);
//array destructuring by using a array with spread operator
let [score1b, ...newScoreArr] = scores;
console.log(newScoreArr);

//sets

let numSet = new Set();
numSet.add(5);
numSet.add(10);
numSet.add(51);
numSet.add(105);
console.log(numSet);
if (numSet.has(105)) {
  console.log("hurray");
}

//Map as data structure

let mapItems = new Map();
mapItems.set("fname", "shreya");
console.log(mapItems);
mapItems.set(1, 15);
console.log(mapItems);
