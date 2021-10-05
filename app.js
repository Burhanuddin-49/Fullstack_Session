var button = document.querySelector("button");
var input = document.querySelector("input");
var list = document.querySelector("ul");

var chores = [];

var deleteitem = (value) => {
  const index = chores.indexOf(value);
  chores.splice(index, 1);
  console.log(chores);
};

const callbackfunc = (event) => {
  const inputvalue = input.value;
  if (chores.includes(inputvalue)) {
    console.log("already exits");
  } else {
    chores.push(inputvalue);
    const element = document.createElement("li");
    const textNode = document.createTextNode(inputvalue);
    element.appendChild(textNode);
    list.appendChild(element);
    element.addEventListener("click", (e) => {
      e.target.remove();
    });
  }
};

button.addEventListener("click", callbackfunc);