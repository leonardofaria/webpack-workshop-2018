import {a} from "./bar";
import imgSrc from "./icon-square-small.jpg";
import "./index.css";
// import foo from "./foo";
const foo = () => import("./foo").then(m => m.default); // Use the default export when the promise is resolved

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
    console.log(module); // [1, 3, 4, 5, 6, 7]
    // debugger;
  })
});
