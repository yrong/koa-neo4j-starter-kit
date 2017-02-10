# koa-neo4j-starter-kit
A blueprint for creating web servers powered by [koa-neo4j](https://github.com/assister-ai/koa-neo4j)

## Install
Assuming [Node version 4+ and NPM are installed](https://nodejs.org/en/download/package-manager/):
```bash
git clone https://github.com/assister-ai/koa-neo4j-starter-kit.git
cd koa-neo4j-starter-kit
npm install
```

## Usage
To run the server, you need a running Neo4j instance. Set your Neo4j config (boltUrl, user and password) in [settings.js](https://github.com/assister-ai/koa-neo4j-starter-kit/blob/master/src/settings.js#L4)

For development:

```bash
npm start
```

For production, you need to set environment variables referred by [settings.js](https://github.com/assister-ai/koa-neo4j-starter-kit/blob/master/src/settings.js)
(either in your shell or ideally in a docker-compose conf), then simply:

```bash
npm run serve
```

## Best practices

- Keep related logic be `.js` or `.cyp` in the same directory (`user`, `articles` and `noncypher` directories are examples).
- Import the logic that you want to be included in the bundle in [index.js](https://github.com/assister-ai/koa-neo4j-starter-kit/blob/master/src/index.js#L3)
- Put all your configurable objects in [settings.js](https://github.com/assister-ai/koa-neo4j-starter-kit/blob/master/src/settings.js)

## License

[MIT](https://github.com/assister-ai/koa-neo4j-starter-kit/blob/master/LICENSE)
