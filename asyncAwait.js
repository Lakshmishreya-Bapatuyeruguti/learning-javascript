const firstHead = document.querySelector(".h1");
const Head2 = document.querySelector(".h2");
const Head3 = document.querySelector(".h3");
const Head4 = document.querySelector(".h4");
const Head5 = document.querySelector(".h5");
const Head6 = document.querySelector(".h6");

//creating function that returns promise
function changeColor(element, color, time) {
  return new Promise(function (resolve, reject) {
    if (element) {
      resolve(
        setTimeout(() => {
          element.style.color = color;
        }, time)
      );
    } else {
      reject("Element not found");
    }
  });
}
//async function
async function headingsChange() {
  try {
    await changeColor(firstHead, "red", 1000);
    await changeColor(Head2, "green", 2000);
    await changeColor(Head3, "blue", 3000);
    await changeColor(Head9, "yellow", 4000);
    await changeColor(Head5, "orange", 5000);
  } catch (err) {
    console.log(err);
  }
}
headingsChange();
