var KoaNeo4jApp = require('koa-neo4j');

console.log(KoaNeo4jApp);

var app = new KoaNeo4jApp({
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


// You can use `app.defineAPI` for better code organisation
// Perform post-processing on values return by the cypher query via `postProcess`

app.defineAPI({
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

app.defineAPI({
    method: 'POST',
    route: '/articles/restricted',
    preProcess: function (params) {
        console.log(params);
    },
    cypherQueryFile: './cypher/articles.cyp',
    allowedRoles: ['admin']
});


// `app.router` is a standard koa-router which could be utilised to expand server's functionality
// visit github.com/alexmingoia/koa-router FMI

app.router.get('/noncypher', function (ctx, next) {
    ctx.body = "Using router you can do other things that don't need Cypher!";
    return next();
});

app.listen(3001, function () {
    console.log('App listening on port 3001.');
});
