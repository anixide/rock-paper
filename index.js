// Working on the browser with prompt



var i = 0;
while ( i < 5) {
        const outcomes = ['Rock', 'Paper', 'Scissors'];
        const computerPlay = outcomes[Math.floor(Math.random() * outcomes.length)];
        var playerPlay = prompt("What is your play?");
    function playRound(playerPlay, computerPlay) {
    
        if(playerPlay === computerPlay) {
            return "It's a draw!";
        }
        else if (playerPlay === 'Rock' && computerPlay === 'Scissors') {
            return "K.O! Rock smashes Scissors";
        }
        else if (playerPlay === 'Scissors' && computerPlay === 'Paper') {
            return "Cut down!! Scissors cuts Paper";
        }
        else if (playerPlay === 'Paper' && computerPlay === 'Rock') {
            return "Fully covered!! Paper covered Rock";
        }
        else {
            return "Computers run the world!"
        }
    
    }
console.log(playRound(playerPlay, computerPlay));
i++;

}



