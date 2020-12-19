let insertionInput = document.getElementById('user-input');

const todoList = document.getElementById('todo-list');



function submit(){
    let task = insertionInput.value;

    if(task != ""){

        todoList.innerHTML += `<li>${task} <button id="delete-button" type="button" onclick="deleteTask(this)">X</button> <button id="done-button" type="button" onclick="doneTask(this)">Done</button> </li> `;

        insertionInput.value = "";

    }else
    {
        alert('Nome da tarefa não inserido');
    }    
}
function clearList(){
    todoList.innerHTML = "";
}
function doneTask(button){
    let item = button.parentNode;
    item.style.color = 'green';
}
function deleteTask(button){
    let item = button.parentNode;
    item.remove();
}
