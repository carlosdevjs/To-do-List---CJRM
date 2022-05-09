const formAddTodo = document.querySelector('.form-add-todo')
const inputFormSearch = document.querySelector('.form-search input')
const todosContainer = document.querySelector('.todos-container')
const dataTimerClock = document.querySelector('[data-js="data-timer"]')

const formatDataUnit = unit => String(unit).length === 1 ? `0${unit}` : unit

const getClockHTML = (hours, minute, second) => `
  <span>${hours}</spnan> :
  <span>${minute}</spnan> :
  <span>${second}</spnan>
`
const updateClock = () => {
  const clock = new Date()
  const hours = formatDataUnit(clock.getHours())
  const minute = formatDataUnit(clock.getMinutes())
  const second = formatDataUnit(clock.getSeconds())

  return dataTimerClock.innerHTML = getClockHTML(hours, minute, second)
}

setInterval(updateClock, 1000)

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
    shouldBeVisible: todo.textContent.toLowerCase().includes(inputValue)
  }))
  
  filterTodos(todos)
}

formAddTodo.addEventListener('submit', insertContentInTodoList)
todosContainer.addEventListener('click', deleteLiTodoList )
inputFormSearch.addEventListener('input', searchContentTodoList)

