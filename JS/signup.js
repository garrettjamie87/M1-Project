
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
