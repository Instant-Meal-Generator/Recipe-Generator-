'use strict';

const contain = document.getElementById('contain');
const allRecipes = JSON.parse(localStorage.getItem("meal")) || [];
const form = document.getElementById('form');

function fInput(event){
    event.preventDefault();
    console.log('something');
    alert('Message has been sent, we will contact you shortly.');
    
}

form.addEventListener("submit", fInput);