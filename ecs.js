var ecs = {
    entity_count: 0,
    newEntity: function() {
        var e = {id: ecs.entity_count++}
        ecs.entities.push(e);
        return e;
    },
    deleteEntity: function(e) {
        if(e.recycle) {
            console.log("what");
            return;
        }
        e.recyle = true;
        ecs.entity_count--;
    },
    runSystem: function(sys) {
        for (e of ecs.entities) {
            if(e.recycle === true) continue;
            sys(e);
        }
    },
    entities: [],
};