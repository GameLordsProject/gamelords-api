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
server.listen(process.env.PORT || 3000, () =>
  console.log("gamelords running on port " + process.env.PORT),
);
