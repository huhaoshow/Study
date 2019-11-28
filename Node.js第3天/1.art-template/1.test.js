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
// 注册事件,监听响应
app.on('request', (req, res) => {
    let method = req.method;
    let url = req.url;
    if (method == 'GET' && url == '/' || url == '/index' || url == '/index.html') {
        fs.readFile(path.join(__dirname, '../Data.json'), 'utf-8', (err, data) => {
            if (err) return console.log(err.message);
            let dataArr = JSON.parse(data);
            let obj = {
                data: dataArr
            }
            let str = template(path.join(__dirname, './view/index.html'), obj)
            res.end(str);
        })
    } else {
        res.end({
            "code": "404",
            "msg": "请求失败"
        });
    }
})