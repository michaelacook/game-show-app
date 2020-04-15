/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase 
{

    /**
     * Set properties
     * @param {String} phrase - phrase to be used in game
     */
    constructor(phrase)
    {
        this.phrase = phrase.toLowerCase();
    }


    /**
     * Generate and append the spaces representing the phrase
     */
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


    /**
     * Determine if the clicked letter is contained in the phrase
     * @param {String} letter - textContent property of the letter button element
     * @return {Bool} true if letter is in phrase, else false
     */
    checkLetter(letter)
    {
        if (this.phrase.includes(letter)) {
            return true;
        }
        return false;
    }


    /**
     * Show all instances of the matched letter
     * For each letter in the phrase that matches the clicked letter, change its class to show
     * @param {String} letter - textContent property of the letter button element
     */
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