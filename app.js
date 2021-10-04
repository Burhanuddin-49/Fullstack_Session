var body = document.querySelector("body");
var button = document.querySelector("button");

const callfunc = () => {
  body.classList.toggle('dark')
};

button.addEventListener("click", callfunc);
