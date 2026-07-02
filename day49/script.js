const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => {
    addTodo(todo);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  //get value of input
  let todoText = input.value;

  // if there's user input then get the text
  if (todo) {
    todoText = todo.text;
  }

  // if there's a todo text passed in, then create an li element
  if (todoText) {
    const todoEl = document.createElement("li");

    // if the todo has class completed
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoText;

    // Task completed add completed class to the todo
    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      updateLS();
    });

    // Remove task from todo list
    // The contextmenu event fires when the user attempts to open a context menu. This event is typically triggered by clicking the right mouse button, or by pressing the context menu key.
    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });

    todosUL.appendChild(todoEl);

    input.value = "";

    // update the local storage
    updateLS();
  }
}

// Function to update the local storage
function updateLS() {
  todosEl = document.querySelectorAll("li");

  const todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
