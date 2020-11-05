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

  handleEmailInput = (event) => {
    const emailInput = event.target;
    const email = emailInput.value;
    // console.log (email);

    validator.validateValidEmail(email);
    validator.validateUniqueEmail(email);

    this.setErrorMessages();


  };


  // password
  handlePasswordInput = (event) => {

    const passwordInput = event.target;
    const password = passwordInput.value;
    const repeatPasswordInput = this.repeatPasswordInput;
    const repeatPassword = repeatPasswordInput.value;


    validator.validatePassword(password);
    validator.validateRepeatPassword(password, repeatPassword);
    this.setErrorMessages();
  };


  //repeeat password
  handleRepeatPasswordInput = (event) => {

    const passwordInput = event.target;
    const password = passwordInput.value;
    const repeatPasswordInput = this.repeatPasswordInput;
    const repeatPassword = repeatPasswordInput.value;


    validator.validatePassword(password);
    validator.validateRepeatPassword(password, repeatPasswordInput);

    this.setErrorMessages();

  };



  //send/submit date
  saveData = (event) => {

    event.preventDefault();

    const name = this.nameInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value

    //create a new user
    const newUser = new User(name, email, password);

    //save the user to the 'dummy' database
    db.saveNewUser(newUser);
    // console.log(newUser);

    // now we need to save the user in the local storage
    this.nameInput.value = "";
    this.emailInput.value = "";
    this.passwordInput.value = "";

    if (newUser) this.redirect();
  };



  addListeners = () => {
    this.passwordInput.addEventListener('input', this.handlePasswordInput);
    this.repeatPasswordInput.addEventListener('input', this.handleRepeatPasswordInput);
    this.buttonInput.addEventListener('click', this.saveData);
    this.emailInput.addEventListener('input', this.handleEmailInput);


  }

  redirect = () => {
    setTimeout(function () {
      location.assign("login.html")
    }, 2000)


  }

  //alerts user below signup form
  setErrorMessages = () => {

    // Clear previous messages

    this.errorsWrapper.innerHTML = "";

    const errorsObj = validator.getErrors();

    const errorStringsArr = Object.values(errorsObj);

    errorStringsArr.forEach((str) => {
      const p = document.createElement('p');
      p.textContent = str;

      this.errorsWrapper.appendChild(p);
    })

  }


}

const signup = new Signup();

window.addEventListener('load', signup.addListeners);