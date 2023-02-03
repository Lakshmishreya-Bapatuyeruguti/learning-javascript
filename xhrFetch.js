// XHR

const URL = "https://jsonplaceholder.typicode.com/posts";
//xhr instance creation
const xhr = new XMLHttpRequest();
//readystate
console.log(xhr.readyState);
xhr.open("GET", URL);
console.log(xhr.readyState);
//onload- Works only when readystate is 4
xhr.onload = function () {
  if (xhr.status === 200 || xhr.status < 300) {
    const res = xhr.response;
    const parsedRes = JSON.parse(res);
    console.log(parsedRes);
  } else {
    console.log("Something is wrong");
  }
};
xhr.send();
console.log(xhr.readyState);

//Fetch -using then catch

const fetchUrl = "https://jsonplaceholder.typicode.com/comments";
fetch(fetchUrl)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("errorrr");
    }
  })
  .then((jsonRes) => {
    console.log(jsonRes);
  })
  .catch((err) => {
    console.log("inside catch");
    console.log(err);
  });

//Fetch to Post data
const fetchUrl2 = "https://jsonplaceholder.typicode.com/comments";
fetch(fetchUrl2, {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((res) => {
    if (res.ok) {
      console.log("posting");
      return res.json();
    } else {
      throw new Error("err");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log("errorrr: ", err));

//Fetch -using async-await
const fetchUrl3 = "https://jsonplaceholder.typicode.com/posts";
async function getData() {
  console.log("async-await");
  const res = await fetch(fetchUrl3);
  const parsedResponse = await res.json();
  console.log("after wait");

  console.log(parsedResponse);
}
getData();
