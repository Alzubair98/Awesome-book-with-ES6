import { Books } from './firstModule.js';

import { DateTime } from './luxon.js';

const navBar = document.querySelector('.nav-bar');
Books.addEventListeners();

const dt = DateTime.now();
const timeDiv = document.createElement('div');
timeDiv.classList.add('time');
const Time = dt.toLocaleString(DateTime.DATETIME_MED);
timeDiv.append(Time);

navBar.after(timeDiv);

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
