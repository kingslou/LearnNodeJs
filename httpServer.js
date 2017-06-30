var http = require('http');
var version = require('./model/version.js');
http.createServer(function (request, response) {

	// 发送 HTTP 头部
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	// 发送响应数据
	var haha = new version();
	haha.versionCode = 100;
	haha.versionName = "哈哈";
	haha.updateInfo = "这次更新";
	response.end(JSON.stringify(haha));
}).listen(8808);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8808/');
