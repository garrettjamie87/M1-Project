
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
emailSyntax = ()=>{}

// password
handlePasswordInput = ()=>{}

//repeeat password

handleRepeatPasswordInput = () =>{}

//send/submit date
saveData = () => {}


addListeners = () =>{
      this.emailInput.addEventListener('input', this.emailSyntax);
      this.passwordInput.addEventListener('input', this.handlePasswordInput);
      this.passwordInput.addEventListener('input', this.handleRepeatPasswordInput);
      this.buttonInput.addEventListener('click', this.saveData);
 

}
}

const signup = new Signup()

      
    
    
