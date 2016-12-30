function runTimerSystem() {
    for (e of ecs.entities) {
        if(e.timer === undefined) continue;
        e.timer.lifetime += 1000/60;
        if(e.timer.lifetime > e.timer.lifespan) {
            ecs.deleteEntity(e);
        }
    }
}