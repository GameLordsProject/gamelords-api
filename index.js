const jsonServer = require("json-server");
const jsonServerAuth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

const rules = jsonServerAuth.rewriter({
  users: 600,
});

server.use(rules);

server.use(jsonServerAuth);
server.use(router);
server.listen(3000, () => {
  console.log("Running on port 3000");
});
