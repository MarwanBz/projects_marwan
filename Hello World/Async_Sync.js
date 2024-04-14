// ! Sync متزامنة example

/*function hi() {
  console.log("hello");
  console.log("sync");
}

console.log("started");

hi();

console.log("end");
*/
// ! Async متزامنة غير example
//Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed. It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.
/*console.log("started");

setTimeout(() => {
  console.log("hello Async");
}, 6000);


console.log("end");*/

// !callback hell
/*console.log("started");

function loginUser(email, password) {
  setTimeout(() => {
    console.log("hello we have the data now");
    return { userEmail: email };
  }, 6000);
}

const user = loginUser("Marwan744@gmailcjo", 7717919);
// ?we cannot run sync code here cuz we do'not have the data and the solution for this is callbacks function 
console.log(user); === output undefined
console.log("end");*/

// !refactored callback example
/*console.log(" sync started");

function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("hello we have the data now");
    callback({ userEmail: email });
  }, 4000);
}

function logoutUser(password, callback) {
  setTimeout(() => {
    console.log("logged out succeed");
    callback({ userPassword: password });
  }, 3000);
}

function displayUser(display, callback) {
  setTimeout(() => {
    console.log(`user name is ${display}`);
    callback({ name: display });
  }, 2000);
}

const user = loginUser("Marwan744@gmail.cjo", 7717919, (user) => {
  console.log(user.userEmail);
  logoutUser(1111, (password) => {
    console.log(password.userPassword);
  });
  displayUser("marwan", (display) => {
    console.log(display.name);
  });
});

console.log("sync end");
*/
// ?we can run code here cuz we used callbacks function

// !stopped here on callbacks functions and will get stared on promises

//? a promise is an object that gives us back a result of Async operation or a failure of Async operation
// ? if its success get a success msg or if its fail get failure msg. | resolve | reject
/*
const promiseResolve = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("hello we have the data now using promises success");
    resolve({ email: "marwan@gmail.com" });
  }, 2000);
});
const promiseReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("got user data");
    reject(new Error("cannot get user data failure"));
  }, 1000);
});

promiseResolve
  .then((email) => {
    console.log("done with promises");
  })
  .catch((err) => console.log(err.message));

promiseReject
  .then((email) => {
    console.log("done with promises");
  })
  .catch((err) => console.log(err.message));
*/
// !refactored callback example with promises
/*
function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hello we have the data now");
      resolve({ userEmail: email, userPassword: password });
    }, 1000);
  });
}

function logoutUser(password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("logged out succeed");
      resolve({ userPassword: password });
    }, 2000);
  });
}

function displayUser(display) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`user name is ${display}`);
      resolve({ name: display });
    }, 2500);
  });
}

const user = loginUser("Marwan744@gmail.cjo",  (user) => {
  console.log(user.userEmail);
  logoutUser((password) => {
    console.log(password.userPassword + "" + "password");
  });

  displayUser("marwan", (display) => {
    console.log(display.name);
  });
});

loginUser("email","password").then(user =>console.log(user.userEmail)).then(password => console.log(logoutUser(password)))
*/

// ! Fetch api



