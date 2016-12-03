# koa-neo4j-starter-kit
Demonstration for [koa-neo4j](https://github.com/assister-ai/koa-neo4j)

### Install
Assuming [Node version 4+ and NPM are installed](https://nodejs.org/en/download/package-manager/):
```bash
git clone https://github.com/assister-ai/koa-neo4j-starter-kit.git
cd koa-neo4j-starter-kit
npm install
```

### Usage
To run the server, you need a running Neo4j instance. Set your Neo4j config (boltUrl, user and password) in [server.js](https://github.com/assister-ai/koa-neo4j-starter-kit/blob/master/server.js#L16), then:
```bash
npm start
```
Server is now live at `http://localhost:3000`

To learn how it works, read through comments in [server.js](https://github.com/assister-ai/koa-neo4j-starter-kit/blob/master/server.js)
