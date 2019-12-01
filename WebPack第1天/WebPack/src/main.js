// src 的是开发目录，会通过 webpack 把 src 目录的中资源打包到 dist 中，所以以后 index.html 和 src 目录再无瓜葛，引用的资源都来自于打包后的 dist
// 导入css文件
import './style.css';
// 导入less文件
import './less.less';
//导入图片
import pic1 from './images/2.jpg';
import pic2 from './images/3bf33a87e950352afccc0d215b43fbf2b2118b6d.jpg';
import pic3 from './images/Screenshot_2015-10-03-18-11-54.png';
import pic4 from './images/5937a1aeb4efd.jpg';
// 测试错误追踪插件
// 导入错误模块
// import error from './error';
// 执行会报错的函数
// error();

let divNew = document.createElement('div');
divNew.innerHTML = `
    <div class='box'>
        <div class='bg'>小海绵和小糊涂</div>
        <span>小糊涂和小海绵</span>
        <span>小小糊涂</span>
        <span>小小海绵</span>
        <span>小小海绵糊涂小小</span>
        <span>小小海绵糊涂小小</span>
        <span>小小海绵糊涂小小</span>
        <span>小小海绵糊涂小小</span>
        <span>小小海绵糊涂小小</span>
        <span>小小海绵糊涂小小</span>
        <span>小小海绵糊涂小小</span>
    </div>
    <img src='${pic1}' style='width:600px'>
    <img src='${pic2}' style='width:600px'>
    <img src='${pic3}' style='width:600px'>
    <img src='${pic4}' style='width:600px'>
`
document.body.append(divNew);