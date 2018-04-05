import { uniq } from "lodash-es";
export default uniq([1, 3, 4, 4, 5, 6, 7]);

import imgSrc from './icon-square-small.jpg';
import "./index.css";

console.log(imgSrc); // can return a base64 or a image url (depending on the size)

const button = document.createElement('button');
button.innerHTML = 'button';

const fancyImage = document.createElement('img');
fancyImage.src = imgSrc;

document.body.appendChild(button);
document.body.appendChild(fancyImage);
