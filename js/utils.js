const game = document.getElementById("game");

const upperLimitBody = 200;
const quarterLimit = upperLimitBody / 4;

function count(counter, direction) {
    switch (direction) {
        case true:
            counter += getVelocity(counter);
            return counter;
        case false:
            counter -= getVelocity(counter);
            return counter;
    }
}

function getVelocity(counter) {
    if (counter < quarterLimit)
        return 4

    else if (counter < quarterLimit*2)
        return 3

    else if (counter < quarterLimit*3)
        return 2

    else
        return 1
}

function swapBool(bool) {
    switch (bool) {
        case true:
            return false;
        case false:
            return true;
    }
}