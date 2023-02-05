// complete solution
function handleClick(event) {
  if (event.target.id === 'button1') {
    document.getElementById('output').innerHTML = 'Button 1 was clicked!';
  } else if (event.target.id === 'button2') {
    document.getElementById('output').innerHTML = 'Button 2 was clicked!';
  } else if (event.target.id === 'button3') {
    document.getElementById('output').innerHTML = 'Button 3 was clicked!';
  }
}

window.onload = function() {
  document.getElementById('button1').addEventListener('click', handleClick);
  document.getElementById('button2').addEventListener('click', handleClick);
  document.getElementById('button3').addEventListener('click', handleClick);
};
