/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game 
 {
     constructor(phrases)
     {
        this.missed = 0;
        this.phrases = phrases;
        this.activePhrase = null;
     }


     startGame()
     {
        const phrase = this.getRandomPhrase();
        phrase.addPhraseToDisplay();
        this.activePhrase = phrase;
        document
            .getElementById('overlay')
            .style
            .display = 'none';
     }


     resetGame()
     {
        this.missed = 0;
        const spaces = document
            .getElementById('phrase')
            .querySelector('ul')
            .innerHTML = "";
        const keys = document
            .getElementById('qwerty')
            .getElementsByTagName('button');
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].classList.contains('wrong')) {
                keys[i].classList.remove('wrong');
            } else if (keys[i].classList.contains('chosen')) {
                keys[i].classList.remove('chosen');
            }
            keys[i].removeAttribute('disabled');
        }
        const lifes = document
            .getElementById('scoreboard')
            .querySelector('ol')
            .children;
        for (let i = 0; i < lifes.length; i++) {
            lifes[i]
                .firstElementChild
                .setAttribute('src', 'images/liveHeart.png');
        }
     }


     getRandomPhrase()
     {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
     }


     handleInteraction(letter)
     {
        letter.setAttribute('disabled', "");
        if (this.activePhrase.checkLetter(letter.textContent)) {
            letter.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter.textContent);
            this.checkForWin();
        } else {
            letter.classList.add('wrong');
            this.removeLife();
            this.gameOver();
        }
     }


     removeLife()
     {
        this.missed++;
        const lifes = document 
            .getElementById('scoreboard')
            .querySelector('ol')
            .children;
        lifes[this.missed - 1]
            .firstElementChild
            .setAttribute('src', 'images/lostHeart.png');
     }


     checkForWin()
     {
        let win = true;
        const spaces = document
            .getElementById('phrase')
            .querySelector('ul')
            .children;
        for (let i = 0; i < spaces.length; i++) {
            if (spaces[i].classList.contains('hide')) {
                win = false
            }
        }
        if (win) {
            document
                .getElementById('overlay')
                .style
                .display = 'flex';
            document 
                .getElementById('game-over-message')
                .textContent = "You Win!";
            this.resetGame();
        }
     }


     gameOver()
     {
        if (this.missed === 5) {
            document
                .getElementById('overlay')
                .style
                .display = 'flex';
            document 
                .getElementById('game-over-message')
                .textContent = "Game Over. Try again!";
            this.resetGame();
        }
     }
 }