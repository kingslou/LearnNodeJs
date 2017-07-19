var http = require('http');
//引用其他model
var version = require('./model/version.js');
var url = require('url');
var util = require('util');
var querystring = require('querystring');
http.createServer(function (request, response) {

	// 发送 HTTP 头部
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	//url
	console.log(request.url);
	//获取请求参数,get
	//例如 http://127.0.0.1:8808/user?name=%22Android%22&url=%22httpurl%22
	var params = url.parse(request.url, true).query;
	console.log(params.name); // Android
	console.log(params.url); // httpurl

	//获取请求参数 post


	// 发送响应数据
	var haha = new version();

	haha.setVersionName("1.0.2");
	haha.setVersionCode(10);
	haha.setUpdateInfo("这是一次测试的版本升级");
	response.end(JSON.stringify(haha));
}).listen(8808);


// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8808/');
