import KoaNeo4jApp from 'koa-neo4j';
import {neo4j, authentication, cors} from './settings';

const app = new KoaNeo4jApp({
    neo4j: neo4j,
    authentication: authentication,
    cors: cors
});

export default app;
