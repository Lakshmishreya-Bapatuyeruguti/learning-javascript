//For each Method
// forEach(callback(element, index)) - default syntax
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function mulByTen(number) {
  console.log(number * 10);
}
// mulByTen is callback function
// One way- creating function externally and then calling it in forEach
numbers.forEach(mulByTen);

//second way- creating anonymous function within forEach
numbers.forEach(function (number) {
  console.log(number * 10);
});
//using arrow function
numbers.forEach((number) => {
  console.log(number * 100);
});

//Map Method

const newArr = numbers.map((number) => {
  return number * 2;
});
console.log(numbers);
console.log(newArr);

//Filter method

const filtered = numbers.filter((number) => {
  return number % 2 == 0;
});
console.log(filtered);

// Reduce Method

const users = [
  { id: 1, productName: "bottle", quantity: 2 },
  { id: 2, productName: "car", quantity: 4 },
  { id: 3, productName: "doormat", quantity: 6 },
];
const total = users.reduce((acc, curVal) => {
  return acc + curVal.quantity;
}, 0);
//above 0 is optional value to set acc start as 0 coz by default its first
console.log(total);

//sort method

const nums = [60, 20, 100];
const names = ["shreya", "adaesh", "Sai", "Hari"];
//gives undesired result in case of numbers
console.log("WRONG : ", nums.sort());
console.log(names.sort());
//to sort numbers in ascending order use of optional callback
console.log(
  "RIGHT :",
  nums.sort((a, b) => {
    return a - b;
  })
);

//Find method

const digits = [17, 2, 6, 5];
const found = digits.find((val) => {
  return val % 2 == 0;
});
console.log(digits);
console.log(found);

//every method

const digitArr = [3, 6, 9, 16];
let sol = digitArr.every((num) => {
  return num % 3 == 0;
});
console.log(sol);

//some method

let sol2 = digitArr.some((num) => num % 3 == 0);
console.log(sol2);

//fill method params-{value,start,end}

//one purpose to use
const sample = new Array(5).fill(3);
console.log(sample);
//second purpose to use
digitArr.fill(1000, 0, 2);
console.log(digitArr);

//splice method  params-{start delete insert}

const items = ["item1", "item2", "item3", "item4", "item5"];
//to delete
const deleted = items.splice(2, 1);
console.log(deleted);
console.log(items);
//to insert
const inserted = items.splice(1, 0, "item inserted");
console.log(inserted);
console.log(items);
//to delete and insert both
items.splice(2, 1, "inserted second new Item");
console.log(items);
