/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const phrases = [
    new Phrase("Live and let live"),
    new Phrase("Coding is life"),
    new Phrase("No pain no gain"),
    new Phrase("actions speak louder than words"),
    new Phrase("Curiosity killed the cat")
];

let game;

/* validLetters and validLettersCopy are for validating keyboard input
and prevent more than one use of a key */
const validLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
                          'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
                          'u', 'v', 'w', 'x', 'y', 'z'];
let validLettersCopy = [...validLetters];


// start the game when start button clicked
document.getElementById('btn__reset').addEventListener('click', e => {
    game = new Game(phrases);
    game.startGame();
    // reset validLettersCopy each time game is started
    validLettersCopy = [...validLetters];
});


// listen for click event, pass letter button to handleInteraction
document.getElementById('qwerty').addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});


// listen for keydown event, get the letter button corresponding to the key pressed, pass it to handleInteraction
document.addEventListener('keydown', e => {
    const key = String.fromCharCode(e.keyCode).toLowerCase();
    if (validLettersCopy.includes(key)) {
        const keys = document.querySelectorAll('.key');
        const letter = Array.from(keys)
            .find(el => el.textContent === key);
        // remove the letter from validLetterCopy array to prevent multiple uses of the letter
        validLettersCopy.splice(validLettersCopy.indexOf(key), 1);
        game.handleInteraction(letter);
    }
});
