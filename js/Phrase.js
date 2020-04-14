/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase 
 {
     constructor(phrase)
     {
         this.phrase = phrase.toLowerCase();
     }


     addPhraseToDisplay()
     {
        const phraseArea = document
            .getElementById('phrase')
            .querySelector('ul');
        for (let i = 0; i < this.phrase.length; i++) {
            const space = document.createElement('li');
            if (this.phrase[i] === " ") {
                space.classList.add('space');
                space.textContent = " ";
            } else {
                space.classList.add('hide');
                space.classList.add('letter');
                space.textContent = this.phrase[i];
            }
            phraseArea.appendChild(space);
        }
     }


     checkLetter(letter)
     {
        if (this.phrase.includes(letter)) {
            return true;
        }
        return false;
     }


     showMatchedLetter(letter)
     {
         const spaces = document
            .getElementById('phrase')
            .querySelector('ul')
            .children;
        for (let i = 0; i < this.phrase.length; i++) {
            if (spaces[i].textContent === letter) {
                spaces[i].classList.remove('hide');
                spaces[i].classList.add('show');
            }
        }
     }
 }