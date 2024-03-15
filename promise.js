//? we can't be dependent on time of setTimeout for async functionality
//? That's why we need to use callback functions
//? Better Solution of callbaack---Promise--it has 4 states---pending,resolved/fullfilled,rejected and setteled(either resolved or rejected)---we can create promsises by using the constructor with new keyword or we can return a new promise form a function

//? Producing code of promise---

function welcomeToWebsite() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Welcome To Our Website for the very first time");
      resolve();
    }, 3000);
  });
}

function register(mssg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Please Register!!!", mssg);
      resolve("Okk got it");
    }, 2000);
  });
}

function yourid() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Thanks for registering, your id is given here...");
      resolve();
    }, 2000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Use the id for login");
      resolve();
    }, 1000);
  });
}

function welcomeMssg() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Logged in successfully");
      resolve();
    }, 5000);
  });
}

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User data Stored");
      resolve();
    }, 4000);
  });
}

function setData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User data used to set something");
      resolve();
    }, 1000);
  });
}

function fillFeedbackForm() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject("Error while fiiling the form");
      console.log("Asking for review of our service");
    }, 1000);
  });
}

function thyankYouForFilling() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Thanking you for your time for filling up the form");
      resolve();
    }, 5000);
  });
}

function willTakeAction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Received your concern, will take action");
      resolve();
    }, 3000);
  });
}

function areYouSatisfied() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Are you Satisfied with the steps taken");
      resolve();
    }, 1000);
  });
}

function whyAreYouNotSatisfied() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("why Are You Not Satisfied");
      resolve();
    }, 2000);
  });
}

function whatImprovements() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("What more improvements do you want??");
      resolve();
    }, 3000);
  });
}

function happyNow() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Are you happy now??");
      resolve();
    }, 1000);
  });
}

function finalThankYou() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Thank you and we are as delighted as you");
      resolve();
    }, 1000);
  });
}

//? Consuming Code---
//? then() is a method which is used on a function which returns a promise---it takes two callbacks (one for resolved and other for reject case which is often used with catch block) and its parameter will take the value which we pass from resolve()

// welcomeToWebsite().then(() => {});
//? not passing annonymous function we are passing our 2nd function which we want to exectute and don't call it
// welcomeToWebsite().then(register());//* don't call register here---register will be automatically called by then() method

welcomeToWebsite()
  .then(register)
  .then(yourid)
  .then(login)
  .then(welcomeMssg)
  .then(getData)
  .then(setData)
  .then(fillFeedbackForm)
  .then(thyankYouForFilling)
  .then(willTakeAction)
  .then(areYouSatisfied)
  .then(whyAreYouNotSatisfied)
  .then(whatImprovements)
  .then(happyNow)
  .then(finalThankYou)
  .catch((err) => {
    console.log(err);
  });

//? catch block takes a callback function--- err will be coming from whatever we pass from reject function ()--Handling error using catch block--return reject()
