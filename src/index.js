import {a} from "./bar";
import imgSrc from "./icon-square-small.jpg";
import "./index.css";
// import foo from "./foo";
const foo = () => import("./foo");

console.log(imgSrc)

const button = document.createElement("button");
button.innerText = "BUTTON";
const fancyImage = document.createElement("img");
fancyImage.src = imgSrc;

document.body.appendChild(button);
document.body.appendChild(fancyImage);

button.addEventListener("click", e => {
  foo().then(module => {
    // You can use the module
    console.log(module.default);
    // debugger;
  })
});
