'use strict'

const inputBox = document.getElementById('input-box')
const listCont = document.getElementById('list')


// adding to the list
function addTask() {
  if (inputBox.value === '') {
    alert('Moraš nešto upisati')
  } else {
    let li = document.createElement('li')
    li.innerHTML = inputBox.value
    listCont.appendChild(li)

    let span = document.createElement('span')
    span.innerHTML = 'X'
    li.appendChild(span)

    inputBox.value = ''
    saveData() 
  }
}

// button actions
listCont.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked')
      saveData() 
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove()
      saveData() 
    }
  },
  false
)

// local storage
function saveData() {
  localStorage.setItem('data', listCont.innerHTML)
}

function showTask() {
  listCont.innerHTML = localStorage.getItem('data')
}
showTask()


