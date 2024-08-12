function rock(choice)
{
    if(choice === "paper")
    {
        return 1;
    }
    else if(choice === "scissors")
    {
        return -1;
    }
    else
    {
        return 0;
    }
}

function paper(choice)
{
    if(choice === "scissors")
    {
        return 1;
    }
    else if(choice === "rock")
    {
        return -1;
    }
    else
    {
        return 0;
    }
}

function scissors(choice)
{
    if(choice === "rock")
    {
        return 1;
    }
    else if(choice === "paper")
    {
        return -1;
    }
    else
    {
        return 0;
    }
}


function getCompChoice()
{
    let ans = Math.floor((Math.random() * 3) + 1);
    if(ans === 1)
    {
        return "Rock";
    }
    else if(ans === 2)
    {
        return "Paper";
    }
    else
    {
        return "Scissors";
    }
}

function getHumanChoice()
{
    let choice = window.prompt("Rock Paper Scissors?", "Rock");
    return choice.toLowerCase();
}

let humanScore = 0;
let compScore = 0;
const track = document.getElementById("track");

function playRound(humanChoice, compChoice)
{
    let win;
    if(compChoice === "Rock")
    {
        console.log(`rock`);
        win = rock(humanChoice);
    }
    else if(compChoice === "Paper")
    {
        console.log(`paper`);
        win = paper(humanChoice);
    }
    else
    {
        console.log(`scissors`);
        win = scissors(humanChoice);
    }

    if(win === 1)
    {
        let line = `You win! ${humanChoice} beats ${compChoice}!` + `\n`;
        track.textContent += line;
        console.log(line);
        humanScore++;
    }
    else if(win === -1)
    {
        let line = `You lose! ${compChoice} beats ${humanChoice}!` + `\n`
        track.textContent += line;
        console.log(line);
        compScore++;
    }
    else
    {
        let line = `Its a tie! Both picked ${compChoice}!` + `\n`;
        track.textContent += line;
        console.log(line);
    }
}

function playGame()
{
    let rounds = 0;
    while(rounds < 5)
    {      
        let humanSelection = getHumanChoice();
        let compSelection = getCompChoice();

        playRound(humanSelection, compSelection);

        hScore = `Human Score: ${humanScore}`;
        cScore = `Computer Score ${compScore}`;

        document.getElementById("humanScore").innerHTML = hScore;
        document.getElementById("compScore").innerHTML = cScore;

        rounds++;
    }
}

playGame();

