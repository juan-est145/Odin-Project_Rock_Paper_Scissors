function getComputerChoice()
{
    const array_of_plays = ["Rock", "Paper", "Scissors"];
    let select_item = Math.floor(Math.random() * 3);
    if (select_item > 2)
        select_item = 2;
    return (array_of_plays[select_item]);
}

console.log(getComputerChoice());