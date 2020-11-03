'use strict'

const starWarsList = document.querySelectorAll('.starwars-list');


function getAllData(){

      fetch('https://swapi.dev/api/films/1')
      .then((response) => {
            console.log(response);

            return response.json();
      })
      .then((data) => {
      
            console.log('data', data)
      })
      .catch((err)=>{})
}
getAllData();

function display() {

      fetch('https://swapi.dev/api/films/0')
      .then((response) => {
            console.log(response);

            return response.json();
      })
      .then((data) => {
      
            console.log('data', data)
      })
      .catch((err)=>{})
}