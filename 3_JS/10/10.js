// complete solution
const items = document.querySelectorAll("#item-list li");
const button = document.querySelector("#font-toggle");
let currentSize = "16px";

button.addEventListener("click", function() {
  currentSize = currentSize === "16px" ? "20px" : "16px";
  items.forEach(function(item) {
    item.style.fontSize = currentSize;
  });
});