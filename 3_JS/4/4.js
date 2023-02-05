// boilerplate
var items = ['apple', 'banana', 'cherry', 'date', 'orange'];


//complete solution

var filterInput = document.getElementById("filter-input");
var items = document.getElementsByTagName("li");

filterInput.addEventListener("input", function() {
  var filterValue = filterInput.value.toLowerCase();

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var itemValue = item.textContent.toLowerCase();

    if (itemValue.indexOf(filterValue) > -1) {
      item.setAttribute("style", "display:''");
    } else {
      item.setAttribute("style", "display:none");
    }
  }
});





