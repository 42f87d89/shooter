function timerSystem(e) {
    if(e.timer === undefined) return;
    e.timer.lifetime += 1000/60;
    if(e.timer.lifetime > e.timer.lifespan) {
        ecs.deleteEntity(e);
    }
}