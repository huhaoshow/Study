// 引入框架模板
const express = require('express');
// 建立服务器
const app = express();
// 监听端口
app.listen(3000, () => {
    console.log('express server is running at http://127.0.0.1:3000');
});
// 监听请求
// get请求
app.get('/', (req, res) => {
    res.send('小海绵和小糊涂的首页!');
});
// post请求
app.post('/register', (req, res) => {
    res.send('小海绵和小糊涂的注册页面!');
});