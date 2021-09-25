// //selectors
// const todoInput = document.querySelector(".todo-input");
// const todoButton = document.querySelector(".todo-button");
// const todoList = document.querySelector(".todo-list");
// const filterOption = document.querySelector(".filter-todos");

// //event listeners
// document.addEventListener("DOMContentLoaded", getTodos);
// todoButton.addEventListener("click", addTodo);
// todoList.addEventListener("click", deleteCheck);
// filterOption.addEventListener("click", filterTodo);

// //functions

// function addTodo(event) {
//   event.preventDefault();
//   //create DIV
//   const todoDiv = document.createElement("div");
//   todoDiv.classList.add("todo");
//   //create Li
//   const newTodo = document.createElement("li");
//   newTodo.innerText = todoInput.value;
//   newTodo.classList.add("todo-item");
//   todoDiv.appendChild(newTodo);

//   //add todo to localstorage
//   saveLocalTodos(todoInput.value);

//   //checked button

//   const completedButton = document.createElement("button");
//   completedButton.innerHTML = '<i class="fas fa-check"></i>';
//   completedButton.classList.add("complete-btn");
//   todoDiv.appendChild(completedButton);

//   //Trash button

//   const trashButton = document.createElement("button");
//   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
//   trashButton.classList.add("trash-btn");
//   todoDiv.appendChild(trashButton);

//   //append to list
//   todoList.appendChild(todoDiv);

//   //clear todoInput value
//   todoInput.value = "";
// }

// function deleteCheck(e) {
//   const item = e.target;
//   //delete todo
//   if (item.classList[0] === "trash-btn") {
//     const todo = item.parentElement;
//     //animation
//     todo.classList.add("fall");
//     todo.addEventListener("transitionend", function () {
//       todo.remove();
//     });
//   }

//   //check Mark
//   if (item.classList[0] === "complete-btn") {
//     const todo = item.parentElement;
//     todo.classList.toggle("completed");
//   }
// }

// // function filterTodo(e) {
// //     const todos = todoList.childNodes;
// //     todos.forEach(function(todo) {
// //         switch (e.target.value)
// //   });
// // }

// function filterTodo(e) {
//   const todos = todoList.childNodes;
//   todos.forEach(function (todo) {
//     switch (e.target.value) {
//       case "all":
//         todo.style.display = "flex";
//         break;
//       case "completed":
//         if (todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//         break;
//       case "uncompleted":
//         if (!todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//         break;
//     }
//   });
// }

// //localstorage work

// function saveLocalTodos(todo) {
//   //cheking do i have a value in there??

//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   todos.push(todo);
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// function getTodos() {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   todos.forEach(function () {
//     const todoDiv = document.createElement("div");
//     todoDiv.classList.add("todo");
//     //create Li
//     const newTodo = document.createElement("li");
//     newTodo.innerText = todo;
//     newTodo.classList.add("todo-item");
//     todoDiv.appendChild(newTodo);

//     //checked button

//     const completedButton = document.createElement("button");
//     completedButton.innerHTML = '<i class="fas fa-check"></i>';
//     completedButton.classList.add("complete-btn");
//     todoDiv.appendChild(completedButton);

//     //Trash button

//     const trashButton = document.createElement("button");
//     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
//     trashButton.classList.add("trash-btn");
//     todoDiv.appendChild(trashButton);

//     //append to list
//     todoList.appendChild(todoDiv);
//   });
// }

//Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
filterOption.addEventListener("click", filterTodo);

//Functions

function addTodo(e) {
  //Prevent natural behaviour
  e.preventDefault();
  //Create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create list
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  //Save to local - do this last
  //Save to local
  saveLocalTodos(todoInput.value);
  //
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";
  //Create Completed Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Create trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //attach final Todo
  todoList.appendChild(todoDiv);
}

function deleteTodo(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    // e.target.parentElement.remove();
    const todo = item.parentElement;
    todo.classList.add("fall");
    //at the end
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", (e) => {
      todo.remove();
    });
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    console.log(todo);
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    //Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";
    //Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //attach final Todo
    todoList.appendChild(todoDiv);
  });
}
