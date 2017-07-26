var http = require('http');
var url = require('url');
var fs = require('fs');
var query = require('querystring');
function start(rout){
	function httpFunction(request,response){
			var pathName = url.parse(request.url).pathname;
			console.log("pathName----"+pathName+"reviced");
      rout(pathName);
			fs.readFile(pathName.substr(1),function(err,data){
					if(err){
						//404
						// HTTP 状态码: 404 : NOT FOUND
         		// Content Type: text/plain
         		response.writeHead(404, {'Content-Type': 'text/html'});
					}else{
							console.log("文件读取"+data);
							// HTTP 状态码: 200 : OK
						 // Content Type: text/plain
						 response.writeHead(200, {'Content-Type': 'text/html'});
						 // 响应文件内容
						 response.write(data.toString());
					}
			})
			response.end();
	}
  http.createServer(httpFunction).listen(8808);
  console.log('server has start');
}
exports.start = start;
