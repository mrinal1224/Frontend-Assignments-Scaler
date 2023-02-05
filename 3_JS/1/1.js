// complete solution
const countDisplay = document.querySelector('.count-display'); 
const decreaseButton = document.querySelector('#decrease-button'); 
const increaseButton = document.querySelector('#increase-button'); 
let count = 0; 
decreaseButton.addEventListener('click', () => { 
  count--; 
  countDisplay.textContent = count; 
}); 
increaseButton.addEventListener('click', () => { 
  count++; 
  countDisplay.textContent = count; 
}); 
