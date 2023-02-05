//Complete Solution

var form = document.getElementById("form");
var name = document.getElementById("name");
var email = document.getElementById("email");
var error = document.getElementById("error");
form.addEventListener("submit", function(event) {
  if (!name.value || !email.value) {
    event.preventDefault();
    error.innerHTML = "Name and Email are required";
  }
});