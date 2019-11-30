// 引入框架模块
const express = require('express');
// 建立服务器
const app = express();
// 监听接口
app.listen(3000, () => {
    console.log('express server is running at http://127.0.0.1:3000');
})
// 监听请求
app.use((req, res) => {
    res.send('小海绵和小糊涂');
    // res.writeHead(200, {
    //     'Content-Type': 'text/html;charset=utf-8'
    // });
    // res.end('欢迎来到程序世界！');
});