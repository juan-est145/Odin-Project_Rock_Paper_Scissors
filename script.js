const   playerButtons = document.querySelector("#ButtonsContainer");
playerButtons.addEventListener("click", clickButton);

//scores[0] corresponds to the player and scores[1] corresponds to the computer
let scores = [0,0];

function    clickButton(event)
{
    if (event.target.classList.contains("Rock"))
       playRound("🗿");
    else if (event.target.classList.contains("Paper"))
       playRound("📰");
    else if (event.target.classList.contains("Scissors"))
        playRound("✂️");
}

function getComputerChoice()
{
    const arrayOfPlays = ["🗿", "📰", "✂️"];
    let selectItem = Math.floor(Math.random() * 3);

    if (selectItem > 2)
        selectItem = 2;
    return (arrayOfPlays[selectItem]);
}

function playRound(playerSelection)
{
    const   playerOptionDisplay = document.querySelector(".PlayerChoice");
    const   computerOptionDisplay = document.querySelector(".CpuChoice");
    let     computerChoice = getComputerChoice();
    
    playerOptionDisplay.textContent = playerSelection;
    computerOptionDisplay.textContent = computerChoice;
    determineWinner(playerSelection, computerChoice);
    if (scores[0] >= 5 || scores[1] >= 5)
    {
        playerButtons.removeEventListener("click", clickButton);
        const   winnerOfGame = document.querySelector("#WinnerOfRound");
        if (scores[0] > scores[1])
            winnerOfGame.textContent = "You have won the game 🥳🥳🥳";
        else if ((scores[0] < scores[1]))
            winnerOfGame.textContent = "You have lost the game 😢😢😢";
        activateRetryButton();
    }
}

function determineWinner(playerSelection, computerSelection)
{
    const   pWinnerOfRound = document.querySelector("#WinnerOfRound");
    const   playerScore = document.querySelector(".PlayerScore");
    const   cpuScore = document.querySelector(".CPUScore");
    const   plays = 
    {
        "🗿": {weakTo: "📰", strongTo: "✂️"},
        "📰": {weakTo: "✂️", strongTo: "🗿"},
        "✂️": {weakTo: "🗿", strongTo: "📰"}
    } 
    if (plays[playerSelection].strongTo === computerSelection)
    {
        pWinnerOfRound.textContent = `You win this round, ${playerSelection} beats ${computerSelection}`;
        scores[0]++;
        playerScore.textContent = scores[0].toString();
    }
    else if (plays[playerSelection].weakTo === computerSelection)
    {
        pWinnerOfRound.textContent = `You lose this round, ${computerSelection} beats ${playerSelection}`;
        scores[1]++;
        cpuScore.textContent = scores[1].toString();
    }
    else
    pWinnerOfRound.textContent = "Draw";
}

function activateRetryButton()
{
    const   retryButton = document.querySelector("#TryAgain");
    retryButton.style.display = "inline";
    retryButton.addEventListener("click", ()=>
    {
        location.reload();
    });
}
