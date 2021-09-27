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