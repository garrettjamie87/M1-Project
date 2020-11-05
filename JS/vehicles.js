'use strict'



getFirstPosition()
async function getFirstPosition() {
  const epNum = document.querySelector(".first-position");
  try {
    // storing the response fetching the data
    const response = await fetch(
      'https://swapi.dev/api/vehicles/'
    );
    console.log("response", response);
    // storing data in form of a json file
    const dataAPI = await response.json();
    const wookie = dataAPI.results[0]
    console.log(wookie);
    const createSpan = document.createElement('div')
    createSpan.innerHTML = `<p>${wookie.name}
       <p>Passengers: ${wookie.passengers}</p>
       <p>Cost: ${wookie.cost_in_credits}</p>
       
       `
    epNum.appendChild(createSpan)
    console.log("data", dataAPI);
  } catch (err) {
    console.log(err);
  }

}

//************************************* */


getSecondPosition();
async function getSecondPosition() {
  const epNum = document.querySelector(".second-position");
  try {
    // storing the response fetching the data
    const response = await fetch(
      'https://swapi.dev/api/vehicles/'
    );
    console.log("response", response);
    // storing data in form of a json file
    const dataAPI = await response.json();
    const wookie = dataAPI.results[1]
    console.log(wookie);
    const createSpan = document.createElement('div')
    createSpan.innerHTML = `<p>${wookie.name}
      <p>Passengers: ${wookie.passengers}</p>
      <p>Cost: ${wookie.cost_in_credits}</p>
      
       
       `
    epNum.appendChild(createSpan)
    console.log("data", dataAPI);
  } catch (err) {
    console.log(err);
  }
}
//************************************* */

getThirdPosition();
async function getThirdPosition() {
  const epNum = document.querySelector(".third-position");
  try {
    // storing the response fetching the data
    const response = await fetch(
      'https://swapi.dev/api/vehicles/'
    );
    console.log("response", response);
    // storing data in form of a json file
    const dataAPI = await response.json();
    const wookie = dataAPI.results[2]
    console.log(wookie);
    const createSpan = document.createElement('div')
    createSpan.innerHTML = `<p>${wookie.name}
       <p>Passengers: ${wookie.passengers}</p>
       <p>Cost: ${wookie.cost_in_credits}</p>
       
      
      `
    epNum.appendChild(createSpan)
    console.log("data", dataAPI);
  } catch (err) {
    console.log(err);
  }
}

//************************************* */

getFourthPosition();
async function getFourthPosition() {
  const epNum = document.querySelector(".fourth-position");
  try {
    // storing the response fetching the data
    const response = await fetch(
      'https://swapi.dev/api/vehicles/'
    );
    console.log("response", response);
    // storing data in form of a json file
    const dataAPI = await response.json();
    const wookie = dataAPI.results[3]
    console.log(wookie);
    const createSpan = document.createElement('div')
    createSpan.innerHTML = `<p>${wookie.name}
     <p>Passengers: ${wookie.passengers}</p>
     <p>Cost: ${wookie.cost_in_credits}</p>
     
     
     `
    epNum.appendChild(createSpan)
    console.log("data", dataAPI);
  } catch (err) {
    console.log(err);
  }
}

//************************************* */

getFifthPosition();
async function getFifthPosition() {
  const epNum = document.querySelector(".fifth-position");
  try {
    // storing the response fetching the data
    const response = await fetch(
      'https://swapi.dev/api/vehicles/'
    );
    console.log("response", response);
    // storing data in form of a json file
    const dataAPI = await response.json();
    const wookie = dataAPI.results[4]
    console.log(wookie);
    const createSpan = document.createElement('div')
    createSpan.innerHTML = `<p>${wookie.name}
   <p>Passengers: ${wookie.passengers}</p>
   <p>Cost: ${wookie.cost_in_credits}</p>
   
   
   `
    epNum.appendChild(createSpan)
    console.log("data", dataAPI);
  } catch (err) {
    console.log(err);
  }
}

