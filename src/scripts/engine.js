
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
        player: document.getElementById("computer-field-card"),
    },

    action:{
        button: document.getElementById("next-duel"),
    },
    
};

/**LIGANDO OS ELEMENTOS COM O HTML FIM */


/**MAPEANDO AS CARTAS INICIO */

const pathImages = ".src/assets/icons/";
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


/**METODO DE INICIALIZAÇÃO */
function init(){

    

}


init();