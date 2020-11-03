"use strict";


class Login {
      constructor() {
            this.emailInput = document.querySelector("#email");
            this.passwordInput = document.querySelector("#password");
            this.messageContainer = document.querySelector("#message-container");
            this.loginButton = document.querySelector(".login-button");
      }


      //when user clicks
      handleSubmit = (event) => {

            //prevent reload

            event.preventDefault();

            //get the values from what the user types in
            const email = this.emailInput.value;
            const password = this.passwordInput.value;

            // Get the users from db (localStorage)
            const users = db.getAllUsers();


            const user = users.find(function (userObj) {
                  if (userObj.email === email && userObj.password === password) {
                        return true;
                  }
            })

            // empty the container so the messages aren't stacked
            this.messageContainer.innerHTML = "";
            const p = document.createElement('p');

            // set the message
            if (!user) {
                  p.textContent = "Incorrect, your password and/or email are!";
            } else {
                  p.textContent = `Wyaaaaaa. Ruh ruh.${user.name}!`;
                  p.classList.add('correct-message');
                  this.redirect();
            }

            this.messageContainer.appendChild(p);

      }


      redirect = () => {
            setTimeout(function () {
                  location.assign("index.html")
            }, 2000)


      }

}

const login = new Login();

window.addEventListener('load', function () {
login.loginButton.addEventListener('click', login.handleSubmit );

})