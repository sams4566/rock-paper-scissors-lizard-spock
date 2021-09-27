let buttons = document.getElementsByTagName("button");
let selection = ["rock", "paper", "scissors", "lizard", "spock"];
let userImage = document.getElementById("user-selection-image");
let computerImage = document.getElementById("computer-selection-image");

for (let button of buttons) {
    button.addEventListener("click", function () {
        let userSelection = this.getAttribute("data-type");
        runGame(userSelection);
    });
}

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
    if (result === "winner") {
        increaseUserScore()
        winnerMessage()
    } else if (result === "draw") {
        drawMessage()
    } else if (result === "lose") {
        increaseComputerScore()
        loseMessage()
    } else {
        alert(`Abort`)
    }
}

function findWinner(userChoice, computerChoice) {
    if (userChoice === "rock") {
        if (computerChoice === "rock") {
            return "winner"
        } else if (computerChoice === "paper") {
            alert("You lose!");
        } else if (computerChoice === "scissors") {
            return winner
        } else if (computerChoice === "lizard") {
            return winner
        } else if (computerChoice === "spock") {
            alert("You lose!");
        } else {
            alert(`Abort`)
        }}
    if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return "winner"
        } else if (computerChoice === "paper") {
            alert("You lose!");
        } else if (computerChoice === "scissors") {
            return winner
        } else if (computerChoice === "lizard") {
            return winner
        } else if (computerChoice === "spock") {
            alert("You lose!");
        } else {
            alert(`Abort`)
        }}
}

function increaseUserScore() {
    let currentScore = parseInt(document.getElementById("user-score").innerText)
    document.getElementById("user-score").innerText = ++currentScore
}

function increaseComputerScore() {
    let currentScore = parseInt(document.getElementById("computer-score").innerText)
        document.getElementById("computer-score").innerText = ++currentScore
}

function winnerMessage() {
    let message = document.getElementById('result-message')
    message.innerText = `You Win!`
}

function drawMessage() {
    let message = document.getElementById('result-message')
    message.innerText = `You Lose!`
}

function loseMessage() {
    let message = document.getElementById('result-message')
    message.innerText = `It's a draw`
}
