//引入模块
const http = require('http');
const fs = require('fs');
const urlModule = require('url');
const path = require('path');
const template = require('art-template');
// 建立服务器
const app = http.createServer();
// 监听端口
app.listen(3000, () => {
    console.log('server is runing at http://127.0.0.1:3000')
})
// 注册事件,监听请求
app.on('request', (req, res) => {
    let urlobj = urlModule.parse(req.url, true);
    let method = req.method;
    let url = urlobj.pathname;
    // 加载页面
    if (method == 'GET' && (url == '/' || url == '/index' || url == '/index.html')) {
        let indexStr = template(path.join(__dirname, './view/index.html'), {});
        res.end(indexStr);
    } else if (method == 'GET' && url == '/register.html') {
        let indexStr = template(path.join(__dirname, './view/register.html'), {});
        res.end(indexStr);
    } else if (method == 'GET' && url == '/node_modules/jquery/src/jquery.js') {
        fs.readFile(path.join(__dirname, './node_modules/jquery/src/jquery.js'), 'utf-8', (err, data) => {
            if (err) return console.log(err.message);
            res.end(data);
        });
    }
    // 二次请求
})