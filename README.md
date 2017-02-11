# koa-neo4j-starter-kit

A blueprint for creating RESTful web servers with [koa-neo4j](https://github.com/assister-ai/koa-neo4j)

## Install

Assuming [Node version >= 4 and NPM are installed](https://nodejs.org/en/download/package-manager/):
```bash
git clone https://github.com/assister-ai/koa-neo4j-starter-kit.git
cd koa-neo4j-starter-kit
npm install
```

## Usage

To run the server, you need a running Neo4j instance. Set your Neo4j config (boltUrl and password) in [src/settings.js](https://github.com/assister-ai/koa-neo4j-starter-kit/blob/master/src/settings.js#L28)

For development:

```bash
npm start
```

For production, you need to set environment variables referred by [src/settings.js](https://github.com/assister-ai/koa-neo4j-starter-kit/blob/master/src/settings.js)
(either in your shell or ideally in a docker-compose conf), then simply:

```bash
npm run serve
```

## Best practices

- Put all your configuration objects in [src/settings.js](https://github.com/assister-ai/koa-neo4j-starter-kit/blob/master/src/settings.js)
and configure your [development environment](https://github.com/assister-ai/koa-neo4j-starter-kit/blob/master/src/settings.js#L26)
- Keep related logic be `.js` or `.cyp` in the same directory (`src/user`, `src/articles` and `src/noncypher` directories are examples).
- Import the logic that you want to be included in the bundle at [src/server.js](https://github.com/assister-ai/koa-neo4j-starter-kit/blob/master/src/server.js#L3)

## License

[MIT](https://github.com/assister-ai/koa-neo4j-starter-kit/blob/master/LICENSE)
