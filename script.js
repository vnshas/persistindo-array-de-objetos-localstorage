//Seleção de elementos

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#task");
const todoList = document.querySelector(".todo-list");

//Funções

const saveTodo = (text) => {

    const todo = document.createElement("div")
    todo.classList.add("todo")
    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    const removeBtn = document.createElement("button")
    removeBtn.classList.add("button__remove")
    removeBtn.innerText = "Excluir"
    todo.appendChild(removeBtn)

    //todoList.classList.add("todo-container")
    todoList.appendChild(todo)
    
    
    todoInput.value = ''
}


todoForm.addEventListener("submit", (e) =>{

    e.preventDefault()
    
    const inputValue = todoInput.value;

    if (inputValue){
        saveTodo(inputValue)
    }
})

//Eventos

document.addEventListener("click", (e) =>{
    const targetEl = e.target
    const parentEl = targetEl.closest("div")
    if(targetEl.classList.contains("button__remove")){
        parentEl.remove()
    }
})

