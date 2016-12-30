window.onload = function() {
    init();
    window.setInterval(() => {main()}, 1000/60);
};

var ctx;
var canvasSize = {width: 600, height: 400}

function init() {
    var cvs = document.createElement("canvas");
    cvs.id = "cvs";
    cvs.width = canvasSize.width;
    cvs.height = canvasSize.height;
    addListeners(cvs);

    ctx = cvs.getContext("2d");
    ctx.fillStyle = "#eee";
    ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);
    document.getElementById("main").appendChild(cvs);
}

var listeners = [
    {evt: "mousemove", fun: m},
    {evt: "mousedown", fun: mouseDown},
    {evt: "mouseup", fun: mouseUp},
    {evt: "keydown", fun: keydowns},
    {evt: "keyup", fun: keyups}
];

function addListeners(cvs) {
    cvs.onclick = function() {
        cvs.requestPointerLock();
    }
    window.addEventListener("pointerlockchange", (e) => {
        if (document.pointerLockElement === cvs) {
            for (l of listeners) {
                window.addEventListener(l.evt, l.fun, false);
            }
            paused = false;
        } else {
            for (l of listeners) {
                window.removeEventListener(l.evt, l.fun, false);
            }
            paused = true;
        }
    }, false)
}

function m(e) {
    mousePos.x += e.movementX;
    if(mousePos.x > canvasSize.width) mousePos.x = canvasSize.width;
    else if(mousePos.x < 0) mousePos.x = 0;
    mousePos.y += e.movementY;
    if(mousePos.y > canvasSize.height) mousePos.y = canvasSize.height;
    else if(mousePos.y < 0) mousePos.y = 0;
};

function keyups(e) {
    keyStates[e.key] = false;
}

function keydowns(e) {
    e.preventDefault();
    keyStates[e.key] = true;
}

function mouseDown(e) {
    if(e.button == 0) {
        mouseClicks.left = true;
    } else if(e.button == 2) {
        mouseClicks.right = true;
    }
}

function mouseUp(e) {
    if(e.button == 0) {
        mouseClicks.left = false;
    } else if(e.button == 2) {
        mouseClicks.right = false;
    }
}

function main() {
    playerInput();
    runPhysicsSystem();
    runRenderSystem();
    runTimerSystem();
}

var paused = false;

var keyStates = {};
var mousePos = {x: canvasSize.width/2, y: canvasSize.height/2};
var mouseClicks = {};
var mouse = ecs.newEntity();
mouse.position = mousePos;
mouse.render = {width: 4, height: 4, color: "#e00"}