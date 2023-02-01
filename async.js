//set Timeout

console.log("start");
setTimeout(() => {
  console.log("inside set timeout -0sec");
}, 0);
for (let i = 0; i < 10000; i++) {
  console.log("....");
}
console.log("end!");

//clearing Timeout

console.log("start 2");
const id = setTimeout(() => {
  console.log("inside set timeout-2sec ");
}, 2000);
for (let i = 0; i < 10000; i++) {
  console.log("....");
}
clearTimeout(id);
console.log("end! 2");

//set Interval

console.log("BeforeInterval");
setInterval(() => {
  console.log("Hi");
}, 1000);
for (let i = 0; i < 10000; i++) {
  console.log("....");
}
console.log("After Interval");
