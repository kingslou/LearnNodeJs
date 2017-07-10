var server = require('./model/httpModel.js');
var router = require('./nodeRouter.js');

server.start(router.routeName);
