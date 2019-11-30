// 引入模块
const express = require('express');
const ejs = require('ejs');
// 建立服务器
const app = express();
// 设置默认模板引擎
app.set('view engine', 'ejs');
// 设置模板检索的默认路径
app.set('views', './view');
// 监听接口
app.listen(3000, () => {
    console.log('express server is running at http://127.0.0.1:3000');
})
// 监听请求
app.get('/', (req, res) => {
    // 调用模板引擎
    res.render('index', { name: '小海绵', age: 24, gender: '男' });
});