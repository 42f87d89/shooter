var playerPos = {x: 10, y: 10};
var playerRect = {width: 10, height: 10, color: "#000"};
var playerPhysics = {velocity: {x: 0, y: 0}, acceleration: {x: 0, y: 0}};

var player = ecs.newEntity();

player.position = playerPos;
player.render = playerRect;
player.physics = playerPhysics;

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