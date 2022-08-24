document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDoList(e.target.formIdHere.value)
    form.reset()
  
  })
});

function buildToDoList(todo){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  let btn1=document.createElement('select')
  btn.addEventListener('click', deleteHandler)
  btn.textContent = 'x'
  li.textContent = `${todo} `
  li.appendChild(btn)
  console.log(li)
  document.querySelector('#tasks').appendChild(li)
}
function deleteHandler(e){
  e.target.parentNode.remove()
}

function sortToDoList(e){
  e.target.parentNode.sort()
}
