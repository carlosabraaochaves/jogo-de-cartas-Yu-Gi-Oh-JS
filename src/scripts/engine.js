
const state = {

   /**LIGANDO OS ELEMENTOS COM O HTML INICIO */
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById('score_points'),

    },

    cardSprites:{

        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },


    fieldCards:{
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },

    action:{
        button: document.getElementById("next-duel"),
    },
    
};

/**LIGANDO OS ELEMENTOS COM O HTML FIM */


/**MAPEANDO AS CARTAS INICIO */

const playerSides={
    player1 : "player-cards",
   computer : "computer-cards",

};
const pathImages = "./src/assets/icons/";
const cardData =[
{
    id:0, name: "Blue Eyes white Dragon", type: "Paper", img: `${pathImages}dragon.png`,

    winOf:[1],
    loseOf:[2],



},

{
    id:1, name: "Dark Magician", type: "Rock", img: `${pathImages}magician.png`,

    winOf:[2],
    loseOf:[0],



},


{
    id:2, name: "Exodia", type: "Scissors", img: `${pathImages}exodia.png`,

    winOf:[0],
    loseOf:[1],



},





];

/**MAPEANDO AS CARTAS FIM */

/**FUNÇÃO PARA CHAMAR AS CARTAS INICIO*/


async function getRandomCardId(){
    const randomIndex = Math.floor(Math.random() * cardData.length);

   

    return cardData[randomIndex].id;
}

async function createCardImage(idCard, fieldSide){

    const cardImage = document.createElement("img");

    cardImage.setAttribute("height","100px");
    cardImage.setAttribute("src","./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id", idCard);
    cardImage.classList.add("card");

    if(fieldSide === playerSides.player1){
        cardImage.addEventListener("click", () => {
            setCardsField(cardImage.getAttribute("data-id"));
        });
    

        cardImage.addEventListener("mouseover", ()=> {
            drawSelectDard(idCard);
        });
   
    }
        return cardImage;


}
         async function setCardsField(cardId){

            // await removeAllCardsImages();
            
            let computerCardId = await getRandomCardId();

            state.fieldCards.player.style.display = "block";
            state.fieldCards.computer.style.display ="block";

            state.fieldCards.player.src =cardData[cardId].img;
            state.fieldCards.computer.src =cardData[computerCardId].img;

            // let duelResults = await checkDuelResults(cardId, computerCardId);

            // await updateScore();
            // await drawButton();


         }



        async function drawSelectDard(index){

            state.cardSprites.avatar.src =cardData[index].img;
            state.cardSprites.name.innerText =cardData[index].name;
            state.cardSprites.type.innerText ="Atribute: " + cardData[index].type;

        }
    

async function drawCards(cardNumbers, fieldSide){

    for( let i =0; i < cardNumbers; i++){

        const randomIdCard = await getRandomCardId();

        const cardImage = await createCardImage(randomIdCard, fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage);

    }
}

/**FUNÇÃO PARA CHAMAR AS CARTAS FIM*/



/**METODO DE INICIALIZAÇÃO */
function init(){

    drawCards(5, playerSides.player1);
    drawCards(5, playerSides.computer);

    

}


init();