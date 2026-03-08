// 1: Get the sign in button
document.getElementById("sign-in-btn").addEventListener("click", function () {
  // 2: Get the username input
  const userNameInput = document.getElementById("user-input");
  const userNameValue = userNameInput.value;
  // // 3: Get the password
  const passwordInput = document.getElementById("password-input");
  const passwordInputValue = passwordInput.value;
  // 4: Match the username and password
  if (userNameValue == "admin" && passwordInputValue == "admin123") {
    alert("Login success");
    window.location.assign("./home.html");
  } else {
    alert("Please enter your username and password");
  }
});
