/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * Event handler when a user click on the Start Game Button.
 */
document.getElementById("btn__reset").addEventListener("click",()=>{
    window.newGame = new Game();
    newGame.startGame();
})

/**
 * Event handler that on the keyboard on screen when click
 */
document.getElementById("qwerty").addEventListener("click",(e)=>{
    if(e.target.tagName === "BUTTON"){
        newGame.handleInteraction(e.target);
    }

})


/**
 * reset the game when click on the Start New Game Button.
 */
const overlay = document.getElementById("overlay");

overlay.addEventListener("click",(e)=>{
    if(e.target.tagName === "BUTTON"){
       if(e.target.id === "restart"){
           newGame.gameReset();
       }
    }
})

