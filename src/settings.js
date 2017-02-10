// place all your config files (e.g. mail server, etc.) in this file

export const neo4j = {
    boltUrl: `bolt://${process.env.NEO4J}`,
    user: 'neo4j',
    password: process.env.NEO4J_PASSWORD
};

export const authentication = {
    userCypherQueryFile: './src/user/user.cyp',
    rolesCypherQueryFile: './src/user/roles.cyp',
    route: '/auth',
    // use https://strongpasswordgenerator.com/ for secret
    secret: 'a_strong_secret'
};

export const cors = {
    credentials: true
};

export const ports = {
    app: parseInt(process.env.APP_PORT)
};

// configs for development mode
if (process.env.DEV) {
    neo4j.boltUrl = 'bolt://localhost';
    neo4j.password = 'neo4j';
    ports.app = 3000;
}
