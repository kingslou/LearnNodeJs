var http = require('http');
//引用其他model
var version = require('./model/version.js');
http.createServer(function (request, response) {

	// 发送 HTTP 头部
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	//url
	console.log(request.url);
	// 发送响应数据
	var haha = new version();

	haha.setVersionName("1.0.2");
	haha.setVersionCode(10);
	haha.setUpdateInfo("这是一次测试的版本升级");
	response.end(JSON.stringify(haha));
}).listen(8808);


// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8808/');
