// src 的是开发目录，会通过 webpack 把 src 目录的中资源打包到 dist 中，所以以后 index.html 和 src 目录再无瓜葛，引用的资源都来自于打包后的 dist
// 导入css文件
import './style.css';
// 导入less文件
import './less.less';
// 导入jQuery
import jQuery from './utils/jquery.min.js';

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
`
document.body.append(divNew);