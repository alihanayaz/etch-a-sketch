const button = document.querySelector('.btn');
const container = document.querySelector('.container');

function ask() {
  var number = prompt('Number from 1 to 100:');
  return isNaN(number) || +number > 100 || +number < 1 ? ask() : number;
}

function createGrid(result) {
  for (let i = 1; i <= result; i++) {
    const row = document.createElement('div');
    container.appendChild(row);
    for (let i = 1; i <= result; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      row.appendChild(gridItem);
      gridItem.addEventListener('mouseover', function () {
        gridItem.classList.add('hover-effect');
      });
    }
  }
}

function buttonClickHandler() {
  const result = ask();
  container.innerHTML = '';
  createGrid(result);
}

button.addEventListener('click', buttonClickHandler);

createGrid(16);
