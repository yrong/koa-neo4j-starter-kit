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
    }
});


// You can use `app.defineAPI` for better code organisation
// Perform post-processing on values return by the cypher query via `postProcess` lifecycle hook

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

// Authentication and roles can be configured either by
// supplying an `authentication` key in options passed to KoaNeo4jApp's constructor
// or by `app.configureAuthentication`

app.configureAuthentication({
    userCypherQueryFile: './cypher/user.cyp',
    rolesCypherQueryFile: './cypher/roles.cyp',
    route: '/auth',
    secret: 'secret'
});

// Routes can be guarded by role restriction using `allowedRoles`
// Another lifecycle hook is `postProcess` which is demonstrated below

app.defineAPI({
    method: 'POST',
    route: '/articles/restricted',
    preProcess: function (params) {
        // Perform prrprocessing on 'params' which will be given to the cypher query
        params.extra = 'extra parameter!';
        // ...
        return params;
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

app.listen(3000, function () {
    console.log('App listening on port 3000.');
});
