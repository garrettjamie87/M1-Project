"use strict"

class Validator {
      constructor() {
            this.invalidEmailError = 'A valid email you must enter';
            this.emailExistsError = 'Taken, this email address is';
            this.passwordError = '6 characters long, the password must be!';
            this.repeatPasswordError = 'Matching, the passwords should be!';


            this.errors = {
                  invalidEmailError: this.invalidEmailError,
                  passwordError: this.passwordError,
                  repeatPasswordError: this.repeatPasswordError,
            };
      }

      validateValidEmail = (email) => {

            //validate if the syntax is correct
            if (this.emailSyntaxIsValid(email)) {
                  delete this.errors.invalidEmailError;
            } else {
                  this.errors.invalidEmailError = this.invalidEmailError;
            }
      };


      emailSyntaxIsValid = (email) => {
            const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            const emailIsValid = emailRegEx.test(email);
            return emailIsValid;
      };



      validateUniqueEmail = (newEmail) => {
            const users = db.getAllUsers();

            let emailUnique = true;

            users.forEach((userObj) => {
                  if (userObj.email === newEmail) {
                        emailUnique = false //set emailUnique to false if the email has been takesn 
                  }
            });

            if (emailUnique) {
                  delete this.errors.emailExistsError
            } else {
                  this.errors.emailExistsError = this.emailExistsError;
            }

      };



      validatePassword = (password) => {
            if (password.length > 5) {
                  delete this.errors.passwordError;
            } else {
                  this.errors.passwordError = this.passwordError;
            }
      };



      validateRepeatPassword = (password, repeatPassword) => {
            if (password === repeatPassword) {
                  delete this.errors.repeatPasswordError;
            } else {
                  this.errors.repeatPasswordError = this.repeatPasswordError;
            }
      };

      getErrors = () => {
            return this.errors;
      };
      resetValidator = () => {
            this.errors = {
                  invalidEmailError: this.invalidEmailError,
                  passwordError: this.passwordError,
                  repeatPasswordError: this.repeatPasswordError
            }
      }
}



const validator = new Validator();