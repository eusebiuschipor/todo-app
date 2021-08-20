const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

// get the data from local storage
const todos = JSON.parse(localStorage.getItem("todos"));

// set the data in local storage
localStorage.setItem("todos", JSON.stringify(todos));
