/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */



 class Game 
 {

    /**
     * Set game variables
     * phrasesCopy is used for preventing the same random phrase from being selected twice consecutively
     * spaces property represents all the letter spaces
     * keys property represents all onscreen letter key buttons
     * lives property represents all life hearts
     * @param {Array} phrases - array of Phrase objects 
     */
    constructor(phrases)
    {
       this.missed = 0;
       this.phrases = phrases;
       this.phrasesCopy = [...this.phrases];
       this.activePhrase = null;
       this.overlay = document.getElementById('overlay');
       this.spaces = document
        .getElementById('phrase')
        .querySelector('ul')
        .children;
       this.keys = document
        .getElementById('qwerty')
        .getElementsByTagName('button');
       this.lives = document
        .getElementById('scoreboard')
        .querySelector('ol')
        .children;
    }


    /**
     * Get a random phrase, add it to the display
     * Set the activePhrase property to the selected phrase
     * Calls addPhraseToDisplay method on the Phrase object
     * Remove the overlay
     * Calls getRandomPhrase
     */
    startGame()
    {
       const phrase = this.getRandomPhrase();
       phrase.addPhraseToDisplay();
       this.activePhrase = phrase;
       this.overlay.style.display = 'none';
    }


    /**
     * Reset the game
     * Set missed to 0
     * Set all onscreen keyboard keys back to default
     * Set all lives images back to default
     * Remove all spaces
     */
    resetGame()
    {
       this.missed = 0;
       document
         .getElementById('phrase')
         .querySelector('ul')
         .innerHTML = "";
       for (let i = 0; i < this.keys.length; i++) {
           if (this.keys[i].classList.contains('wrong')) {
               this.keys[i].classList.remove('wrong');
           } else if (this.keys[i].classList.contains('chosen')) {
               this.keys[i].classList.remove('chosen');
           }
           this.keys[i].removeAttribute('disabled');
       }
       for (let i = 0; i < this.lives.length; i++) {
           this.lives[i]
             .firstElementChild
             .setAttribute('src', 'images/liveHeart.png');
       }
    }


    /**
     * Get and remove a random phrase from the phrasesCopy array
     * When phrasesCopy array is empty, reset it to contain all the phrases in the phrases array
     * This prevents the game from randomly selecting the same phrase twice consecutively on multiple sessions
     */
    getRandomPhrase()
    {
        if (this.phrasesCopy.length === 0) {
            this.phrasesCopy = [...this.phrases];
        }
        const index = Math.floor(Math.random() * this.phrasesCopy.length);
        return this.phrasesCopy.splice(index, 1)[0];
    }


    /**
     * Handles user interaction with the game 
     * Accepts the element for the letter clicked by the user and checks if its a match 
     * Disables the letter button and sets the appropriate class on the button 
     * If a match, changes the class of all spaces containing the letter to show
     * If a win, end the game and display a win message, if lost, end game and show game over message
     * Calls: showMatchedLetter, checkLetter on the Phrase object, removeLife, gameOver 
     * @param {HTML element} letter - letter button 
     */
    handleInteraction(letter)
    {
       letter.setAttribute('disabled', "");
       if (this.activePhrase.checkLetter(letter.textContent)) {
           letter.classList.add('chosen');
           this.activePhrase.showMatchedLetter(letter.textContent);
       } else {
           letter.classList.add('wrong');
           this.removeLife();
       }
       this.gameOver();
    }


    /**
     * Increment the missed property
     * Change the next life heart image to the lostHeart image
     */
    removeLife()
    {
       this.missed++;
       this.lives[this.missed - 1]
         .firstElementChild
         .setAttribute('src', 'images/lostHeart.png');
    }


    /**
     * Check if any letter spaces contain the hide class
     * If not, return true. If any space contains the hide class, return false
     * Called in gameOver
     */
    checkForWin()
    {
        for (let i = 0; i < this.spaces.length; i++) {
            if (this.spaces[i].classList.contains('hide')) {
                return false;
            }
        }
        return true;
    }


    /**
     * End the game and reset 
     * If five misses, end the game with a loss, if all letter spaces showing, end game with a win
     * Calls checkForWin and resetGame
     */
    gameOver()
    {
        if (this.missed === 5) {
            this.overlay.style.display = 'flex';
            document 
             .getElementById('game-over-message')
             .textContent = "Game Over. Try again!";
            this.resetGame();
        } else if (this.checkForWin()) {
            this.overlay.style.display = 'flex';
            document 
             .getElementById('game-over-message')
             .textContent = "You Win!";
            this.resetGame();
        }
    }
}