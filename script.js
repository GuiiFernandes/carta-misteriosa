const input = document.getElementById('carta-texto');
const button = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');
const countWord = document.getElementById('carta-contador');
const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const inclination = ['skewleft', 'skewright'];
const arrayClass = [style, size, rotation, inclination];

const random = (max) => Math.round(Math.random() * (max - 0) + 0);
const randomClass = () => {
  let newClass = '';
  for (let index = 0; index < 4; index += 1) {
    newClass += arrayClass[index][random(arrayClass[index].length - 1)];
    if (index !== 3) newClass += ' ';
  }
  console.log(newClass);
  return newClass;
};

const createLetter = (array) => {
  const arrayWords = array;
  letter.innerHTML = '';
  for (let index = 0; index < arrayWords.length; index += 1) {
    const span = document.createElement('span');
    span.innerHTML = arrayWords[index];
    span.classList = randomClass();
    letter.appendChild(span);
    letter.innerHTML += ' ';
  }
};

const validLetter = () => {
  button.addEventListener('click', () => {
    const arrayWords = input.value.split(' ');
    if (!arrayWords.includes('')) {
      createLetter(arrayWords);
      countWord.innerHTML = arrayWords.length;
    } else {
      letter.innerHTML = 'Por favor, digite o conteúdo da carta.';
    }
  });
};

const clickWord = () => {
  document.addEventListener('click', (event) => {
    const element = event.target;
    if (element.tagName === 'SPAN') {
      element.classList = randomClass();
    }
  });
};

window.onload = () => {
  validLetter();
  clickWord();
};
