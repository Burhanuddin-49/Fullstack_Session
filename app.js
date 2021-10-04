var button = document.querySelector("button");
var input = document.querySelector("input");
var list = document.querySelector("ul");

const callfunc = (event) => {
  const inputvalue = input.value;
  const element = document.createElement("li");
  const textNode = document.createTextNode(inputvalue);
  element.appendChild(textNode)
  list.appendChild(element)
};

button.addEventListener("click", callfunc);
