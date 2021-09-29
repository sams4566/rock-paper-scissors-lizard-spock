/*jshint esversion: 6 */

/**
 * Starts off by removing the game options when the user
 * clicks on their choice. The code then splits off into
 * two streams, one for each game.
 */

 document.addEventListener("DOMContentLoaded", function() {
    let outOfFive = document.getElementById("outOfFive");
    let outOfTen = document.getElementById("outOfTen");

    outOfFive.addEventListener("click", function () {
    let gameButtons = document.getElementsByClassName("gameButtons");

    outOfFive.remove();
    outOfTen.remove();
    chooseMessage();

    for (let button of gameButtons) {
        button.addEventListener("click", function () {
            let userSelection1 = this.getAttribute("data-type");
            runGame1(userSelection1);
        });
    }});

    outOfTen.addEventListener("click", function () {
    let gameButtons = document.getElementsByClassName("gameButtons");

    outOfFive.remove();
    outOfTen.remove();
    chooseMessage();

    for (let button of gameButtons) {
        button.addEventListener("click", function () {
            let userSelection2 = this.getAttribute("data-type");
            runGame2(userSelection2);
        });
    }});
});

/**
 * Message directing the user to click either rock, paper, scissors etc 
 * after they have chosen their game option.
 */

function chooseMessage() {
    let chooseMessage = document.getElementById("info-message");
    chooseMessage.innerText = `Choose below to start`;
}

/**
 * Changes the image for the user and computers selections for the 
 * 'First to 5' game
 */

function runGame1(userSelection1) {
    let selection = ["rock", "paper", "scissors", "lizard", "spock"];
    let userImage = document.getElementById("user-selection-image");
    let computerImage = document.getElementById("computer-selection-image");

    userImage.src = `assets/images/${selection[userSelection1]}.jpg`;
    userImage.alt = selection[userSelection1];

    let computerSelection = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${selection[computerSelection]}.jpg`;
    computerImage.alt = selection[computerSelection];

    let result1 = findWinner(selection[userSelection1], selection[computerSelection]);

    points1(result1);
}

/**
 * Changes the image for the user and computers selections for the 
 * 'First to 10' game
 */

function runGame2(userSelection2) {
    let selection = ["rock", "paper", "scissors", "lizard", "spock"];
    let userImage = document.getElementById("user-selection-image");
    let computerImage = document.getElementById("computer-selection-image");

    userImage.src = `assets/images/${selection[userSelection2]}.jpg`;
    userImage.alt = selection[userSelection2];

    let computerSelection = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${selection[computerSelection]}.jpg`;
    computerImage.alt = selection[computerSelection];

    let result2 = findWinner(selection[userSelection2], selection[computerSelection]);

    points2(result2);
}

/**
 * Works out whether the user or computer has won the point for
 * both game options
 */

function findWinner(userChoice, computerChoice) {
    if (userChoice === "rock") {
        if (computerChoice === "rock") {
            return "draw";
        } else if (computerChoice === "paper") {
            return "lose";
        } else if (computerChoice === "scissors") {
            return "win";
        } else if (computerChoice === "lizard") {
            return "win";
        } else if (computerChoice === "spock") {
            return "lose";
        } else {
            alert(`Abort`);
        }}
    if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return "win";
        } else if (computerChoice === "paper") {
            return "draw";
        } else if (computerChoice === "scissors") {
            return "lose";
        } else if (computerChoice === "lizard") {
            return "lose";
        } else if (computerChoice === "spock") {
            return "win";
        } else {
            alert(`Abort`);
        }}
    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "lose";
        } else if (computerChoice === "paper") {
            return "win";
        } else if (computerChoice === "scissors") {
            return "draw";
        } else if (computerChoice === "lizard") {
            return "win";
        } else if (computerChoice === "spock") {
            return "lose";
        } else {
            alert(`Abort`);
        }}
    if (userChoice === "lizard") {
        if (computerChoice === "rock") {
            return "lose";
        } else if (computerChoice === "paper") {
            return "win";
        } else if (computerChoice === "scissors") {
            return "lose";
        } else if (computerChoice === "lizard") {
            return "draw";
        } else if (computerChoice === "spock") {
            return "win";
        } else {
            alert(`Abort`);
        }}
    if (userChoice === "spock") {
        if (computerChoice === "rock") {
            return "win";
        } else if (computerChoice === "paper") {
            return "lose";
        } else if (computerChoice === "scissors") {
            return "win";
        } else if (computerChoice === "lizard") {
            return "lose";
        } else if (computerChoice === "spock") {
            return "draw";
        } else {
            alert(`Abort`);
        }}
}

/**
 * The result is processed through the below function which leads
 * to separate functions for each game depending on the outcome
 */

function points1(result1) {
    if (result1 === "win") {
        increaseUserScore1();
    } else if (result1 === "lose") {
        increaseComputerScore1();
    } else if (result1 === "draw") {
        drawMessage1();
    } else {
        alert(`Abort`);
    }
}

