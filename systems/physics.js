function runPhysicsSystem() {
    for (e of ecs.entities) {
        if(!(e.position && e.physics)) continue;

        var fric = friction(e);
        var netx = e.physics.acceleration.x - fric.x;
        if(e.physics.velocity.x + netx > 0.1) {
            e.physics.velocity.x += netx;
        } else {
            e.physics.velocity.x = 0;
        }
        var nety = e.physics.acceleration.y - fric.y;
        if(e.physics.velocity.y + nety > 0.1) {
            e.physics.velocity.y += nety;
        } else {
            e.physics.velocity.y = 0;
        }

        e.position.x += e.physics.velocity.x;
        e.position.y += e.physics.velocity.y;
        console.log(e.physics.velocity.x);
        console.log(e.physics.velocity.y);
    }
}

function friction(e) {
    return {x: -e.physics.velocity.x, y: -e.physics.velocity.y};
}