// class

class StudentList {
  constructor(sName, sAge, SDob) {
    this.entryName = sName;
    this.entryAge = sAge;
    this.entryDob = SDob;
  }
  desc() {
    return `your student is ${this.entryName}`;
  }
}
let stud = new StudentList("shreya");
console.log(stud);
console.log(stud.desc());

//Inheritance

class PrimaryList extends StudentList {
  constructor(sName, sAge, SDob, guardian) {
    //super keyword
    super(sName, sAge, SDob);
    this.parent = guardian;
  }
  //getters
  get care() {
    return `parent is: ${this.parent}`;
  }
  //setters
  set combo(kidNewName) {
    this.entryName = kidNewName;
  }
  //method overriding
  desc() {
    return `kid is ${this.entryName}`;
  }
}
let kid = new PrimaryList("kris", 5, 2019, "vasu");
console.log(kid);
console.log(kid.desc());
console.log(kid.care);
kid.combo = "shiv";
console.log(kid);
