const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = 3005;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(router);
server.listen(port,()=>console.log(
    'Hitting server port number',port,''
));



