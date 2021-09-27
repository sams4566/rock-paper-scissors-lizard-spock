let buttons = document.getElementsByTagName("button")

for (let button of buttons) {
    button.addEventListener("click", function() {
        let userSelection = this.getAttribute("data-type");
        runGame(userSelection);
    })

function runGame(userSelection) {

}