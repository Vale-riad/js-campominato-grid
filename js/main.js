'use-strict'

const boardContainer = document.querySelector(".board");
const btnPlay = document.querySelector(".play");

boardContainer.innerHTML="";
for(let i = 1; i<=100; i ++){
    const boardCell = document.createElement("div");
    boardCell.innerHTML=i;
    boardCell.classList.add("board_number");
    boardCell.addEventListener("click", function(){
        console.log(this.innerHTML);
        
        boardCell.classList.add("color");
        
    })
    boardContainer.append(boardCell);
}