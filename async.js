//set Timeout
console.log("start");
setTimeout(() => {
  console.log("inside set timeout -0sec");
}, 0);
for (let i = 0; i < 10000; i++) {
  console.log("....");
}
console.log("end!");

console.log("start 2");
setTimeout(() => {
  console.log("inside set timeout-2sec ");
}, 2000);
for (let i = 0; i < 10000; i++) {
  console.log("....");
}
console.log("end! 2");
