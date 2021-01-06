
// possibilidades de cartas
var cardsP = [1,2,3];

// contadores de cartas -- usado para impedir de ter mais de 2 cartas iguais
var countCard1 = 0;
var countCard2 = 0;
var countCard3 = 0;

// Variável auxiliar -- impede que aja mais que cardsP.length*2
var manager = 0;

// Conteiner onde as cartas serão geradas
var cardTable = document.querySelector('.card-table');

// Gera aleatóriamente cardsP.length pares de cartas
while (manager < cardsP.length*2) {
    
    // seleciona uma das possíbilidades aleatóriamente
    let sortedCard = Math.floor(Math.random()*cardsP.length);

    if(sortedCard == 0 && countCard1 < 2){

        cardTable.innerHTML += '<div id="Card-1"  onclick="verifyEquity(this)"><img src="img/chicken.jpg"></div>';
        countCard1++;
        manager++;
                
    }else if(sortedCard == 1 && countCard2 < 2){

        cardTable.innerHTML += '<div id="Card-2" onclick="verifyEquity(this)"><img src="img/panda.jpg"></div>';
        countCard2++;
        manager++;

    }else if(sortedCard == 2 && countCard3 < 2){

        cardTable.innerHTML += '<div id="Card-3" onclick="verifyEquity(this)"><img src="img/turtle.jpeg" "></div>';
        countCard3++;
        manager++;
        
    }

}
var cardsList = cardTable.childNodes;

setTimeout(function()
{  alert("remember the cards");
    for (let index = 1; index < cardsList.length; index++) {
    cardsList[index].firstChild.style.display = "none"; 
} }, 2000);



// armazena o id da primeira carta que foi clicada
var clickedCard1;

// armazena o id da segunda carta que foi clicada
var clickedCard2;
// limita a quantidade de cartas a serem clicadas em que ocorrerá a verificação
var countSelector = 0;

// verifica se a primeira carta é igual a segunda e então da um feedback para o usuário
function verifyEquity(div){

    // verifica se é a primeira vez que uma carta é clicada
    if (countSelector == 0) {

        clickedCard1 = div.id;
        countSelector++;

        div.firstChild.style.display = 'block';

    }
    // verifica se é a segunda vez que uma carta é clicada
    else if(countSelector > 0 && countSelector < 2){

        div.firstChild.style.display = 'block';
        
        clickedCard2 = div.id;
        countSelector += 2; 
        
        if(clickedCard1 == clickedCard2){
            alert('Você ganhou!!');
            location.reload();
        }else{
            alert('Você perdeu!!');
            location.reload();
        }
    }
    
}



