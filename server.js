var koaNeo4jApp = require('koa-neo4j').default;

var app = koaNeo4jApp({
    apis: [
        {
            method: 'GET',
            route: '/articles/:skip/:limit',
            cypherQueryFile: './cypher/articles.cyp'
        },
        {
            method: 'POST',
            route: '/articles',
            cypherQueryFile: './cypher/articles.cyp'
        }
    ],
    neo4j: {
        boltUrl: 'bolt://localhost',
        user: 'neo4j',
        password: 'k'
    },
    authentication: {
        userCypherQueryFile: './cypher/user.cyp',
        rolesCypherQueryFile: './cypher/roles.cyp',
        route: '/auth',
        secret: 'secret'
    }
});


// You can use `defineAPI` for better code organisation

var defineAPI = require('koa-neo4j').defineAPI;


// Perform post-processing on values return by the cypher query via `postProcess`

defineAPI({
    method: 'GET',
    route: '/articles/processed',
    cypherQueryFile: './cypher/articles.cyp',
    postProcess: function (result) {
        // Perform postprocessing on 'result' returned by executing the cypher query
        result.push({extra:'record'});
        // ...
        return result;
    }
});


// Routes can be guarded by role restriction using `allowedRoles`

defineAPI({
    method: 'POST',
    route: '/articles/restricted',
    cypherQueryFile: './cypher/articles.cyp',
    allowedRoles: ['admin']
});


// `router` is a standard koa-router which could be utilised to expand server's functionality

var router = require('koa-neo4j').router;
// [koa-router](https://github.com/alexmingoia/koa-router)

app.listen(3000, function () {
    console.log('App listening on port 3000.');
});
