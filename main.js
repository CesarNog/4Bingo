const generateButton = document.querySelector('#generate');
const resultText = document.querySelector('#result');

function generateNumbers() {
  const numbers = [];

  for (let i = 0; i < 100; i++) {
    numbers.push(i);
  }

  return numbers;
}

const possibles = generateNumbers();

generateButton.onclick = () => {
  const randomIndex = Math.floor(Math.random() * possibles.length);
  resultText.innerText = possibles[randomIndex];

  possibles.splice(randomIndex, 1);
}
