let x = document.querySelector(".x")
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let menssegecontainer = document.querySelector("#menssege");
let messageText = document.querySelector("#menssege p");
let secondPlayer;

// contador de jogadas

let player1 = 0;
let player2 = 0;

// adicionando o evento de click
for (i = 0; i < boxes.length; i++) {
    //quando alguem clica na caixa
    boxes[i].addEventListener("click", function () {

        let el = checkEl(player1, player2);

        // verifica si tem x ou o
        if (this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);

            // computar jogada 
            if (player1 == player2) {
                player1++;
            } else {
                player2++;
            }

            // checa quem ganhou 
            checkWinCondition();
        }

    });

    // evento para saber si e 2 player ou IA
    for(let i = 0; i < buttons.length; i++){

        buttons[i].addEventListener("click",function(){

            secondPlayer = this.getAttribute("id");

            for(let j = 0; j < buttons.length; j++){

                buttons[j].style.display = 'none';


            }

            setTimeout(function(){

                let container = document.querySelector("#container");
                container.classList.remove("hide");

            },200);

        });
    }


}
// verifica quem vai jogar 
function checkEl(player1, player2) {
    if (player1 == player2) {
        // x
        el = x;
    } else {
        // o
        el = o;
    }
    return el;
}



// ver quem ganhou 
function checkWinCondition() {
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    // horizontal 
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1child = b1.childNodes[0].className;
        let b2child = b2.childNodes[0].className;
        let b3child = b3.childNodes[0].className;

        if (b1child == 'x' && b2child == 'x' && b3child == 'x') {
            // x ganhou 
            declareWinner('x');
        } else if (b1child == 'o' && b2child == 'o' && b3child == 'o') {
            // o ganhou 
            declareWinner('o');
        }
    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4child = b4.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b6child = b6.childNodes[0].className;

        if (b4child == 'x' && b5child == 'x' && b6child == 'x') {
            // x ganhou 
            declareWinner('x');
        } else if (b4child == 'o' && b5child == 'o' && b6child == 'o') {
            // o ganhou 
            declareWinner('o');
        }
    }
    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7child = b7.childNodes[0].className;
        let b8child = b8.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b7child == 'x' && b8child == 'x' && b9child == 'x') {
            // x ganhou 
            declareWinner('x');
        } else if (b7child == 'o' && b8child == 'o' && b9child == 'o') {
            // o ganhou 
            declareWinner('o');
        }
    }

    // =======================Vertical=============================
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b1child = b1.childNodes[0].className;
        let b4child = b4.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if (b1child == 'x' && b4child == 'x' && b7child == 'x') {
            // x ganhou 
            declareWinner('x');
        } else if (b1child == 'o' && b4child == 'o' && b7child == 'o') {
            // o ganhou 
            declareWinner('o');
        }
    }

    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        let b2child = b2.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b8child = b8.childNodes[0].className;

        if (b2child == 'x' && b5child == 'x' && b8child == 'x') {
            // x ganhou 
            declareWinner('x');
        } else if (b2child == 'o' && b5child == 'o' && b8child == 'o') {
            // o ganhou 
            declareWinner('o');
        }
    }
    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b3child = b3.childNodes[0].className;
        let b6child = b6.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b3child == 'x' && b6child == 'x' && b9child == 'x') {
            // x ganhou 
            declareWinner('x');
        } else if (b3child == 'o' && b6child == 'o' && b9child == 'o') {
            // o ganhou 
            declareWinner('o');
        }
    }

    //================ cruzado==================================

    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b1child = b1.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b1child == 'x' && b5child == 'x' && b9child == 'x') {
            // x ganhou 
            declareWinner('x');
        } else if (b1child == 'o' && b5child == 'o' && b9child == 'o') {
            // o ganhou 
            declareWinner('o');
        }
    }
    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b3child = b3.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b7child = b7.childNodes[0].className;
       

        if (b3child == 'x' && b5child == 'x' && b7child == 'x') {
            // x ganhou 
            declareWinner('x');
        } else if (b3child == 'o' && b5child == 'o' && b7child == 'o') {
            // o ganhou 
            declareWinner('o');
        }
    }
    // deu velha 
    let counter = 0;
    for (i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            counter++;
        }
        
    }

    if (counter == 9) {
        declareWinner('deu velha ');
    }
}
 // limpa o jogo,declara o vencedor e atualiza o placar 
 function declareWinner(winner){
    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardY = document.querySelector("#scoreboard-2");
    let msg = '';
    if (winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 venceu";
        
    } else if(winner == 'o'){
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
        msg = "O jogador 2 venceu";
    }else{
        msg = "deu velha";
    }
    // exibe msg 
    messageText.innerHTML = msg;
    menssegecontainer.classList.remove("hide"); 
    // esconde msg 
    setTimeout(function(){
        menssegecontainer.classList.add("hide");
    },3000);

    // zera jogadas
    player1 = 0;
    player2 = 0;

    // remover jogadas
    let boxesToRemove = document.querySelectorAll(".box div");
       
    for(let i = 0; i <boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
   

}