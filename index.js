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

server.use(
  jsonServer.rewriter({
    "/users/:email": "/users?email=:email",
    "/users/:password": "/users?password=:password",
  }),
);

server.use(rules);

server.db = router.db;
server.use(jsonServerAuth);
server.use(router);
server.listen(8000, () =>
  console.log("gamelords running on port " + process.env.PORT),
);