//************************************* */

getsixthPosition();
async function getsixthPosition() {
  const epNum = document.querySelector(".sixth-position");
  try {
    // storing the response fetching the data
    const response = await fetch(
      'https://swapi.dev/api/vehicles/'
    );
    console.log("response", response);
    // storing data in form of a json file
    const dataAPI = await response.json();
    const wookie = dataAPI.results[5]
    console.log(wookie);
    const createSpan = document.createElement('div')
    createSpan.innerHTML = `<p>${wookie.name}
       <p>Passengers: ${wookie.passengers}</p>
       <p>Cost: ${wookie.cost_in_credits}</p>
       
   
   `
    epNum.appendChild(createSpan)
    console.log("data", dataAPI);
  } catch (err) {
    console.log(err);
  }
}

//************************************* */

getseventhPosition();
async function getseventhPosition() {
  const epNum = document.querySelector(".seventh-position");
  try {
    // storing the response fetching the data
    const response = await fetch(
      'https://swapi.dev/api/vehicles/'
    );
    console.log("response", response);
    // storing data in form of a json file
    const dataAPI = await response.json();
    const wookie = dataAPI.results[6]
    console.log(wookie);
    const createSpan = document.createElement('div')
    createSpan.innerHTML = `<p>${wookie.name}
       <p>Passengers: ${wookie.passengers}</p>
       <p>Cost: ${wookie.cost_in_credits}</p>
       
  
  `
    epNum.appendChild(createSpan)
    console.log("data", dataAPI);
  } catch (err) {
    console.log(err);
  }
}


//************************************* */

geteighthPosition();
async function geteighthPosition() {
  const epNum = document.querySelector(".eighth-position");
  try {
    // storing the response fetching the data
    const response = await fetch(
      'https://swapi.dev/api/vehicles/'
    );
    console.log("response", response);
    // storing data in form of a json file
    const dataAPI = await response.json();
    const wookie = dataAPI.results[7]
    console.log(wookie);
    const createSpan = document.createElement('div')
    createSpan.innerHTML = `<p>${wookie.name}
       <p>Passengers: ${wookie.passengers}</p>
       <p>Cost: ${wookie.cost_in_credits}</p>
       
  `
    epNum.appendChild(createSpan)
    console.log("data", dataAPI);
  } catch (err) {
    console.log(err);
  }
}

//************************************* */

getninthPosition();
async function getninthPosition() {
  const epNum = document.querySelector(".ninth-position");
  try {
    // storing the response fetching the data
    const response = await fetch(
      'https://swapi.dev/api/vehicles/'
    );
    console.log("response", response);
    // storing data in form of a json file
    const dataAPI = await response.json();
    const wookie = dataAPI.results[8]
    console.log(wookie);
    const createSpan = document.createElement('div')
    createSpan.innerHTML = `<p>${wookie.name}
  <p>Passengers: ${wookie.passengers}</p>
  <p>Cost: ${wookie.cost_in_credits}</p>
  
  
  `
    epNum.appendChild(createSpan)
    console.log("data", dataAPI);
  } catch (err) {
    console.log(err);
  }
}

//************************************* */

gettenthPosition();
async function gettenthPosition() {
  const epNum = document.querySelector(".tenth-position");
  try {
    // storing the response fetching the data
    const response = await fetch(
      'https://swapi.dev/api/vehicles/'
    );
    console.log("response", response);
    // storing data in form of a json file
    const dataAPI = await response.json();
    const wookie = dataAPI.results[9]
    console.log(wookie);
    const createSpan = document.createElement('div')
    createSpan.innerHTML = `<p>${wookie.name}
  <p>Passengers: ${wookie.passengers}</p>
  <p>Cost: ${wookie.cost_in_credits}</p>
  
  
  `
    epNum.appendChild(createSpan)
    console.log("data", dataAPI);
  } catch (err) {
    console.log(err);
  }
}