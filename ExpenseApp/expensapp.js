var nameInput = document.getElementById('name-input');
var dateInput = document.getElementById('date-input');
var priceInput = document.getElementById('price-input');

var tableDisplay = document.getElementById('table-display');

function submit(){
    let name = nameInput.value;
    let date = dateInput.value;
    let price = priceInput.value;

    if(name != "" && date != null && price != null) {
        
        tableDisplay.innerHTML += `<tr><td>${name}</td><td>${date}</td><td>R$${price}</td> <td><button id="" type="button" onclick="removeItem(this.parentNode)">X</button></td></tr>`;

        nameInput.value = "";
        dateInput.value = "";
        priceInput.value = "";
    }else{
        alert('informações não fornecidas');
    }
}

function removeItem(buttonC){
    buttonC.parentNode.remove();
}