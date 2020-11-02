
"use strict";

class Signup {
  constructor() {
    // store all of the input elements
    this.nameInput = document.querySelector(".name");
    this.emailInput = document.querySelector(".email");
    this.passwordInput = document.querySelector(".password");
    this.repeatPasswordInput = document.querySelector(".repeat-password");
    this.buttonInput = document.querySelector(".signup-button");
    this.errorsWrapper = document.querySelector(".message-container");
  }

// check if the email sytax is correct
handleEmailInput = (event)=>{
 const emailInput = event.target; 
 const email = emailInput.value;
  // console.log (email);
};

// password
handlePasswordInput = (event)=>{
const passwordInput = event.target;
const password = passwordInput.value;
// console.log(password); 
}
//repeeat password

handleRepeatPasswordInput = (event) =>{
  const repeatPasswordInput = event.target;
  const repeatPassword = repeatPasswordInput.value;
};

//send/submit date
saveData = (event) => {

  event.preventDefault();

  const name = this.nameInput.value;
  const email = this.emailInput.value;
  const password = this.passwordInput.value

  //create a new user
const newUser = new User(name, email, password);
console.log(newUser);

  // now we need to save the user in the local storage
  this.nameInput.value = "";
  this.emailInput.value = "";
  this.passwordInput.value = "";

};



addListeners = () =>{
      this.emailInput.addEventListener('input', this.handleEmailInput);
      this.passwordInput.addEventListener('input', this.handlePasswordInput);
      this.repeatPasswordInput.addEventListener('input', this.handleRepeatPasswordInput);
      this.buttonInput.addEventListener('click', this.saveData);
 

}
}

const signup = new Signup();
window.addEventListener('load', signup.addListeners);

      
    
    
