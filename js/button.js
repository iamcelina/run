const button = document.getElementById("button");
const buttonText = document.getElementById("buttonText");
var gameInterval;

function reload() {
    clearInterval(movementInterval);
    clearInterval(gameInterval);
    button.className = "restart";
    buttonText.innerText = "Restart";
    buttonText.style.opacity = 1;
}

function buttonEvent() {
    if (button.className == "start")
    {
        buttonText.style.opacity = 0;
        button.className = "play";
        gameInterval = setInterval(_ => {
            drawEnemies();
            drawBackground();
            moveBackground();
            moveEnemies();
        });
    }
    
    else if (button.className == "restart")
    {
        movementActive = false;
        button.className = "start";
        player.style.bottom = 0;
        buttonText.innerText = "Start";
        enemy.innerHTML = "";
        drawEnemies();
        overlayCounter.innerText = 0;
    }
    
    else
    {
        if (movementActive == false)
        {
            movementActive = true;
            movePlayer();
        }
    }
}

addEventListener("keypress", e => {
    if (e.key == " ")
    {
        buttonEvent();
    }
});

button.onclick = () => buttonEvent();
window.onresize = () => {
    drawBackground();
    drawEnemies();
}