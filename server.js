const jsonServer = require('json-server');
const cuid = require('cuid');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || process.argv.slice(2)[0] || 3000;

server.use(middlewares);

// Parse body so that middleware can access payloads
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
    req.body.id = cuid().toString();
  }

  // Continue to JSON Server router
  next();
});

server.use(router);
server.listen(port, () => {
  console.log(`json-server API started on port ${port}`);
});
