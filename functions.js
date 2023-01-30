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
