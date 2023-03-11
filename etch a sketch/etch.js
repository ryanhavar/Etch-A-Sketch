
const grid = document.querySelector('.container')

const button = document.querySelector('.button')
const anotherbutton = document.querySelector('.anotherbutton')

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}



let gridWidth = 16
for (let j = 0; j < gridWidth * gridWidth; j++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.addEventListener('mouseover', () => {
    cell.style.background = 'black';
  });
  grid.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
  grid.appendChild(cell);
}





button.addEventListener('click', () => {
  
  
  gridWidth = prompt("Enter the amount of grid you want");
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  for (let j = 0; j < gridWidth * gridWidth; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', () => {
      cell.style.background = 'black';
    });
    grid.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
    grid.appendChild(cell);
  }
});



anotherbutton.addEventListener('click', () => {
  
  
 
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  for (let j = 0; j < gridWidth * gridWidth; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', () => {
      cell.style.background = getRandomColor();
    });
    grid.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
    grid.appendChild(cell);
  }
});
