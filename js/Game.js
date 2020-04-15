/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/*
https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/ 
*/

 class Game 
 {
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


    startGame()
    {
       const phrase = this.getRandomPhrase();
       phrase.addPhraseToDisplay();
       this.activePhrase = phrase;
       this.overlay.style.display = 'none';
    }


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


    getRandomPhrase()
    {
        if (this.phrasesCopy.length === 0) {
            this.phrasesCopy = [...this.phrases];
        }
        const index = Math.floor(Math.random() * this.phrasesCopy.length);
        return this.phrasesCopy.splice(index, 1)[0];
    }


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


    removeLife()
    {
       this.missed++;
       this.lives[this.missed - 1]
         .firstElementChild
         .setAttribute('src', 'images/lostHeart.png');
    }


    checkForWin()
    {
        
        for (let i = 0; i < this.spaces.length; i++) {
            if (this.spaces[i].classList.contains('hide')) {
                return false;
            }
        }
        return true;
    }


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