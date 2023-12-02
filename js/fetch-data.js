const dataPromise = fetch('https://30.javascript.pages.academy/kekstagram/data').then((response) => response.json());

dataPromise
  .then((data) => {
    renderPictures(data);
  })
  .catch((error) => {
    console.error('Ошибка при загрузке данных:', error);
  });
