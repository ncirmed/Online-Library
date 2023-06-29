$(document).ready(function () {
  // Check if user is already logged in
  var username = localStorage.getItem("username");

  // Redirect to index.html if user is already logged in
  if (username != undefined) {
    window.location = "/index.html";
  }
});

function login() {
  // Get username and password
  var username = $("#username").val();
  var password = $("#password").val();

  if (username == "pikota" && password == "pikota") {
    // Save username in local storage
    localStorage.setItem("username", username);

    // Redirect to index.html
    window.location = "/index.html";

    return true;
  }

  if (username == "admin" && password == "admin") {
    // Save username in local storage
    localStorage.setItem("username", username);

    // Redirect to index.html
    window.location = "/admin.html";

    return true;
  }

  if (username == "" || password == "") {
    alert("Please enter username and password");
    return false;
  }

  alert("Wrong username or password");
}
