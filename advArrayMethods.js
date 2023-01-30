//For each
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
  { id: 1, productName: "car", quantity: 4 },
  { id: 1, productName: "doormat", quantity: 6 },
];
const total = users.reduce((acc, curVal) => {
  return acc + curVal.quantity;
}, 0);
//above 0 is optional value to set acc start as 0 coz by default its first element
console.log(total);
