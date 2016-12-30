var playerPos = {x: canvasSize.width/2, y: canvasSize.height/2};
var playerRect = {width: 10, height: 10, color: "#000"};
var playerPhysics = {velocity: {x: 0, y: 0}, acceleration: {x: 0, y: 0}, topSpeed: 5};

var player = ecs.newEntity();

player.position = playerPos;
player.render = playerRect;
player.physics = playerPhysics;

function playerInput() {
    if(keyStates['w'] && !keyStates['s']) {
        player.physics.acceleration.y = -0.3;
    } else if(keyStates['s'] && !keyStates['w']) {
        player.physics.acceleration.y = 0.3;
    } else {
        player.physics.acceleration.y = 0;
    }

    if(keyStates['a'] && !keyStates['d']) {
        player.physics.acceleration.x = -0.3;
    } else if(keyStates['d'] && !keyStates['a']) {
        player.physics.acceleration.x = 0.3;
    } else {
        player.physics.acceleration.x = 0;
    }

    if(mouseClicks.left) {
        fireBullet();
    }
}

function fireBullet() {
    var dist = Math.sqrt(Math.pow(player.position.x-mousePos.x, 2)+Math.pow(player.position.y-mousePos.y, 2));
    if(dist < 0.1) return;

    var bullet = ecs.newEntity();
    bullet.position = {x: player.position.x, y: player.position.y};
    bullet.physics = {
        velocity: {x: 5*mousePos.x/dist, y: 5*mousePos.y/dist},
        acceleration: {x: 0, y: 0},
    }
    bullet.render = {width: 5, height: 5, color: "#00e"};
}