// complete solution



var inputField = document.getElementById("inputField");
var display = document.getElementById("display");
inputField.addEventListener("keypress", function(event) {
  display.innerHTML += event.key;
});