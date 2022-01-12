const player = document.getElementById("player");
var movementActive = false;
var movementInterval;

function movePlayer() {
    let countForward = true;
    let positionCounter = 0;
    let timeCounter = 0;

    movementInterval = setInterval(() => {
        timeCounter++;
        setTimeout(() => {
            if (positionCounter >= upperLimitBody && countForward) {
                countForward = false;
                timeCounter = 0;
            } else if (positionCounter <= 0 && !countForward) {
                clearInterval(movementInterval);
                movementActive = false;
            } else {
                positionCounter = count(positionCounter, countForward);
                player.style.bottom = positionCounter;
            }
        });
    });
}

function swapPlayerSprite() {

}
