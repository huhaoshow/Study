//我们需要和客户端通讯、需要读写文件
const http = require('http')
const fs = require('fs')
const path = require('path')
//要处理url地址
const urlModel = require('url')

// 引入模块
const querystring = require('querystring')


//1. 创建服务器对象
let app = http.createServer();

//2. 监听端口
app.listen(3003, () => {
    console.log('server is running at http://127.0.0.1:3003');
})

//3.注册事件，监听请求
app.on('request', (req, res) => {
    let method = req.method;
    let url = req.url;
    let userUrl = urlModel.parse(url, true)
    let pathname = userUrl.pathname;
    if (method == 'GET' && (pathname == '/' || pathname == '/index' || pathname == '/index.html')) {
        fs.readFile(path.join(__dirname, './views/index.html'), 'utf8', (err, data) => {
            if (err) return console.log(err.message);
            res.end(data);
        })
    } else if (method == 'GET' && pathname == '/submit') {
        //url.startsWith('/submit') 我们不需要这样判断了
        // console.log(url);
        // ?我们如何去获取到用户名和密码？
        // console.log(userUrl.query);

        // console.log(typeof userInfo);
        // fs.appendFile(path.join(__dirname,'./user.json'),JSON.stringify(userInfo),(err)=> {
        //     if(err) return console.log(err.message);
        //     res.writeHeader(200,{
        //         'Content-Type':'text/plain;charset=utf-8'
        //     })
        //     res.end('注册成功');
        // })
        let userInfo = userUrl.query;
        //先将json文件读取出来
        fs.readFile(path.join(__dirname, './user.json'), 'utf8', (err, data) => {
            if (err) return console.log(err.message);
            //读取到的json的数据 ，然后将json的数据转换为一个对象
            let userArr = JSON.parse(data);
            //将用户信息添加到json文件中
            userArr.push(userInfo);
            fs.writeFile(path.join(__dirname, './user.json'), JSON.stringify(userArr), (err) => {
                if (err) return console.log(err.message);
                res.writeHeader(200, {
                    'Content-Type': 'text/plain;charset=utf-8'
                })
                let obj = {
                    code: 200,
                    msg: '注册成功'
                }
                res.end(JSON.stringify(obj))
            })
        })
    } else if (method == 'GET' && pathname == '/js/jquery-1.12.2.js') {
        fs.readFile(path.join(__dirname, './js/jquery-1.12.2.js'), 'utf-8', (err, data) => {
            if (err) return console.log(err.message);
            res.end(data);
        })
    } else if (method == 'GET' && pathname == '/userRegister') {
        let userData = userUrl.query;
        // console.log(userData);
        fs.readFile(path.join(__dirname, './user.json'), 'utf8', (err, data) => {
            if (err) return console.log(err.message);
            let arr = JSON.parse(data);
            arr.push(userData);
            //将数据写入到json中的时候，一定要转成string
            fs.writeFile(path.join(__dirname, './user.json'), JSON.stringify(arr), (err) => {
                if (err) return console.log(err);
                res.writeHeader(200, {
                    'Content-Type': 'text/plain;charset=utf-8'
                })
                // res.end('OK')
                let obj = {
                    code: 200,
                    msg: '注册成功'
                }
                res.end(JSON.stringify(obj))
            })
        })
    } else if (method == 'GET' && pathname == '/register') {
        fs.readFile(path.join(__dirname, './views/register.html'), 'utf-8', (err, data) => {
            if (err) return console.log(err.message);
            res.end(data);
        })
    } else if (method == 'POST' && pathname == '/submit') {
        // res.end('ok')
        //这种方式去获取信息，这些信息都是带在url上面的才能这么做。
        // let user = userUrl.query;
        // console.log(user);
        //定义一个变量 暂存信息
        let str = '';

        req.on('data', chunk => {   //chunk 块，数据块
            str += chunk;
            // console.log(123);
        })


        req.on('end', () => {
            // console.log(456);
            // console.log( typeof str);   {userName: 'xxxx',userPwd: 133456}
            // ?如何将获取的用户的用户名和密码转换成为一个对象
            let userReg = querystring.parse(str);
            // console.log(userReg);

            fs.readFile(path.join(__dirname, './user.json'), 'utf8', (err, data) => {
                if (err) return console.log(err.message);
                let arr = JSON.parse(data);
                arr.push(userReg);
                //将数据写入到json中的时候，一定要转成string
                fs.writeFile(path.join(__dirname, './user.json'), JSON.stringify(arr), (err) => {
                    if (err) return console.log(err);
                    res.writeHeader(200, {
                        'Content-Type': 'text/plain;charset=utf-8'
                    })
                    // res.end('OK')
                    let obj = {
                        code: 200,
                        msg: '注册成功111111'
                    }
                    res.end(JSON.stringify(obj))
                })
            })
        })

    } else if (method == 'POST' && pathname == '/userRegister') {
        //定义一个变量暂存数据
        let post = '';

        req.on('data', chunk => {
            post += chunk;
        })

        req.on('end', () => {
            let userObj = querystring.parse(post);
            fs.readFile(path.join(__dirname, './user.json'), 'utf-8', (err, data) => {
                if (err) return console.log(err.message);
                let userArr = JSON.parse(data);
                userArr.push(userObj);
                fs.writeFile(path.join(__dirname, './user.json'), JSON.stringify(userArr), (err) => {
                    if (err) return console.log(err.message);
                    res.writeHeader(200, {
                        'Content-Type': 'text/plain;charset=utf-8'
                    })
                    let obj = {
                        code: 200,
                        msg: '注册成功2222222'
                    }
                    res.end(JSON.stringify(obj));
                })
            })
        })
    } else {
        res.writeHeader(200, {
            'Content-Type': 'text/plain;charset=utf-8'
        })
        let obj = {
            code: 404,
            msg: '找不到你要的哦'
        }
        res.end(JSON.stringify(obj))
    }
})