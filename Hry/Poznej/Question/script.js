import { questions } from './data.js';

const content = document.querySelector('#content');
const questionBody = document.querySelector('.question__body');

const numberOfQuestion = document.querySelector('#numberOfQuestion');
const picture = document.querySelector('#cat');
const options = document.querySelector('.options');

const curiosity = document.querySelector('.curiosity');
console.log('ahoj');
console.log(questions[0]);

let i = 1;
numberOfQuestion.textContent = `${i}/10`;
picture.src = `images/${questions[0].image}`;

const optionButtons = questions[0].options.forEach((item) => {
  const buttonOption = document.createElement('button');
  buttonOption.classList.add('.option');
  buttonOption.textContent = item.name;
  options.appendChild(buttonOption);
});

questionBody.innerHTML = `<h2>Jaké plemeno je na obrázku?</h2>`;
