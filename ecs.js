var ecs = {
    entity_count: 0,
    newEntity: function() {
        var e = {id: ecs.entity_count++}
        ecs.entities.push(e);
        return e;
    },
    deleteEntity: function(e) {
        e = {};
        ecs.entity_count--;
    },
    entities: [],
};