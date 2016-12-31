function clearCanvas() {
    ctx.fillStyle = "#eee";
    ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);
}

function renderSystem(e) {
    clearCanvas();
    if(e.position === undefined || e.render === undefined) return;
    ctx.fillStyle = e.render.color;
    ctx.fillRect(e.position.x, e.position.y, e.render.width, e.render.height);
}