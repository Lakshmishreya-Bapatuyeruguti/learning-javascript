//For each - takes a callback and performs callback function on each of element present in array
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

//Map Method -takes callback and returns new array and return keyword is must

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
