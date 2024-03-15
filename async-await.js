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

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Please Register!!!");
      resolve("Success from register resolve,");
    }, 2000);
  });
}

function yourid() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   return reject("You are an idiot");
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
      console.log("Asking for review of our service");
      resolve();
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
      resolve("Everything looks Good");
    }, 1000);
  });
}

//? Consuming Code---
//? use async and await---visually looks like synchronous code---await can only be used inside an async function---async function returns a promise itself by default

async function authenticate() {
  try {
    await welcomeToWebsite();
    const succ = await register(); //* catching the value passed in resolve()
    await yourid();
    await login();
    await welcomeMssg();
    await getData();
    await setData();
    await fillFeedbackForm();
    await thyankYouForFilling();
    await willTakeAction();
    await areYouSatisfied();
    await whyAreYouNotSatisfied();
    await whatImprovements();
    await happyNow();
    const thanksResolve = await finalThankYou(); //* catching the value passed in resolve()
    console.log(succ, thanksResolve);
  } catch (err) {
    console.log(err); //? catching err for all the await functions and not for async function
    throw new Error(); //* here throwing an error inside the async authenticate function--so that the then() methods code doesn't execute, when an error occurs in any of the await functions
  }
}

// authenticate();//? async function---async function returns a promise itself by default--so this authenciate func it returning a promise itself
//? so, we can use .then() method on it as well

authenticate()
  .then(() => {
    console.log("Job Well DOne");
  })
  .catch((err) => {
    console.log(err); //* handling the manually thrown error---when try and catch is used---or can directly use it for catching error for the await functions
  });

//? error handling in async await---either use catch block on the async function or wrap the whole async function code in try block
