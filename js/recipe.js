'use strict';

const myButton = document.getElementById('button');
const saved1 = document.getElementById('saved1');
const number = 4;
const allRecipe = JSON.parse(localStorage.getItem("meal")) || [];


function rendermenu(json) {
let menuObj = json.meals[0];
let html = `<h1>${menuObj.strMeal}</h1>
<p><b>Catagory:</b> ${menuObj.strCategory}
<p><b>Instructions:</b> ${menuObj.strInstructions}</p>
   <p><b>Ingredent 1:</b> ${menuObj.strIngredient1}</p>
   <p><b>Ingredent 2:</b> ${menuObj.strIngredient2}</p>
   <p><b>Ingredent 3:</b> ${menuObj.strIngredient3}</p>
   <p><b>Ingredent 4:</b> ${menuObj.strIngredient4}</p>
   <p><b>Ingredent 5:</b> ${menuObj.strIngredient5}</p>
   <p><b>Ingredent 6:</b> ${menuObj.strIngredient6}</p>
   <p><b>Ingredent 7:</b> ${menuObj.strIngredient7}</p>
   <p><b>Ingredent 8:</b> ${menuObj.strIngredient8}</p>
   <p><b>Measure 1:</b> ${menuObj.strMeasure1}</p>
   <p><b>Measure 2:</b> ${menuObj.strMeasure2}
`
;
document.getElementById('ran').innerHTML = html;

//create the menu Object //
let someObject = {
  name: menuObj.strMeal,
  html: html,
  
}

allRecipe.push(someObject);
localStorage.setItem(`meal`, JSON.stringify(allRecipe));
}

function randomMeal(e) {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(response => response.json())
  .then(json => rendermenu(json))

}

myButton.addEventListener('click', randomMeal);