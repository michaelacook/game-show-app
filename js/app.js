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
