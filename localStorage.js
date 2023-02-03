//setting item in local storage
localStorage.setItem("name", "Lakshmi");
localStorage.setItem("country", "India");

//getting item from local storage
const username = localStorage.getItem("name");
console.log(username);

//removing item from local storage
localStorage.removeItem("name");
