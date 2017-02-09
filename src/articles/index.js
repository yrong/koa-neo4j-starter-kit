import app from './../server';

app.defineAPI({
    method: 'GET',
    route: '/articles/:skip/:limit',
    cypherQueryFile: './src/articles/articles.cyp'
});

app.defineAPI({
    allowedRoles: ['admin'],
    method: 'GET',
    route: '/articles/restricted/:skip/:limit',
    cypherQueryFile: './src/articles/articles.cyp'
});
