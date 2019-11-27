//引入http模块
const http = require('http');
const fs = require('fs')
const path = require('path')

// 对于第三方模块的使用:
// 1. 先下载
// 2. 引入
const template = require('art-template')

//创建服务器对象
var app = http.createServer();


//监听端口
app.listen(3001, () => {
    console.log('server is running at http://127.0.0.1:3001');
})

//注册事件，监听请求
app.on('request', (req, res) => {
    let method = req.method;
    let url = req.url;

    if (method == 'GET' && url == '/') {
        //加载index页面
        // fs.readFile(path.join(__dirname, './views/index.html'), 'utf-8', (err, data) => {
            // if(err) return console.log(err.message);
            // res.end(data); 
            // let obj = {
            //     name: 'rose',
            //     gender: '女',
            //     age: 20
            // }

            // let rander = template.compile('<ul><li>{{name}}</li><li>{{gender}}</li><li>{{age}}</li></ul>')
            // console.log(rander);
            // let str = rander(obj)
            // console.log(str);

            // let str = template.render('<ul><li>{{name}}</li><li>{{gender}}</li><li>{{age}}</li></ul>',obj);
            // let str = template.render(data,obj);
            // // console.log(str);
            // res.end(str);

        // })
        let obj = {
            name: 'jack-rose',
            gender: '人妖',
            age: 40
        }
        let str = template(path.join(__dirname, './views/index.html'),obj)
        res.end(str);
        

    } else {
        res.end('404');
    }
})