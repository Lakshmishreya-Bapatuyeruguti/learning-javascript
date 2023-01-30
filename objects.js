// Objects -key value pairs - reference type

let person = {
  fullName: "Lakshmi shreya",
  age: 21,
  company: "simform",
  college: "Parul University",
  learning: ["Git", "HTML", "CSS", "Javascript", "Blockchain"],
};
console.log(person);
console.log(typeof person);
//accessng property from obj
console.log(person.college);
console.log(person.learning);
//adding new key value pair
person.designation = "Trainee";
console.log(person);
console.log(person["fullName"]);
person["yoj"] = 2023;
console.log(person);
const dept = "department";
person[dept] = "blockchain";
console.log(person);

// iterating in object

for (let key in person) {
  console.log(person[key]);
  // console.log(person.key) will give undefined as key with'key' is not there.
}
// returns array of keys present in object
console.log(Object.keys(person));
// returns array of  values of keys present in object
console.log(Object.values(person));

for (let index of Object.keys(person)) {
  // console.log(index);
  console.log(index, " :", person[index]);
}

// computed properties

let k1 = "key1";
let k2 = "key2";
let v1 = "val1";
let v2 = "val2";
const objMain = {
  [k1]: v1,
  [k2]: v2,
};
console.log(objMain);

// spread operator in object

let obj3 = { ...objMain, key4: "val4" };
console.log(obj3);

// destructuring of objects

let games = {
  game1: "kho-kho",
  game2: "cricket",
  game3: "volley ball",
};
const { game1, game2 } = games;
console.log(game1, game2);

//array of objects

let arrObj = [
  { firstName: "John", age: 20, place: "US" },
  { firstName: "Tom", age: 25, place: "UK" },
  { firstName: "Virat", age: 32, place: "IND" },
];
console.log(arrObj);
console.log(arrObj[1].firstName);
// looping
for (let user of arrObj) {
  console.log(user.firstName);
}

// nested destructuring

const [ob1, ob2, ob3] = arrObj;
console.log(ob1);

const [{ firstName }, , { place }] = arrObj;
console.log(firstName, place);

const [{ firstName: u1Name, place: u1Place }, , { age: u3Age }] = arrObj;
console.log(u1Name);
console.log(u1Place);
console.log(u3Age);
