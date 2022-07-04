import {Books} from './firstModule.js';

Books.addEventListeners();


const listButton = document.querySelector('.nav-list');
const addButton = document.querySelector('.nav-add');
const contactButton = document.querySelector('.nav-contant');
const listSection = document.querySelector('.list-section');
const addSection = document.querySelector('.add-books-section');
const contactSection = document.querySelector('.contact');

listButton.addEventListener('click', () => {
  listSection.classList.remove('hide');
  addSection.classList.add('hide');
  contactSection.classList.add('hide');
});

addButton.addEventListener('click', () => {
  listSection.classList.add('hide');
  addSection.classList.remove('hide');
  contactSection.classList.add('hide');
});

contactButton.addEventListener('click', () => {
  listSection.classList.add('hide');
  addSection.classList.add('hide');
  contactSection.classList.remove('hide');
});


