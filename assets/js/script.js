
document.addEventListener("DOMContentLoaded", function() {
    let outOfFive = document.getElementById("outOfTen")
    let outOfTen = document.getElementById("outOfFive")

    outOfFive.addEventListener("click", function () {
    let gameButtons = document.getElementsByClassName("gameButtons");
    
    for (let button of gameButtons) {
        button.addEventListener("click", function () {
            let userSelection1 = this.getAttribute("data-type");
            runGame(userSelection1);
        });
    }})

    outOfTen.addEventListener("click", function () {
        let gameButtons = document.getElementsByClassName("gameButtons");
        
        for (let button of gameButtons) {
            button.addEventListener("click", function () {
                let userSelection2 = this.getAttribute("data-type");
                runGame(userSelection2);
            });
        }})
})

function runGame(userSelection2,) {
    let selection = ["rock", "paper", "scissors", "lizard", "spock"];
    let userImage = document.getElementById("user-selection-image");
    let computerImage = document.getElementById("computer-selection-image");

    userImage.src = `assets/images/${selection[userSelection2]}.jpg`;
    userImage.alt = selection[userSelection2];

    let computerSelection = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${selection[computerSelection]}.jpg`;
    computerImage.alt = selection[computerSelection]

    let result = findWinner(selection[userSelection2], selection[computerSelection])

    points(result)
}

function points(result) {
    if (result === "win") {
        increaseUserScore()
    } else if (result === "lose") {
        increaseComputerScore()
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
    let currentScore1 = parseInt(document.getElementById("user-score").innerText)
    let currentScore2 = parseInt(document.getElementById("computer-score").innerText)

    let message = document.getElementById('result-message')
    
    if (currentScore2 === 10) {
        location.reload()
    } else if (currentScore1 < 9) {
        document.getElementById("user-score").innerText = ++currentScore1
        winMessage()
    } else if (currentScore1 === 10) {
        location.reload()
    } else if (currentScore1 === 9) {
        document.getElementById("user-score").innerText = ++currentScore1
        message.innerText = `You have won!`
    }
}

function increaseComputerScore() {
    let currentScore1 = parseInt(document.getElementById("user-score").innerText)
    let currentScore2 = parseInt(document.getElementById("computer-score").innerText)

    let message = document.getElementById('result-message')
    
    if (currentScore1 === 10) {
        location.reload()
    } else if (currentScore2 < 9) {
        document.getElementById("computer-score").innerText = ++currentScore2
        loseMessage()
    } else if (currentScore2 === 10) {
        location.reload()
    } else if (currentScore2 === 9) {
        document.getElementById("computer-score").innerText = ++currentScore2
        message.innerText = `You have lost!`
    }
}

function winMessage() {
    let message = document.getElementById('result-message')
    message.innerText = `You Win!`
}

function drawMessage() {
    let message = document.getElementById('result-message')
    let currentScore1 = parseInt(document.getElementById("user-score").innerText)
    let currentScore2 = parseInt(document.getElementById("computer-score").innerText)

    if (currentScore1 === 10) {
        location.reload()
    } else if (currentScore2 === 10) {
        location.reload()
    } else if (currentScore1 < 10) {
        message.innerText = `Draw!`
    } else if (currentScore2 < 10) {
        message.innerText = `Draw!`
    }
}

function loseMessage() {
    let message = document.getElementById('result-message')
    message.innerText = `You Lose!`
}
