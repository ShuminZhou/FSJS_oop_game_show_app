/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * Event handler when a user click on the Start Game Button.
 */
document.getElementById("btn__reset").addEventListener("click",()=>{
    window.newGame = new Game();// create a new Game object and it's variable to global;
    const gameStart = newGame.startGame(); // return startGame boolean value and run startGame();
    const checkWin = newGame.checkForWin();//return checkForWin boolean value;
    const gameOver = newGame.gameOver();//return gameOver() boolean value;
    if(gameStart){ // only run when gameStart method return true;
        if(!checkWin || !gameOver){ // only run when either checkForWin() or gameOver() return false.
            document.addEventListener("keydown",(e)=>{
                /**
                 * Add a keydown events to the keyboard and set it to having the same feature as click event.
                 * retrieve keypress value with ".key"
                 */
                const allKey = document.querySelectorAll(".key");
                const keyupValue = e.key;
                for(let i = 0; i < allKey.length; i ++){
                  if(allKey[i].textContent === keyupValue){
                    newGame.handleInteraction(allKey[i]); // run handleInteraction() when return button.
                  }
                }
            })
        }
    }
})

/**
 * Event handler that on the keyboard on screen when click
 */
document.getElementById("qwerty").addEventListener("click",(e)=>{
    /**
     * only target on Button elements
     */
    if(e.target.tagName === "BUTTON"){
        newGame.handleInteraction(e.target);
    }
})


/**
 * reset the game when click on the Start New Game Button.
 */
const overlay = document.getElementById("overlay");

/**
 * when user click "Start New Game",
 * Page is going to reload and reset a new game;
 */
overlay.addEventListener("click",(e)=>{
    if(e.target.tagName === "BUTTON"){
       if(e.target.id === "restart"){
           newGame.gameReset();
       }
    }
})




