var startButton = document.getElementById("startgame");

var backgroundStartUp = document.getElementById("startUpBackground");
var messageContainer = document.getElementById("startUp");

function startGame() {
    backgroundStartUp.style.opacity = 0;
    messageContainer.style.height = 0;

    setTimeout(() => {
        backgroundStartUp.style.display = "none";
        messageContainer.style.display = "none";
    }, 500);
}