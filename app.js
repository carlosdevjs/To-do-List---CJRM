const formAddTodo = document.querySelector('.form-add-todo')
const inputFormSearch = document.querySelector('.form-search input')
const todosContainer = document.querySelector('.todos-container')
const lis = document.querySelectorAll('li')

const insertContentInTodoList = event => {
  event.preventDefault()
  const inputValue = event.target.add.value.trim()

if (inputValue) {
  todosContainer.innerHTML += `
   <li class="list-group-item d-flex justify-content-between align-items-center" data-list="delete">
     <span>${inputValue}</span>
     <i class="far fa-trash-alt delete" data-trash="off-line"></i>
   </li>`
  }
  
  event.target.reset()
}

const deleteLiTodoList = event => {
  const trashWasClicked = event.target.dataset.trash
  
  if (trashWasClicked) {
    event.target.parentElement.remove()
  }
}

const filterTodos = todos => {
  todos.forEach(({ todo, shouldBeVisible }) => {
    todo.classList.add(shouldBeVisible ? 'd-flex' : 'hidden')
    todo.classList.remove(shouldBeVisible ? 'hidden' : 'd-flex')
  })
}

const searchContentTodoList = event => {
  const inputValue = event.target.value.trim().toLowerCase()
  const todos = Array.from(todosContainer.children).map(todo => ({
    todo,
    shouldBeVisible: todo.textContent.toLowerCase().includes()
  }))
  
  filterTodos(todos)
}

formAddTodo.addEventListener('submit', insertContentInTodoList)
todosContainer.addEventListener('click', deleteLiTodoList )
inputFormSearch.addEventListener('input', searchContentTodoList)

