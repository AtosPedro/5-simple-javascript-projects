var textareaInput = document.getElementById('user-input');

function check(){
    let textValue = textareaInput.value;
    let count = 0;

    for (let index = 0; index < textValue.length; index++) {
        
        if(textValue[index] == 'a' ||textValue[index] == 'e' ||textValue[index] == 'i' ||textValue[index] == 'o' ||textValue[index] == 'u' ){
            count++;
        }
        
    }
    alert(`o número de vogais no texto inserido foi de ${count}`);
}