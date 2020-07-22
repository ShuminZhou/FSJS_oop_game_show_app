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

    startGame(){
        document.getElementById("overlay").style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        window.phrase = new Phrase(this.activePhrase);
        phrase.addPhraseToDisplay();
    }

    checkForWin(){
        const allShow = document.querySelectorAll(".show");
        const allLetters = document.querySelectorAll(".letter");
        if(allShow.length === allLetters.length){
            return true;
        }else{
            return false;
        }
    };


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

    gameOver(){
        const overlay = document.getElementById("overlay");
        const winLoseMessage = document.getElementById("game-over-message");
        const startButton = document.getElementById("btn__reset");
        const newBtn = document.createElement("button");
        newBtn.textContent = "Start New Game";
        newBtn.setAttribute("id","restart")

        if(this.missed === 5){
            overlay.style.display = "block";
            overlay.classList.replace("start","lose");
            winLoseMessage.textContent = "Sorry,You Loss all the heart,Please Try Again!";
            overlay.removeChild(startButton);
            overlay.appendChild(newBtn)
        }else if(this.checkForWin()){
            overlay.style.display = "block";
            overlay.classList.replace("start","win");
            winLoseMessage.textContent = "Great Job,You guess the phrase!";
            overlay.removeChild(startButton);
            overlay.appendChild(newBtn)
        }
    }


    handleInteraction(letter){
       const result =  phrase.checkLetter(letter);
       this.removeLife(result);
       this.gameOver();
    }


    gameReset(){
        document.location.reload(true);
    }
}