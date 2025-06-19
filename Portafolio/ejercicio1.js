const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

document.addEventListener("DOMContentLoaded", () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(addTaskToDOM);
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  addTaskToDOM(taskText);
  saveTask(taskText);
  taskInput.value = "";
});

function addTaskToDOM(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    li.remove();
    deleteTask(taskText);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

function saveTask(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
