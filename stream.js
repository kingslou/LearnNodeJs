/****
Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。
Node.js，Stream 有四种流类型：
Readable - 可读操作。
Writable - 可写操作。
Duplex - 可读可写操作.
Transform - 操作被写入数据，然后读出结果。
所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
data - 当有数据可读时触发。
end - 没有更多的数据可读时触发。
error - 在接收和写入过程中发生错误时触发。
finish - 所有数据已被写入到底层系统时触发。
******/

// 小例子 从流中读取数据
var fs = require('fs');
var data = '';
var readStream = fs.createReadStream('input.txt');
//设置编码
readStream.setEncoding('utf-8');
// 处理流事件
readStream.on('data',function(dataStr){
  data += dataStr;
});

readStream.on('end',function(){
  console.log(data);
});

readStream.on('error',function(error){
  console.log(error);
});

console.log("输入流执行完毕");


// 写入流
var outdata = "www.ieasy360.com";
var writeStream = fs.createWriteStream('out.txt');
writeStream.write(outdata,'utf-8');
writeStream.end();

writeStream.on('finish',function(){
    console.log("写入完成");
});

writeStream.on('error',function(error){
  console.log('写入失败'+error);
});

console.log("写入流执行完毕");

//管道流
// 我们把文件比作装水的桶，而水就是文件里的内容，我们用一根管子(pipe)连接两个桶使得水从一个桶流入另一个桶，这样就慢慢的实现了大文件的复制过程。

readStream.pipe(writeStream);

console.log("管道流 结束");
