// 引入模块
const urlModule = require('url');
const http = require('http');
const path = require('path');
// 创建服务器
const app = http.createServer();
// 监听接口
app.listen(3000, () => {
    console.log('server is runing at http://127.0.0.1:3000')
})
// 注册事件,监听请求
app.on('request', (req, res) => {
    // let url = req.url;
    // let method = req.method;
    // let test1 = path.parse(req.url, false);
    // let test2 = path.parse(req.url, true);
    // let test3 = urlModule.parse(req.url);
    // let test4 = urlModule.parse(req.url, true);
    // console.log(test1, test2, test3, test4);
    // 将URL转换成URL对象
    let urlobj = urlModule.parse(req.url, true);
    // console.log(urlobj);
    // 获取真正的URL路径
    let url = urlobj.pathname;
    // 获取get方式请求的参数
    let query = urlobj.query;
    console.log(url, query);
})