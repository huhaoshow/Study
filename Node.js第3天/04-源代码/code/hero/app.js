// 引入模块
const http = require('http')
const fs = require('fs')
const path = require('path')
const template = require('art-template')  //我们下载的模板的名称必须和引入的模板的名称一样

//创建服务器对象
let app = http.createServer();

//监听端口
app.listen(3002,()=>{
    console.log('server is running at http://127.0.0.1:3002');
})

//注册事件，监听请求
app.on('request',(req,res)=>{
    let method = req.method;
    let url = req.url;

    if(method == 'GET' && (url == '/' || url == '/index' || url == '/index.html')) {
        fs.readFile(path.join(__dirname,'./views/index.html'),'utf8',(err,data)=>{
            fs.readFile(path.join(__dirname,'./hero.json'),'utf8',(err,data)=>{
                if(err) return console.log(err.message); 
                // console.log(data);
                let heroArr = JSON.parse(data);  //读取出来的json数据一定是一个字符串
                // console.log(heroArr);
                let obj = {
                    data: heroArr
                }
                // console.log(obj);
                let str = template(path.join(__dirname,'./views/index.html'),obj);
                // console.log(str);
                res.end(str);
            })
            // if(err) return console.log(err.message);
            // res.end(data);
        })
    }else if(method == 'GET' && url == '/node_modules/bootstrap/dist/css/bootstrap.css') {
        fs.readFile(path.join(__dirname,'./node_modules/bootstrap/dist/css/bootstrap.css'),'utf8',(err,data)=>{
            if(err) return console.log(err.message);
            res.end(data);
        })
    }else {
        res.end('404');
    }
})