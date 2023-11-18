import { preview } from './new-photo.js';

const decreaseButton = document.querySelector('.scale__control--smaller');
const increaseButton = document.querySelector('.scale__control--bigger');
const valueSize = document.querySelector('.scale__control--value');
//const effectSlider = document.querySelector('.img-upload__effects');//подумать, как цеплять лишки. наверное порсто через филдсет-чендж
const minSize = 25;
const maxSize = 100;
let currentSize = 100;

function increaseHandler() {
  if (currentSize < maxSize) {
    currentSize += minSize;
  }
}

function decreaseHandler() {
  if (currentSize > minSize) {
    currentSize -= minSize;
  }
}

function removeSizeListeners(){
  increaseButton.removeEventListener('click', increaseClickHandler);
  decreaseButton.removeEventListener('click', decreaseClickHandler);
}

function increaseClickHandler() {
  increaseHandler();
  setSize();
}

function decreaseClickHandler() {
  decreaseHandler();
  setSize();
}

function setSizeListeners() {
  increaseButton.addEventListener('click', increaseClickHandler);
  decreaseButton.addEventListener('click', decreaseClickHandler);
}


function setSize() {
  preview.style.transform = `scale(${currentSize / 100})`;
  valueSize.value = `${currentSize}%`;
}

export {setSizeListeners, removeSizeListeners};
