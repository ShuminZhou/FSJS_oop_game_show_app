/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

document.getElementById("btn__reset").addEventListener("click",()=>{
    window.newGame = new Game();
    newGame.startGame();
})

document.getElementById("qwerty").addEventListener("click",(e)=>{
    if(e.target.tagName === "BUTTON"){
        newGame.handleInteraction(e.target);
    }

})

const overlay = document.getElementById("overlay");

overlay.addEventListener("click",(e)=>{
    if(e.target.tagName === "BUTTON"){
       if(e.target.id === "restart"){
           newGame.gameReset();
       }
    }
})

