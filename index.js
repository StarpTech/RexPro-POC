var RexProClient = require("rexpro-client");

var client = new RexProClient({
    host: "localhost",      // default
    port: 8184,             // default
    graph: "tinkerpop"      // default
});

var query = {
    script: "g.V.has('name', name).out()",
    bindings: {
        name: "titan"
    }
};

client.execute(query)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(err) {
        throw err;
    })
    .done();
