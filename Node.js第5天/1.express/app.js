// 引入模块
const express = require('express');
const ejs = require('ejs');
// 创建服务器
const app = express();
// 配置ejs
// 设置ejs为默认模板引擎
app.set('view engine', 'ejs');
// 设置模板所在的文件夹的默认路径
app.set('views', './view');
// 托管静态页面
app.use(express.static('public'));
// 监听接口
app.listen(3000, () => {
    console.log('express server is running at http://127.0.0.1:3000');
});
// 监听请求
app.get('/', (req, res) => {
    res.render('test', {});
});
