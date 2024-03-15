//? we can't be dependent on time of setTimeout for async functionality
//? That's why we need to use callback functions

function welcomeToWebsite(cb) {
  setTimeout(() => {
    console.log("Welcome To Our Website for the very first time");
    cb();
  }, 3000);
}

function register(cb) {
  setTimeout(() => {
    console.log("Please Register!!!");
    cb();
  }, 2000);
}

function yourid(cb) {
  setTimeout(() => {
    console.log("Thanks for registering, your id is given here...");
    cb();
  }, 1000);
}

function login(cb) {
  setTimeout(() => {
    console.log("Use the id for login");
    cb();
  }, 1000);
}

function welcomeMssg(cb) {
  setTimeout(() => {
    console.log("Logged in successfully");
    cb();
  }, 5000);
}

function getData(cb) {
  setTimeout(() => {
    console.log("User data stored");
    cb();
  }, 4000);
}

function setData(cb) {
  setTimeout(() => {
    console.log("User data used to set something");
    cb();
  }, 1000);
}

function fillFeedbackForm(cb) {
  setTimeout(() => {
    console.log("Asking for review of our service");
    cb();
  }, 1000);
}

function thyankYouForFilling(cb) {
  setTimeout(() => {
    console.log("Thanking you for your time for filling up the form");
    cb();
  }, 5000);
}

function willTakeAction(cb) {
  setTimeout(() => {
    console.log("Received your concern, will take action");
    cb();
  }, 3000);
}

function areYouSatisfied(cb) {
  setTimeout(() => {
    console.log("Are you Satisfied with the steps taken");
    cb();
  }, 1000);
}

function whyAreYouNotSatisfied(cb) {
  setTimeout(() => {
    console.log("why Are You Not Satisfied");
    cb();
  }, 1000);
}

function whatImprovements(cb) {
  setTimeout(() => {
    console.log("What more improvements do you want??");
    cb();
  }, 1000);
}

function happyNow(cb) {
  setTimeout(() => {
    console.log("Are you happy now??");
    cb();
  }, 1000);
}

function finalThankYou() {
  setTimeout(() => {
    console.log("Thank you and we are as delighted as you");
  }, 1000);
}

//? callback hell or pyramid of doom

welcomeToWebsite(function () {
  register(function () {
    yourid(function () {
      login(function () {
        welcomeMssg(function () {
          getData(function () {
            setData(function () {
              fillFeedbackForm(function () {
                thyankYouForFilling(function () {
                  willTakeAction(function () {
                    areYouSatisfied(function () {
                      whyAreYouNotSatisfied(function () {
                        whatImprovements(function () {
                          happyNow(function () {
                            finalThankYou();
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
// register();
// yourid();
// login();
// welcomeMssg();
// getData();
// setData();
// fillFeedbackForm();
// thyankYouForFilling();
// willTakeAction();
// areYouSatisfied();
// whyAreYouNotSatisfied();
// whatImprovements();
// happyNow();
// finalThankYou();
