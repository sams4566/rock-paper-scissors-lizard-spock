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

function findWinner(userChoice, computerChoice) {
    let userChoice = user-selection-image.getAttribute('alt')
    let computerChoice = computer-selection-image.getAttribute('alt')

    if (userChoice === "rock") {
        if (computerChoice === "rock") {
            alert("You win!");
            increaseUserScore();
        } else if (computerChoice === "paper") {
            alert("You lose!")
            increaseComputerScore();
        } else if (computerChoice === "scissors") {
            alert("You win!");
            increaseUserScore();
        } else if (computerChoice === "lizard") {
            alert("You win!");
            increaseUserScore();
        } else if (computerChoice === "spock") {
            alert("You lose!")
            increaseComputerScore();
        } else {
            alert(`Abort`)
            throw `Aborting!`;
        }
    } else {
        alert(`Abort`)
        throw `Aborting!`;
    }
}

function increaseUserScore() {
    let currentScore = parseInt(document.getElementById("user-score").innerText)
        ++currentScore = document.getElementById("user-score").innerText;
}

function increaseComputerScore() {
    let currentScore = document.getElementById("computer-score").innerText
        ++currentScore = document.getElementById("computer-score").innerText;
}