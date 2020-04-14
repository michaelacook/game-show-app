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

startBtn.addEventListener('click', e => {
    game.startGame();
});

document.getElementById('qwerty').addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});


// listen for keydown event, get the letter button corresponding to the key pressed, pass it to handleInteraction
document.addEventListener('keydown', e => {
    const keys = document.querySelectorAll('.key');
    const letter = Array.from(keys)
        .find(el => el.textContent === String.fromCharCode(e.keyCode).toLowerCase());
    game.handleInteraction(letter);
});
