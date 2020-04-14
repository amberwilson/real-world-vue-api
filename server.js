const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || process.argv.slice(2)[0] || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);