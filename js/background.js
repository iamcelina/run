const background = document.getElementById("background");

const colors = ["darkgray", "gray"];
const bWidth = 250;

var counter = 0;

function getBackground() {
    let color = colors[counter % colors.length];

    counter++;
    if (counter == colors.length) counter = 0;

    return color;
}

function drawBackground() {
    let bList = document.getElementsByClassName("background");
    let bLength = bList.length;
    let widthSum = 0;

    for (let i = 0; i < bLength; i++) {
        widthSum += bList.item(i).offsetWidth;
    }

    while (widthSum < game.offsetWidth) {
        let color = getBackground();
        let htmlString = "<div style='background:"+ color +"; width:"+ bWidth +"' class='background'></div>";
        background.innerHTML += htmlString;
        widthSum += bWidth;
    }
}

drawBackground();

function moveBackground() {
    let bList = document.getElementsByClassName("background");

    let bElement = bList.item(0);
    let width = bElement.style.width.slice(0, -2);
    bElement.style.width = width - 2;

    if (width <= 1) {
        bElement.remove();
    }
}