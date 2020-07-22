/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
     constructor(pharse){
         this.pharse = pharse.toLowerCase();//This is the actual phrase the Phrase object is representing need to conver to all lowerCase;
     }

     addPhraseToDisplay(){
        const randomPhrase = this.pharse;
        const letters = randomPhrase.split("");
        for(let i = 0; i < letters.length; i ++){
            const li = document.createElement("li");
            if(letters[i] === " "){
                li.textContent = " ";
                li.classList.add("space")
            }else{
                li.textContent = letters[i];
                li.classList.add("hide","letter", letters[i]);
            }
            document.querySelector("#phrase ul").appendChild(li);
        }
     }

     checkLetter(button){
         const letter = button.textContent;
         const correntPhrase = this.pharse;
         if(correntPhrase.indexOf(letter) > -1){
            this.showMatchedLetter(letter);
            button.classList.add("chosen");
            button.setAttribute("disabled",true);
            return true;
         }else{
            button.classList.add("wrong");
            button.setAttribute("disabled",true);
            return false;
         }
         
     }

     showMatchedLetter(letter){
         const allLetters = document.querySelectorAll(".letter");
        for(let i = 0 ; i < allLetters.length; i ++){
            const theLetter = allLetters[i].textContent;
            if(theLetter === letter){
                allLetters[i].classList.replace("hide","show");
            }
        }
     }
 }