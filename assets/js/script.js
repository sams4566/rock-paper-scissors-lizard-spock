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
    if (result === "win") {
        increaseUserScore()
        winMessage()
    } else if (result === "lose") {
        increaseComputerScore()
        loseMessage()
    } else if (result === "draw") {
        drawMessage()
    } else {
        alert(`Abort`)
    }
}

function findWinner(userChoice, computerChoice) {
    if (userChoice === "rock") {
        if (computerChoice === "rock") {
            return "draw"
        } else if (computerChoice === "paper") {
            return "lose"
        } else if (computerChoice === "scissors") {
            return "win"
        } else if (computerChoice === "lizard") {
            return "win"
        } else if (computerChoice === "spock") {
            return "lose"
        } else {
            alert(`Abort`)
        }}
    if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return "win"
        } else if (computerChoice === "paper") {
            return "draw"
        } else if (computerChoice === "scissors") {
            return "lose"
        } else if (computerChoice === "lizard") {
            return "lose"
        } else if (computerChoice === "spock") {
            return "win"
        } else {
            alert(`Abort`)
        }}
    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "lose"
        } else if (computerChoice === "paper") {
            return "win"
        } else if (computerChoice === "scissors") {
            return "draw"
        } else if (computerChoice === "lizard") {
            return "win"
        } else if (computerChoice === "spock") {
            return "lose"
        } else {
            alert(`Abort`)
        }}
    if (userChoice === "lizard") {
        if (computerChoice === "rock") {
            return "lose"
        } else if (computerChoice === "paper") {
            return "win"
        } else if (computerChoice === "scissors") {
            return "lose"
        } else if (computerChoice === "lizard") {
            return "draw"
        } else if (computerChoice === "spock") {
            return "win"
        } else {
            alert(`Abort`)
        }}
    if (userChoice === "spock") {
        if (computerChoice === "rock") {
            return "win"
        } else if (computerChoice === "paper") {
            return "lose"
        } else if (computerChoice === "scissors") {
            return "win"
        } else if (computerChoice === "lizard") {
            return "lose"
        } else if (computerChoice === "spock") {
            return "draw"
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

function winMessage() {
    let message = document.getElementById('result-message')
    message.innerText = `You Win!`
}

function drawMessage() {
    let message = document.getElementById('result-message')
    message.innerText = `Draw!`
}

function loseMessage() {
    let message = document.getElementById('result-message')
    message.innerText = `You Lose!`
}
