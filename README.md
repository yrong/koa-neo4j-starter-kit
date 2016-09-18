# koa-neo4j-example
Demonstration for [koa-neo4j](https://github.com/satratech/koa-neo4j)

### Install
Assuming [Node version 4+ and NPM are installed](https://nodejs.org/en/download/package-manager/):
```bash
git clone https://github.com/satratech/koa-neo4j-example.git
cd koa-neo4j-example
npm install
```

### Usage
To run the server, you need a running Neo4j instance. Set your Neo4j config (boltUrl, user and password) in [server.js](https://github.com/satratech/koa-neo4j-example/blob/master/server.js#L16), then:
```bash
npm start
```
Server is now live at `http://localhost:3000`

To learn how it works, read through comments in [server.js](https://github.com/satratech/koa-neo4j-example/blob/master/server.js)
