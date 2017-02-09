import app from './../server';

import {fetchOne, convertToPreProcess, errorOnEmptyResult} from 'koa-neo4j/postprocess';
import {logValues} from 'koa-neo4j/debug';

app.defineAPI({
    method: 'GET',
    route: '/articles/:skip/:limit',
    cypherQueryFile: './src/articles/articles.cyp'
});

app.defineAPI({
    // guard routes with `allowedRoles`
    allowedRoles: ['admin'],
    method: 'GET',
    route: '/articles/restricted/:skip/:limit',
    cypherQueryFile: './src/articles/articles.cyp'
});

// create reusable blocks of backend code with procedures
const coolProcedure = app.createProcedure({
    preProcess: params => {
        params.result = params.coolInputParam | 'cool';
        return params;
    },
    postProcess: [
        convertToPreProcess('coolParam'),
        logValues
    ]
});

// do fancy stuff with lifecycle hooks
app.defineAPI({
    method: 'POST',
    route: '/cool',
    preProcess: [
        coolProcedure,
        async params => {
            params.coolComplete = await coolProcedure({coolInputParam: 'hot'});
            params.result = [
                Promise.resolve('secret of universe, life and everything'),
                Promise.resolve(42)
            ];
            return params;
        }
    ],
    postProcess: [
        errorOnEmptyResult('not cool', 501),
        fetchOne,
        (result, params) => {
            return {result, params};
        }
    ]
});

export {coolProcedure};
