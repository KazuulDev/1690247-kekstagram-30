import { body } from './utils';
import { onFormSubmit, form, hashtagInput, descriptionInput} from './form-validation';
import { setSizeListeners, removeSizeListeners } from './new-photo-handling';
import { resetEffects, updateSlider } from './effects';

const uploadButton = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const preview = document.querySelector('.img-upload__preview img');
const closeButton = document.querySelector('.img-upload__cancel');
//const submitButton = document.querySelector('.upload-submit');

function closeUploadForm () {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  removeSizeListeners();
  document.removeEventListener('keydown', handleEscapeKey);
  closeButton.removeEventListener('click', closeUploadForm);
  preview.src = '';
  updateSlider();
  resetEffects();
  form.reset();
}

function handleEscapeKey(event) {
  const isFocusOnInput = document.activeElement === hashtagInput || document.activeElement === descriptionInput;
  if (event.key === 'Escape' && !isFocusOnInput) {
    closeUploadForm();
  }
}

function showUploadForm () {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', handleEscapeKey);
  setSizeListeners();
  closeButton.addEventListener('click', closeUploadForm);
  form.addEventListener('submit', () => onFormSubmit());

}

function renderNewPhoto() {
  const file = uploadButton.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    preview.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

uploadButton.addEventListener('change', () => {
  showUploadForm();
  renderNewPhoto();
});

export {preview};
