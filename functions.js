function fun() {
  console.log("This is function");
}
fun();

function sumFun(a, b) {
  return a + b;
}
console.log(sumFun(1, 2));
let sum = sumFun(10, 20);
console.log(sum);

// function expressions

let hello = function greet() {
  console.log("hello everyone");
};
hello();

// arrow functions

const arrowFun = (n1, n2) => {
  console.log("This is arrow function");
};
arrowFun();

// functions inside function

const parent = () => {
  console.log("Parent");
  const child1 = () => {
    console.log("child1");
  };
  const child2 = () => {
    console.log("child2");
    child1();
  };
  child2();
};
parent();

// default parameters

const addTwo = (N1, N2 = 9) => {
  return N1 + N2;
};
console.log(addTwo(1, 6));
console.log(addTwo(1));

//Rest Parameters -(...param name)

const list = (a, b, ...c) => {
  console.log(a);
  console.log(b);
  console.log(c);
};
list(10, 20, 30, 40, 50);

// Parameter destructuring

const student = {
  givenName: "Lakshmi Shreya",
  school: "Oakwood School",
  year: 2017,
};
const print = ({ givenName, year }) => {
  console.log(givenName);
  console.log(year);
};
print(student);

// callback functions - giving a function as parameter to another function

const sayGreet = () => {
  console.log("Hello This is callback");
};
const sayHello = (callbackFun) => {
  console.log(callbackFun);
  callbackFun();
};
sayHello(sayGreet);

// Function returning function

function join() {
  function abc() {
    return "Welcome aboard!";
  }
  return abc;
}
let res = join();
console.log(res);
// calling returned function
console.log(res());

//  First Class Functions And Higher Order Functions

function plusOne(x) {
  return x + 1;
}
function plusTwo(fcf, val) {
  return fcf(val) + 2;
}
console.log(plusTwo(plusOne, 10));

//plusOne - first class function as it is passed as input parameter to plusTwo function
//plusTwo - higher order function as it takes plusOne function as input and is also returning a function
