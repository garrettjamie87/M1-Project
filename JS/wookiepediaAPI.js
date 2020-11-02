'use strict'

const starWarsList = document.querySelectorAll('.starwars-list');


function getAllData(){

      fetch('https://swapi.dev/api/films/')
      .then((response) => {
            console.log(response);

            return response.json();
      })
      .then((data) => {
      
            console.log('data', data)
      })
      .catch((err)=>{})
}
getAllData()