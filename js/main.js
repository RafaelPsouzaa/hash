let x = document.querySelector(".X")
let o = document.querySelector(".O");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let menssegecontainer = document.querySelector("#message");
let messageText = document.querySelector("#menssage p");
let secondPlayer;

// contador de jogadas

let player1 = 0;
let player2 = 0;

// adicionando o evento de click
for(i=0;i<=boxes.length;i++){
    //quando alguem clica na caixa
    boxes[i].addEventListener("click",function(){
        let el = checkEl(player1,player2);
        

       if(this.childNodes.length == 0){
         let cloneEl = el.cloneNode(true);
        this.appendChild(cloneEl);

        // computar jogada 
        if(player1 == player2){
            player1++;
        }else{
            player2++;
        }
       }

});


}
// verifica quem vai jogar 
function checkEl(player1,player2){
    if(player1 == player2){
        // x
        el = x;
    }else{
        // o
        el = o;
    }
}
