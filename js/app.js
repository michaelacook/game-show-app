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

const game = new Game(phrases);
const startBtn = document.getElementById('btn__reset');


// start the game when start button clicked
startBtn.addEventListener('click', e => {
    game.startGame();
});


// listen for click event, pass letter button to handleInteraction
document.getElementById('qwerty').addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});


// listen for keydown event, get the letter button corresponding to the key pressed, pass it to handleInteraction
document.addEventListener('keydown', e => {
    const validLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
                          'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
                          'u', 'v', 'w', 'x', 'y', 'z'];
    const key = String.fromCharCode(e.keyCode).toLowerCase();
    if (validLetters.includes(key)) {
        const keys = document.querySelectorAll('.key');
        const letter = Array.from(keys)
            .find(el => el.textContent === key);
        game.handleInteraction(letter);
    }
});
