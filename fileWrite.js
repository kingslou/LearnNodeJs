var file = require('fs');

//同步读取文件
var File = file.readFileSync('input.txt');
console.log(File.toString());
console.log("程序执行结束");

//异步读取文件
file.readFile("input.txt",function(error,data){
  if(error){
      console.log("读取文件出错");
  }
  console.log("异步读取"+ new Date() + data.toString());
})
console.log("开始异步读取"+new Date());
