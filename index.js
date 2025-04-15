const userInfo = {
  "username": "myname",
  "password": "mypassword"
};

function createLoginTracker(userInfo) {
  let attemptCount = 0;
  let isLocked = false;

  const loginAttempt = (passwordAttempt) => {
    if (isLocked) {
      return "Account locked due to too many failed login attempts";
    }

    attemptCount++;

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      if (attemptCount >= 3) {
        isLocked = true;
        return "Attempt 3: Login failed";
      }
      return `Attempt ${attemptCount}: Login failed`;
    }
  };

  return loginAttempt;
}


// const tracker = createLoginTracker({
//   username: "test",
//   password: "123"
// });
// console.log(tracker("wrong1"));
// console.log(tracker("123"));

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};


