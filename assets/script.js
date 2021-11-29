// TODO: improve javascript structure

let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            console.log("USER WINS");
            result_p.innerText = "User wins";
            userScore++;
            userScore_span.innerText = userScore;
            break;
        case "rp":
        case "ps":
        case "sr":
            console.log("COMPUTER WINS");
            result_p.innerText = "Computer wins";
            computerScore++;
            computerScore_span.innerText = computerScore;
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("It's a draw");
            result_p.innerText = "Draw";
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => {
        game("r");
    });

    paper_div.addEventListener('click', () => {
        game("p");
    });

    scissors_div.addEventListener('click', () => {
        game("s");
    });
}

main();
