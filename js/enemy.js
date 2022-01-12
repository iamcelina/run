const enemy = document.getElementById("enemy");
const overlayCounter = document.getElementById("overlayCounter");

const maxWidth = 250;
const minWidth = 100;
const maxHeight = 100;
const minHeight = 10;
const colorEnemyList = ["red", "orange", "brown"];

const maxHiddenWidth = 1000;
const minHiddenWidth = 500;

var lastOpacity = 1;

function getBackground() {
    let color = colorList[counter % colorList.length];

    counter++;
    if (counter == colorList.length) counter = 0;

    return color;
}

function getEnemy() {
    let opacity;
    if (lastOpacity == 1) {
        opacity = 0;
    } else {
        opacity = Math.floor(Math.random() * 2);
    }
    lastOpacity = opacity;

    let string;
    let width;
    let height;
    let color;

    if (opacity == 0) {
        width = Math.floor(Math.random() * (maxHiddenWidth - minHiddenWidth)) + minHiddenWidth;
        string = "<div class='enemy' style='width: "+ width +"px;'></div";
    } else {
        width = Math.floor(Math.random() * (maxWidth - minWidth)) + minWidth;
        height = Math.floor(Math.random() * (maxHeight - minHeight)) + minHeight;
        color = colorEnemyList[Math.floor(Math.random() * colorEnemyList.length)];
        string = "<div class='enemy' style='" +
                 "width: "+ width +"px;" +
                 "height: "+ height +"px;" +
                 "background: "+ color +"'></div";
    }

    return string;
}

function drawEnemies() {
    let eList = document.getElementsByClassName("enemy");

    if (eList.length == 0)
        enemy.innerHTML += "<div style='width: 1000px' class='enemy'></div>";

    let widthSum = 0;
    for (let i = 0; i < eList.length; i++)
        widthSum += eList.item(i).offsetWidth;

    while (widthSum < game.offsetWidth) {
        let htmlString = getEnemy();
        enemy.innerHTML += htmlString;
        widthSum += eList.item(eList.length - 1).offsetWidth;
    }
}
drawEnemies();

function moveEnemies() {
    let eList = document.getElementsByClassName("enemy");
    let eElement = eList.item(0);
    let width = eElement.style.width.slice(0, -2);

    eElement.style.width = width - 2;

    if (width <= 100) {
        if (eList.item(1).offsetHeight > 0) {
            let playerHeight = getComputedStyle(player).getPropertyValue("bottom").slice(0, -2);

            if (playerHeight < eList.item(1).offsetHeight) {
                reload();
            }
        }
    }

    if (eElement.offsetHeight > 0 && width >= 100) {
        let playerHeight = getComputedStyle(player).getPropertyValue("bottom").slice(0, -2);
    
        if (playerHeight < eElement.offsetHeight) {
            reload();
        }
    }

    if (width <= 1) {
        if (eElement.offsetHeight >= 1) {
            overlayCounter.innerText = Number.parseInt(overlayCounter.innerText) + 1;
        }
        eElement.remove();
    }
}