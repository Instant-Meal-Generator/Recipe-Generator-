'use strict';

const allRecipe = JSON.parse(localStorage.getItem("meal")) || [];

console.log(allRecipe);

function DomEngine(number) {
  number = this.number;
  let something = JSON.parse(localStorage.getItem("meal"));
  console.log(something);
  console.log(something[0].html);
}


DomEngine.prototype.addDiv =
function () {
 for (let i = 0; i < allRecipe.length; i++) {

  let div = document.createElement('div');
  console.log(div);
  saved1.appendChild(div);
  div.innerHTML = allRecipe[i].html;
 }
}


let newDiv = new DomEngine(1);

newDiv.addDiv();