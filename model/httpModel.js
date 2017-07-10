var http = require('http');
var url = require('url');
var query = require('querystring');
function start(rout){
	function httpFunction(request,response){
			var pathName = url.parse(request.url).pathname;
			console.log("pathName----"+pathName+"reviced");
      rout(pathName);
			response.writeHead(200, {'Content-Type': 'text/plain'});
			response.write("Hello world");
			response.end();
	}
  http.createServer(httpFunction).listen(8808);
  console.log('server has start');
}
exports.start = start;
