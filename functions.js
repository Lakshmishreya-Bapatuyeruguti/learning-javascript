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

let hello = function greet() {
  console.log("hello everyone");
};
hello();
