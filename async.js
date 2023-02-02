//set Timeout

// console.log("start");
// setTimeout(() => {
//   console.log("inside set timeout -0sec");
// }, 0);
// for (let i = 0; i < 10000; i++) {
//   console.log("....");
// }
// console.log("end!");

//clearing Timeout

// console.log("start 2");
// const id = setTimeout(() => {
//   console.log("inside set timeout-2sec ");
// }, 2000);
// for (let i = 0; i < 10000; i++) {
//   console.log("....");
// }
// clearTimeout(id);
// console.log("end! 2");

//set Interval

// console.log("BeforeInterval");
// setInterval(() => {
//   console.log("Hi");
// }, 1000);
// for (let i = 0; i < 10000; i++) {
//   console.log("....");
// }
// console.log("After Interval");

// callbacks in asynchronous programming

const firstHead = document.querySelector(".h1");
const Head2 = document.querySelector(".h2");
const Head3 = document.querySelector(".h3");
const Head4 = document.querySelector(".h4");
const Head5 = document.querySelector(".h5");
const Head6 = document.querySelector(".h6");

//call back hell or pyamid of doom

setTimeout(() => {
  firstHead.textContent = "learning asynchronous JS";
  firstHead.style.color = "red";
  console.log(firstHead);
  setTimeout(() => {
    Head2.style.color = "blue";
  }, 2000);
  setTimeout(() => {
    Head3.style.color = "green";
  }, 3000);
  setTimeout(() => {
    Head4.style.color = "yellow";
  }, 4000);
  setTimeout(() => {
    Head5.style.color = "red";
  }, 5000);
}, 1000);

// Promises
let val = 1;
let alertPromise2 = new Promise(function (resolve, reject) {
  if (val === 1) {
    resolve();
  } else {
    reject();
  }
});

alertPromise2.then(
  () => {
    alert("promise resolved");
  },
  () => {
    console.log("error");
  }
);

//Example of promises when data is sent in resolve
//use of catch to handle reject callback

//produce promise

let obj1 = {
  name: "Sachin",
  age: 40,
};
let obj2 = {
  name: "Kapil",
  age: 50,
};
let arrObj = [obj1, obj2];
let alertPromise = new Promise(function (resolve, reject) {
  if (val === 1) {
    resolve(arrObj);
  } else {
    reject(new Error("val not 1"));
  }
});

//consume promise

alertPromise
  .then((data) => {
    data.map((val) => console.log(val.name));
    // console.log(data[1].name);
  })
  .catch((error) => console.log(error));
