// 引入模块
const http = require('http');
const fs = require('fs');
const path = require('path');
const template = require('art-template');
// 建立服务器
const app = http.createServer();
// 监听端口
app.listen(3000, () => {
    console.log('server is runing at http://127.0.0.1:3000');
})
// 监听请求
app.on('request', (req, res) => {
    let method = req.method;
    let url = req.url;
    if (method == 'GET' && (url == '/' || url == '/index' || url == '.index.html')) {
        fs.readFile(path.join(__dirname, './view/index.html'), 'utf8', (err, data) => {
            if (err) return console.log(err.message);
            res.end(data);
        })
    } else {
        res.end('请求失败');
    }
})