// var fs = require("fs");

// var data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log("结束");


// seconde sync require

var fs = require("fs");

fs.readFile('input.txt', function (err, data){
  if(err) return console.error(err);
  console.log(data.toString());
});

console.log("结束");


// 阻塞与非阻塞调用的不同。第一个实例在文件读取完后才执行完程序。 第二个实例我们不需要等待文件读取完，这样就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能。