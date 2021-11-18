let greeting = '';

const myButton = document.getElementById('button');
const contain = document.getElementById('contain');
const allRecipes = JSON.parse(localStorage.getItem("meal")) || [];
const form = document.getElementById('form');


function rendermenu(json) {
  var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
var context = { title: "Generated a Recipe for you!", menuObj: json.meals[0], };
var html = template(context);
document.getElementById('ran').innerHTML = html;
window.localStorage.setItem('meal', JSON.stringify(json));
}

function randomMeal(e) {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(response => response.json())
  .then(json => rendermenu(json))
  localStorage.setItem(`meal: ${menuObj.strMeal}`, JSON.stringify(json));
}

function fInput(event){
    event.preventDefault();
    alert('Message has been sent, we will contact you shortly.')
    
}


myButton.addEventListener('click', randomMeal);

form.addEventListener("submit", fInput);
// function ConstuctorFuc(numberSaved) {
// this.numberSaved = numberSaved;
// this.name = JSON.parse(localStorage.getItem(this.name)) || {
//     meal: [],
//     };  
// this.meals = json;
// for (let z = 0, z < numberSaved; z++) {
// document.createElement('div');

// }
// }

// function pushThis(e) {
//   ConstuctorFuc();
// }

// Product.prototype.storeTolocalStorage = function () {
  
//   this.name.push(this.name);
//   this.meals.push(this.meals);
//   console.log(this.meals);
// localStorage.setItem(this.name, JSON.stringify(this.meals));

// contain.addEventListener('load', pushThis);