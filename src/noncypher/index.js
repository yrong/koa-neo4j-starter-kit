import app from './../server';


// `app.router` is a standard koa-router which could be utilised to expand server's functionality
// visit https;//github.com/alexmingoia/koa-router FMI
app.router.get('/noncypher', (ctx, next) => {
    ctx.body = "Using router you can do other things that don't need Cypher!";
    return next();
});
