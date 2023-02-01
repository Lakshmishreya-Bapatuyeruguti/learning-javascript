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
