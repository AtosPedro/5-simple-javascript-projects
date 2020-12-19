var textareaInput = document.getElementById('note-input');
var modal = document.getElementById('modal');
var dataDisplay = document.getElementById('notas');

function submit(){
    let note = textareaInput.value;

    if(note != ""){

        dataDisplay.innerHTML += `<div><p>${note}</p>  <button id="details-button" onclick="viewMore(this.parentNode)">Ver Mais</button> </div>`
    }else{
        alert("campo vazio");
    }
}

function viewMore(line){
    let textNote = line.firstChild;
    modal.style.display = 'block';
    modal.innerHTML = `<div><p>${textNote.innerHTML}</p><button id="close-button" onclick="closeModal()"> X </button></div>`;
    
}

function closeModal(){
    modal.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }