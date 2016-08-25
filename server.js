var koaNeo4jApp = require('koa-neo4j').default;
var API = require('koa-neo4j').API;

var app = koaNeo4jApp({
    apis: [
        new API('GET', '/articles', './cypher/articles.cyp'),
        new API('POST', '/articles', './cypher/articles.cyp', ['admin'], function (result) {
            // Perform postprocessing on 'result' returned by executing the cypher query
            // ...
            return result;
        })
    ],
    database: {
        server: 'http://192.168.10.101:7474',
        endpoint: '/db/data',
        user: 'neo4j',
        password: 'neo4j'
    },
    authentication: {
        userQueryCypherFile: './cypher/auth.cyp',
        route: '/auth',
        secret: 'secret'
    }
});

app.listen(3000, function () {
    console.log('App listening on port 3000.');
});
