function clearCanvas() {
    ctx.fillStyle = "#eee";
    ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);
}

function runRenderSystem() {
    clearCanvas();
    for (e of ecs.entities) {
        if(e.position === undefined || e.render === undefined) continue;
        ctx.fillStyle = e.render.color;
        ctx.fillRect(e.position.x, e.position.y, e.render.width, e.render.height);
    }
}