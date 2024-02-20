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
    //scores[0] corresponds to the player and scores[1] corresponds to the computer
    let scores = [0,0];
    for (let index = 0; index < 5; index++) 
    {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Choose rock, paper or scissors").toUpperCase();
        determineWinner(playerSelection, computerSelection, scores);
    }
    if (scores[0] > scores[1])
        console.log("Player wins the game");
    else if (scores[0] < scores[1])
        console.log("Player loses the game");
    else
        console.log("The game ends in a draw");

}

function determineWinner(playerSelection, computerSelection, scores)
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

const   playerButtons = document.querySelector("#ButtonsContainer");
playerButtons.addEventListener("click", (e) =>
{
    if (e.target.classList.contains("Rock"))
        console.log("Rock");
    else if (e.target.classList.contains("Paper"))
        console.log("Paper");
    else if (e.target.classList.contains("Scissors"))
        console.log("Scissors");
});

//getPlayerSelection();
