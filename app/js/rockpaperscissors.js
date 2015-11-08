////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
     return move || getInput();
}

function getComputerMove(move) {
     return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if ((playerMove == 'rock' && computerMove == 'scissors') || 
        (playerMove == 'scissors' && computerMove == 'paper') || 
        (playerMove == 'paper' && computerMove == 'rock'))
        winner = 'player';
    else if (playerMove == computerMove)
        winner = 'tie';
    else
        winner = 'computer'
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while(playerWins < 5 && computerWins < 5)
    {
        var play = getPlayerMove();
        var comp = getComputerMove();
        var win = getWinner(play, comp);
        if (win ==='player')
        {
            playerWins++;
        }
        else if (win === 'computer')
        {
            computerWins++;
        }
        console.log('Player chose ' + play + ' while Computer chose ' + comp);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
}

