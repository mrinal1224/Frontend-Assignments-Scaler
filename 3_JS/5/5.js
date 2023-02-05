// complete solution

const button = document.querySelector("#myButton");

button.addEventListener("click", function() {
  const newElement = document.createElement("p");
  newElement.innerHTML = "Hello";
  document.body.appendChild(newElement);
});
