let addToDoBtn = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let input = document.getElementById('input');

addToDoBtn.onclick = function(){
  if (input.value != "") {
    let p = document.createElement('p')
    p.innerText = input.value;

    p.classList.add("pStyle")

    toDoContainer.appendChild(p)

    input.value = "";


    p.addEventListener('click', () => {
      p.classList.add("pBarré");
    })

    p.addEventListener('dblclick', () => {
      toDoContainer.removeChild(p);
    })
  }
}
