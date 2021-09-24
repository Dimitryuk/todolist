//selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')



//event listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)




//functions

function addTodo(event) {
    event.preventDefault()
//create DIV
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
//create Li
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    //checked button

    const completedButton = document.createElement('button')
   completedButton.innerHTML='<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)

    //Trash button

     const trashButton = document.createElement('button')
   trashButton.innerHTML='<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    //append to list
    todoList.appendChild(todoDiv)

    //clear todoInput value
    todoInput.value=''
}

function deleteCheck(e) {
    const item = e.target
    //delete todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement
        todo.classList.add('fall')
        todo.remove()
    }

    //check Mark
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}
