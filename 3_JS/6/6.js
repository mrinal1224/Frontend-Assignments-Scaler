const button = document.querySelector("#myButton");

button.addEventListener("click", function() {
  button.remove();
  const button1 = document.createElement("button");
  button1.innerHTML = "Button 1";
  const button2 = document.createElement("button");
  button2.innerHTML = "Button 2";
  document.body.appendChild(button1);
  document.body.appendChild(button2);
});
