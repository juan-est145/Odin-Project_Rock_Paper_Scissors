function getComputerChoice()
{
    const arrayOfPlays = ["Rock", "Paper", "Scissors"];
    let selectItem = Math.floor(Math.random() * 3);

    if (selectItem > 2)
        selectItem = 2;
    return (arrayOfPlays[selectItem].toUpperCase());
}

function getPlayerSelection()
{
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Choose rock, paper or scissors").toUpperCase();
    let scores = [0,0];

    determineWinner(playerSelection, computerSelection);
    if (scores[0] > scores[1])
        console.log("Player wins the game");
    else if (scores[0] < scores[1])
        console.log("Player loses the game");
    else
        console.log("The game ends in a row");

}

function determineWinner(playerSelection, computerSelection, scores)
{
    for (let index = 0; index <= 5; index++) 
    {
        if (playerSelection === "ROCK")
        {
            if (computerSelection === "SCISSORS")
            {
                console.log("You win, Rock beats Scissors");
                scores[0]++;
            }
                
            else if (computerSelection === "PAPER")
            {
                console.log("You lose, Paper beats Rock");
                scores[1]++;
            }
                
            else
                console.log("Draw");
        }
        else if (playerSelection === "PAPER")
        {
            if (computerSelection === "ROCK")
            {
                console.log("You win, Paper beats Rock");
                scores[0]++;
            }
                
            else if (computerSelection === "SCISSORS")
            {
                console.log("You lose, Scissors beats Paper");
                scores[1]++;
            }
                
            else
                console.log("Draw");
        }
        else
        {
            if (computerSelection === "PAPER")
            {
                console.log("You win, Scissors beats Paper");
                scores[0]++;
            }
                
            else if (computerSelection === "ROCK")
            {
                console.log("You lose, Rock beats Scissors");
                scores[1]++;
            }
                
            else
                console.log("Draw");
        }
    }
    
}

getPlayerSelection();

//console.log(getComputerChoice());