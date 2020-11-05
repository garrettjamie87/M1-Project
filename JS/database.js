"use strict";

//methods to get users from localStorage and then to save user

class Database {
      getAllUsers = () => {
            const usersStr = localStorage.getItem("users");
            const usersArr = JSON.parse(usersStr);

            if (usersStr === null) {
                  return [];
            } else {
                  return usersArr;
            }
      }
      saveNewUser = (newUser) => {
            const usersArr = this.getAllUsers();

            const updatedUsersArr = [...usersArr, newUser];

            //take it, update it, store it back

            const updatedUsersStr = JSON.stringify(updatedUsersArr);
            localStorage.setItem("users", updatedUsersStr);
      }
}

const db = new Database();