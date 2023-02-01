//constructor function

function CreateUser(nickname, dob) {
  this.nName = nickname;
  this.birthday = dob;
}
CreateUser.prototype.about = function () {
  return `Nickname is ${this.nName}`;
};
let user = new CreateUser("sam", 2001);
console.log(user);
console.log(user.about());
