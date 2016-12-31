function physicsSystem(e) {
    if(e.position === undefined || e.physics === undefined) return;

    e.physics.velocity.x = asd(e.physics.velocity.x, e.physics.acceleration.x, e.physics.topSpeed, e.physics.friction);
    e.physics.velocity.y = asd(e.physics.velocity.y, e.physics.acceleration.y, e.physics.topSpeed, e.physics.friction);

    e.position.x += e.physics.velocity.x;
    e.position.y += e.physics.velocity.y;
}

function asd(vel, acc, top, fric) {
    var newVel = vel;
    newVel += acc;
    //limit speed
    if(Math.abs(newVel) > top) {
        newVel = Math.sign(newVel)*top;
    }
    //deacceleration
    if(acc == 0 && Math.abs(newVel) > 0) {
        if(Math.abs(newVel)-fric > 0) {
            newVel -= Math.sign(newVel)*fric;
        } else {
            newVel = 0;
        }
    }
    return newVel;
}