import { renderPictures, dataPromise } from './render.js';
//import { mock, AMOUNT_PHOTO } from './data.js';
import './new-photo.js';

dataPromise
  .then((data) => {
    renderPictures(data);
  })
  .catch((error) => {
    console.error('Ошибка при загрузке данных:', error);
  });