function points2(result2) {
    if (result2 === "win") {
        increaseUserScore2();
    } else if (result2 === "lose") {
        increaseComputerScore2();
    } else if (result2 === "draw") {
        drawMessage2();
    } else {
        alert(`Abort`);
    }
}

/**
 * The scores are increased for the 'First to 5' game depending on the players previous 
 * score and the game is reloaded once a winner is established
 */

function increaseUserScore1() {
    let currentScore1 = parseInt(document.getElementById("user-score").innerText);
    let currentScore2 = parseInt(document.getElementById("computer-score").innerText);

    let message = document.getElementById('info-message');
    if (currentScore2 === 5) {
        location.reload();
    } else if (currentScore1 < 4) {
        document.getElementById("user-score").innerText = ++currentScore1;
        winMessage();
    } else if (currentScore1 === 5) {
        location.reload();
    } else if (currentScore1 === 4) {
        document.getElementById("user-score").innerText = ++currentScore1;
        message.innerText = `You win!`;
    } else {
        alert(`Abort`);
    }
}

function increaseComputerScore1() {
    let currentScore1 = parseInt(document.getElementById("user-score").innerText);
    let currentScore2 = parseInt(document.getElementById("computer-score").innerText);

    let message = document.getElementById('info-message');
    
    if (currentScore1 === 5) {
        location.reload();
    } else if (currentScore2 < 4) {
        document.getElementById("computer-score").innerText = ++currentScore2;
        loseMessage();
    } else if (currentScore2 === 5) {
        location.reload();
    } else if (currentScore2 === 4) {
        document.getElementById("computer-score").innerText = ++currentScore2;
        message.innerText = `Computer Wins!`;
    } else {
        alert(`Abort`);
    }
}

/**
 * If the result is a draw for the 'First to 5' game a message is displayed highlighting this 
 */

function drawMessage1() {
    let message = document.getElementById('info-message');
    let currentScore1 = parseInt(document.getElementById("user-score").innerText);
    let currentScore2 = parseInt(document.getElementById("computer-score").innerText);

    if (currentScore1 === 5) {
        location.reload();
    } else if (currentScore2 === 5) {
        location.reload();
    } else if (currentScore1 < 5) {
        message.innerText = `Draw!`;
    } else if (currentScore2 < 5) {
        message.innerText = `Draw!`;
    } else {
        alert(`Abort`);
    }
}

/**
 * The scores are increased for the 'First to 10' game depending on the players previous 
 * score and the game is reloaded once a winner is established
 */

function increaseUserScore2() {
    let currentScore1 = parseInt(document.getElementById("user-score").innerText);
    let currentScore2 = parseInt(document.getElementById("computer-score").innerText);
    let message = document.getElementById('info-message');

    if (currentScore2 === 10) {
        location.reload();
    } else if (currentScore1 < 9) {
        document.getElementById("user-score").innerText = ++currentScore1;
        winMessage();
    } else if (currentScore1 === 10) {
        location.reload();
    } else if (currentScore1 === 9) {
        document.getElementById("user-score").innerText = ++currentScore1;
        message.innerText = `You Win!`;
    } else {
        alert(`Abort`);
    }
}

function increaseComputerScore2() {
    let currentScore1 = parseInt(document.getElementById("user-score").innerText);
    let currentScore2 = parseInt(document.getElementById("computer-score").innerText);
    let message = document.getElementById('info-message');
    
    if (currentScore1 === 10) {
        location.reload();
    } else if (currentScore2 < 9) {
        document.getElementById("computer-score").innerText = ++currentScore2;
        loseMessage();
    } else if (currentScore2 === 10) {
        location.reload();
    } else if (currentScore2 === 9) {
        document.getElementById("computer-score").innerText = ++currentScore2;
        message.innerText = `Computer Wins!`;
    } else {
        alert(`Abort`);
    }
}

/**
 * If the result is a draw for the 'First to 10' game a message is displayed highlighting this 
 */

function drawMessage2() {
    let message = document.getElementById('info-message');
    let currentScore1 = parseInt(document.getElementById("user-score").innerText);
    let currentScore2 = parseInt(document.getElementById("computer-score").innerText);

    if (currentScore1 === 10) {
        location.reload();
    } else if (currentScore2 === 10) {
        location.reload();
    } else if (currentScore1 < 10) {
        message.innerText = `Draw!`;
    } else if (currentScore2 < 10) {
        message.innerText = `Draw!`;
    } else {
        alert(`Abort`);
    }
}

/**
 * Functions for when the user wins or loses a point
 */

function winMessage() {
    let message = document.getElementById('info-message');
    message.innerText = `Well done!`;
}

function loseMessage() {
    let message = document.getElementById('info-message');
    message.innerText = `Unlucky`;
}