var textareaInput = document.getElementById('note-input');

var tableDisplay = document.getElementById('data-grid');

var nameInput = document.getElementById('name-input');

function submit(){
    let note = textareaInput.value;
    let name = nameInput.value;

    if(note != ""){

        tableDisplay.innerHTML += `<tr><td>${name}</td><td>${note}</td> <td><button id="details-button" onclick="viewMore()">Ver Mais</button></td></tr>`;
    }
}

function viewMore(){
    let modal = document.getElementById('modal p');
    
}