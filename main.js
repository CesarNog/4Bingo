const generateButton = document.querySelector('#generate');
const resultText = document.querySelector('#result');

const retirados = [86, 90, 32, 29, 36, 92, 22, 40, 60, 98, 58, 45, 93, 31, 14, 
  41, 87, 34, 19, 79, 8, 1, 35, 10, 21, 6, 79, 52, 69, 95, 57, 
  60, 84, 71, 54, 70, 29, 97, 58, 79, 66, 58, 82, 44, 39, 21,
  17, 67, 54, 59, 39 , 13, 71, 62, 27, 5, 74, 78, 97,18, 10]

function generateNumbers() {
  const numbers = [];

  for (let i = 0; i < 100; i++) {
    if (!retirados.includes(i)) {
      numbers.push(i);
    }
  }

  return numbers;
}

const possibles = generateNumbers();

generateButton.onclick = () => {
  const randomIndex = Math.floor(Math.random() * possibles.length);
  resultText.innerText = possibles[randomIndex];

  possibles.splice(randomIndex, 1);
}


