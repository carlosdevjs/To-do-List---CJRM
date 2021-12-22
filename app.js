const formAddTodo = document.querySelector('.form-add-todo')
const inputFormSearch = document.querySelector('.form-search input')
const todosContainer = document.querySelector('.todos-container')
const lis = document.querySelectorAll('li')

const insertContentInTodoList = event => {
  event.preventDefault()
  const inputValue = event.target.add.value.trim()

  if (inputValue === '') {
    inputValue.reset()
  }

  todosContainer.innerHTML += `
   <li class="list-group-item d-flex justify-content-between align-items-center" data-list="delete">
     <span>${inputValue}</span>
     <i class="far fa-trash-alt delete" data-trash="off-line"></i>
   </li>`

  event.target.reset()
}

const deleteLiTodoList = event => {
  const clickedElement = event.target.dataset.trash
  
  if (clickedElement) {
    event.target.parentElement.remove()
  }
}

const searchContentTodoList = event => {
  const inputValue = event.target.value.trim().toLowerCase()
  
  const showTodosList = (arr, met1, className1, className2) => {
    Array.from(arr)
    .filter(met1)
    .forEach(todo => {
      todo.classList.remove(className1)
      todo.classList.add(className2)
    })
  }
  
  showTodosList(todosContainer.children, todo => !todo.textContent.toLowerCase()
    .includes(inputValue), 'd-flex', 'hidden')
  
  showTodosList(todosContainer.children, todo => todo.textContent.toLowerCase()
    .includes(inputValue), 'hidden', 'd-flex')
}

formAddTodo.addEventListener('submit', insertContentInTodoList)
todosContainer.addEventListener('click', deleteLiTodoList )
inputFormSearch.addEventListener('input', searchContentTodoList)

