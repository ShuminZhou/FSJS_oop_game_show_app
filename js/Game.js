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
     * @return {object} a random phrase that use in the game
     */
    getRandomPhrase(){
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        const randomPhrase = this.phrases[randomIndex];
        const activePhrase = new Phrase(randomPhrase);
        return activePhrase;
    }

    /**
     * start the game when the startGame button is click
     * hide the overlay and set phrase property to new phrase;
     */
    startGame(){
        document.getElementById("overlay").style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        return true;
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
     * @param {boolean};
     */
   removeLife(boolean){
        const scoreBoard = document.querySelector("#scoreboard ol");
        const scoreBoardHearts = scoreBoard.children;
        if(boolean === false){
            this.missed += 1;
            const scoreBoardIndex = this.missed - 1;
            if(this.missed < 5){
                const scoreBoardImage = scoreBoardHearts[scoreBoardIndex].firstElementChild;
                scoreBoardImage.setAttribute("src","images/lostHeart.png");
            }
            this.gameOver(false);
        }
    }
    
    /**
     * if the user geuss misses five time,the game over and add lose messaege
     * add a new button to the screem.
     * @param {boolean};
     */
    gameOver(boolean){
        /**
         * having the feature to creat a return the refresh buttons
         */
        window.overlay = document.getElementById("overlay");
        window.winLoseMessage = document.getElementById("game-over-message");
        window.startButton = document.getElementById("btn__reset");
        window.newBtn = document.createElement("button");
        window.oldBtn = document.getElementById("restart");
        newBtn.textContent = "Start New Game";
        newBtn.setAttribute("id","restart");

        if(boolean === true){
            window.startButton = document.getElementById("btn__reset");
            overlay.style.display = "block";
            overlay.classList.replace("start","win");
            winLoseMessage.textContent = "Great Job,You guess the phrase!";
            if(startButton){
                overlay.removeChild(startButton);
            };
            if(oldBtn){
                overlay.removeChild(oldBtn);
            }
            overlay.appendChild(newBtn);
        }else{
            if(this.missed === 5){
                overlay.style.display = "block";
                overlay.classList.replace("start","lose");
                winLoseMessage.textContent = "Sorry,You Loss all the heart,Please Try Again!";
                if(startButton){
                    overlay.removeChild(startButton);
                }
                if(oldBtn){
                    overlay.removeChild(oldBtn);
                }
                overlay.appendChild(newBtn);
            }
        }
    }

    /**
     * when the user click on the onScreen keyboard,add wrong or chose class to it,
     * also make the chose letter disable,make interactive with methods.
     * showMatchedLetter()
     * checkForWin();
     * gameOver();
     * removeLeft();
     * add win or lose messsage to the screem
     */
    handleInteraction(button){
       const result =  this.activePhrase.checkLetter(button);
       const letter = button.textContent;
       /**
        * if user corrent guess the letter
        * add chosen class and disabled it
        */
       if(result){
        this.activePhrase.showMatchedLetter(letter);
        button.classList.add("chosen");
        button.setAttribute("disabled",true);
        const checkWin = this.checkForWin();// store checkForWin()'s boolean value
        this.gameOver(checkWin);
       }else{
           /**
            * if user incorrect guess add "wrong" class 
            * and disable it
            */
        button.classList.add("wrong");
        button.setAttribute("disabled",true);
        this.removeLife(result);
       }
    }

    /**
     * going to reset the game.
     * 
     */
    gameReset(){
        document.location.reload(true); // reload the page;
    }
}