// complete solution
const todoList = document.querySelector('.todo-list');
const taskInput = document.querySelector('.task-input');
const addButton = document.querySelector('.add-button');
addButton.addEventListener('click', () => {
  const task = taskInput.value;
  if (!task) return;
  const taskElement = document.createElement('li');
  taskElement.innerHTML = `
    ${task}
    <button class="remove-button">Remove</button>
  `;
  todoList.appendChild(taskElement);
  taskInput.value = '';
  const removeButtons = document.querySelectorAll('.remove-button');
  removeButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.parentElement.remove();
    });
  });
});
