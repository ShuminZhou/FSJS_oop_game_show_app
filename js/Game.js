/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{
    constructor(){
        this.missed = 0; //Usedtotrackthenumberofmissedguessesbytheplayer
        this.phrases = this.createPhrase();//An array of Phrase objects to use with the game
        this.activePhrase = null;//This is the Phrase object that’s currently in play.
    }

    /**
     * Greates Phrases for use in game
     * @return {array} and array of phrase that should use in the game.
     */
    createPhrase(){
        const phrase = [
          "Your skirt is so pretty",
          "You look great today",
          "I like your new haircut",
          "You have the best style",
          "Keep it up",
          "I appreciate your support"
        ]
        return phrase;
    }

    /**
     * generated a random phrase that exist property phrases array
     * @return {string} a random phrase that use in the game
     */
    getRandomPhrase(){
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        const randomPhrase = this.phrases[randomIndex];
        return randomPhrase;
    }

    /**
     * start the game when the startGame button is click
     * hide the overlay and set phrase property to new phrase;
     */
    startGame(){
        document.getElementById("overlay").style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        window.phrase = new Phrase(this.activePhrase);
        phrase.addPhraseToDisplay();
    }

    /**
     * to check if a player is gusss all the letter and reveal them.
     * @return {boolean} a random phrase that use in the game
     */
    checkForWin(){
        const allShow = document.querySelectorAll(".show");
        const allLetters = document.querySelectorAll(".letter");
        if(allShow.length === allLetters.length){
            return true;
        }else{
            return false;
        }
    };

    /**
     * to remove the hearts when the have wrong guess
     * add missed property each time when player have a wrong guess.
     */
   removeLife(boolean){
        const scoreBoard = document.querySelector("#scoreboard ol");
        const scoreBoardHearts = scoreBoard.children;
        if(boolean === false){
            this.missed += 1;
            const scoreBoardIndex = this.missed - 1;
            const scoreBoardImage = scoreBoardHearts[scoreBoardIndex].firstElementChild;
            scoreBoardImage.setAttribute("src","images/lostHeart.png");
        }
    }
    
    /**
     * if the user geuss misses five time,the game over and add lose messaege
     * add a new button to the screem.
     */
    gameOver(){
        window.overlay = document.getElementById("overlay");
        window.winLoseMessage = document.getElementById("game-over-message");
        window.startButton = document.getElementById("btn__reset");
        window.newBtn = document.createElement("button");
        newBtn.textContent = "Start New Game";
        newBtn.setAttribute("id","restart")
        if(this.missed === 5){
            overlay.style.display = "block";
            overlay.classList.replace("start","lose");
            winLoseMessage.textContent = "Sorry,You Loss all the heart,Please Try Again!";
            overlay.removeChild(startButton);
            overlay.appendChild(newBtn)
        }
    }

    /**
     * when the user click on the onScreen keyboard,add wrong or chose class to it,
     * also make the chose letter disable,make interactive with methods.
     * showMatchedLetter()
     * checkForWin();
     * gameOver();
     * removeLeft();
     * add win messsage to the screem
     */
    handleInteraction(button){
       const result =  phrase.checkLetter(button);
       const letter = button.textContent;
       if(result){
        phrase.showMatchedLetter(letter);
        button.classList.add("chosen");
        button.setAttribute("disabled",true);
       }else{
        button.classList.add("wrong");
        button.setAttribute("disabled",true);
        this.removeLife(result);
       }
       const checkWin = this.checkForWin();
       if(checkWin){
            overlay.style.display = "block";
            overlay.classList.replace("start","win");
            winLoseMessage.textContent = "Great Job,You guess the phrase!";
            overlay.removeChild(startButton);
            overlay.appendChild(newBtn);
            
       }else{
        this.gameOver();
       }
    }

    /**
     * going to reset the game.
     * 
     */
    gameReset(){
        document.location.reload(true);
    }
}