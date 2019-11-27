//写入文件，我们要使用读写文件的模块
const fs = require('fs')

//使用这样的方式，写入文件，后写入的内容会将前面的内容覆盖掉
// fs.writeFile('./01.txt',"今天的天气和不错，合适来一场说走就走的旅行",(err)=>{
//     if(err) return console.log(err.message);
//     console.log('写入成功………………');
// })

//在写入文件的时候，如果只是文件没有，会自动新建一个文件，但是如果文件夹没有，不会自动新建
// fs.writeFile('./files/02.txt',"hello world",(err)=>{
//     if(err) return console.log(err.message);
//     console.log('写入成功………………');
// })


// fs.appendFile('./files/02.txt',"hello world01\n",(err)=>{
//     if(err) return console.log(err.message);
//     console.log('写入成功………………');
// })

//追加内容到文件中，如果没有这个文件，也会自动新建一个文件。 不会自动新建文件夹
fs.appendFile('./files/03.txt',"你好！世界\n",(err)=>{
    if(err) return console.log(err.message);
    console.log('写入成功………………');
})