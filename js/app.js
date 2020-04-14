/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const phrases = [
    new Phrase("Live and let live"),
    new Phrase("Coding is life"),
    new Phrase("Workers of the world unite"),
];

const startBtn = document.getElementById('btn__reset');
const game = new Game(phrases);

startBtn.addEventListener('click', e => {
    game.startGame();
});

document.getElementById('qwerty').addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});
