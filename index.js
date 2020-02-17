// Working on the browser with prompt
const outcomes = ['Rock', 'Paper', 'Scissors'];
const computerPlay = outcomes[Math.floor(Math.random() * outcomes.length)];
var playerPlay = prompt("What is your play?");

function theGame(playerPlay, computerPlay) {
    if(playerPlay === computerPlay) {
        return "It's a draw!";
    }
    else if (playerPlay === 'Rock' && computerPlay === 'Scissors') {
        return "K.O!";
    }
    else if (playerPlay === 'Scissors' && computerPlay === 'Paper') {
        return "Cut down!!";
    }
    else if (playerPlay === 'Paper' && computerPlay === 'Rock') {
        return "Fully covered!!";
    }
    else {
        return "Computers run the world!"
    }
}
 

console.log(theGame(playerPlay, computerPlay));