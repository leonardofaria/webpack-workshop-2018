import { uniq } from "lodash-es";
import leftPad from 'left-pad';
import rightPad from 'right-pad';

export default uniq([1, 3, 4, 4, 5, 6, 7]);

import imgSrc from './icon-square-small.jpg';
import "./index.css";

console.log(imgSrc); // can return a base64 or a image url (depending on the size)

const button = document.createElement('button');
button.innerHTML = 'button';

const fancyImage = document.createElement('img');
fancyImage.src = imgSrc;

const pre = document.createElement('pre');
const leftPadText = leftPad('test', 40);
const rightPadText = rightPad('test', 40);
pre.innerHTML = leftPadText + rightPadText;
console.log(leftPadText, rightPadText)

document.body.appendChild(button);
document.body.appendChild(fancyImage);
document.body.appendChild(pre);

window.onload = function() {
  $("button").hide(function(){
    console.log('button hidden');
  });
}
