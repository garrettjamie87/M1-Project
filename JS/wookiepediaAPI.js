'use strict'

const starWarsList = document.querySelectorAll('.starwars-list');


      fetch(` "https://swapi.dev/api/people/1/"
      `)
      .then((response) => {
            console.log(response);

            return response.json();
      })
      .then((data) =>{
            console.log('data')
      });
