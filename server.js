var koaNeo4j = require("koa-neo4j");
var koaNeo4jApp = koaNeo4j.default;
var API = koaNeo4j.API;

var app = koaNeo4jApp({
    cypher_directory: './cypher',
    apis: [
        new API('GET', '/doctors', 'doctor_result.cyp'),
        new API('POST', '/doctors', 'doctor_result.cyp', ['admin'], () => console.log('/doctors POST served.')),
        new API('GET', '/doctor/:id', 'doctor_view.cyp')
    ],
    database: {
        cypherDirectoryPath: './cypher/',
        server: "http://192.168.10.101:7474",
        endpoint: "/db/data",
        user: "neo4j",
        password: "k"
    }
});
app.listen(3000, function () {
    console.log('App listening on port 3000.');
});

