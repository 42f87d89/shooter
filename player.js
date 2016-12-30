var playerPos = {x: 10, y: 10};
var playerRect = {width: 10, height: 10};

function playerMove() {
    if(keyStates['w']) {
        playerPos.y += -5;
    }
    if(keyStates['s']) {
        playerPos.y += 5;
    }
    if(keyStates['a']) {
        playerPos.x += -5;
    }
    if(keyStates['d']) {
        playerPos.x += 5;
    }
}

function playerRender() {
    ctx.fillStyle = "#000";
    ctx.fillRect(playerPos.x, playerPos.y, playerRect.width, playerRect.height);
}