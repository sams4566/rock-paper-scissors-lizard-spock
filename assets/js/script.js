let buttons = document.getElementsByTagName("button");
let selection = ["rock", "paper", "scissors", "lizard", "spock"];
let userImage = document.getElementById("user-selection-image");
let computerImage = document.getElementById("computer-selection-image");

for (let button of buttons) {
    button.addEventListener("click", function() {
        let userSelection = this.getAttribute("data-type");
        runGame(userSelection);
    })

function runGame(userSelection) {
    userImage.src = `assets/images/${selection[userSelection]}.jpg`;
    userImage.alt = selection[userSelection];

    let computerSelection = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${selection[computerSelection]}.jpg`;
    computerImage.alt = selection[computerSelection]

    let result = findWinner(selection[userSelection], selection[computerSelection])

    points(result)
}

function points(result) {
    function findWinner(selection[userSelection], selection[computerSelection]) {
        if (selection[userSelection] === "rock") {
            if (computerSelection === "rock") {
                return [alert("You win!")];
                increaseUserScore();
            } else if (computerSelection === "paper") {
                return [alert("You lose!")];
                increaseComputerScore();
            } else if (computerSelection === "scissors") {
                return [alert("You win!")];
                increaseUserScore();
            } else if (computerSelection === "lizard") {
                return [alert("You win!")];
                increaseUserScore();
            } else if (computerSelection === "spock") {
                return [alert("You lose!")];
                increaseComputerScore();
            } else {
                alert(`Unimplemented operator ${operator}`)
                throw `Unimplemented operator ${operator}. Aborting!`;
            }}
    let winner = 
}

function increaseUserScore() {
    let currentScore = parseInt(document.getElementById("user-score").innerText)
    ++currentScore = document.getElementById("user-score").innerText;
}

function increaseComputerScore() {
    let currentScore = document.getElementById("computer-score").innerText
    ++currentScore = document.getElementById("computer-score").innerText;
}