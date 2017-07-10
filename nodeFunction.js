/**
Node.js 函数
在JavaScript中，一个函数可以作为另一个函数的参数。我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。
Node.js中函数的使用与Javascript类似，举例来说，你可以这样做：
****/
function sayHello(word){
    console.log(word);
}

function excuteSomeFunction(someFunction,value){
    someFunction(value);
}

excuteSomeFunction(sayHello,"hahaha");

/***
匿名函数
我们可以把一个函数作为变量传递。但是我们不一定要绕这个"先定义，再传递"的圈子，我们可以直接在另一个函数的括号中定义和传递这个函数
****/
excuteSomeFunction(function(word){
    console.log(word);
},"tttt");

//函数传递是如何让HTTP服务器工作的
var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8818);

//拆解

function createRequest(request,response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(createRequest).listen(8818);
