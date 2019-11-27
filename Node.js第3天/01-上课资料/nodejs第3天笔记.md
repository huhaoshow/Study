# node.js第3天笔记

> 课程目标

1. art-template的使用
2. GET请求
3. POST请求

## art-template

[官方网站](https://aui.github.io/art-template/zh-cn/docs/)

**art-template 是一个简约、超快的模板引擎。**

**具体用法如下:**

在views文件夹下新建index.html文件,内容代码如下:

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>主页面的内容 </title>
</head>
<body>
  <p>姓名:{{name}}</p>
  <p>age:{{age}}</p>
  <p>爱好:</p>
  <ul>
    {{each hobby value index}}
    <li>{{value}}</li>
    {{/each}}
  </ul>
</body>
</html>
```

**用法一:** template.compile(source)

```js
// 1. 引入模块
var fs = require('fs')
var template =require('art-template')
var http = require('http')

// 2. 创建服务器对象
var server =http.createServer()

// 3. 开启服务,并设置监听端口
server.listen(3000,()=>{
  console.log('the server is running at http://127.0.0.1:3000');
})

// 4.注册事件
server.on('request',(req,res)=>{
  var url =req.url;
  if(url=='/'){
    //4.1 读取数据
    fs.readFile(__dirname+"/views/index.html",'utf-8',(err,data)=>{
      if(err) return console.log(err.message);

      var render = template.compile(data);
      // var str = render({});
      var str = render({
        name:'tom',
        age:20,
        hobby:['抽烟','喝酒','烫头']
      });

      res.end(str);
    })
  }else {
    res.end('404')
  }
})
```

**用法二:**template.render(source,data)

```js
// 1. 引入模块
var http = require('http')
var fs = require('fs')
var template = require('art-template')

// 2. 创建服务器对象
var server = http.createServer()

// 3. 开启服务并监听端口
server.listen(3001,()=>{
  console.log('the server is running at http://127.0.0.1:3001');
})

// 4.注册请求事件
server.on('request',(req,res)=>{
  var url = req.url
  var obj = {
    name: 'tom',
    age: 20,
    hobby: ['抽烟', '喝酒', '烫头']
  };

  if(url=='/'){
    fs.readFile(__dirname+'/views/index.html','utf-8',(err,data)=>{
      if(err) return console.log(err.message);
      console.log(data);
      var str = template.render(data,obj);
      res.end(str);
    })
  }else {
    res.end('404')
  }
})
```

**用法三:**template(filename,data)

```js
// 1. 引入模块
var http = require('http')
var template = require('art-template')
var fs = require('fs')

// 2. 创建服务器对象
var server = http.createServer()

// 3. 开启服务并监听端口
server.listen(3000,()=>{
  console.log('the server is running at http://127.0.0.1:3000');
})

// 4.注册请求事件
server.on('request',(req,res)=>{
  var url = req.url;
  if(url=='/'){
    var obj = {
      name: 'tom',
      age: 20,
      hobby: ['抽烟', '喝酒', '烫头','撩妹']
    }
    var str = template(__dirname+'/views/index.html',obj)
    res.end(str)
  }else {
    res.end('404')
  }
})
```



## GET请求

请求在网站的访问过程中很常见，并且请求分为多种方式：GET、POST、PUT、DELETE、OPTIONS等。其中GET和POST最常用。

**1.什么是GET请求？**

GET从字面上理解为'获取'，通常用于获取服务端的数据。

**2.常见的发起GET请求的方式**

- 地址栏访问 URL的访问都是GET请求
- src/href
- 表单

网页中有许多效果使用的就是GET请求：

- 各种搜索框
- 各种详情页面
- 大部分超链接

**3.GET方式提交数据的格式**

1. 格式:http://127.0.0.1:3000/submit?userName=jack&password=123
2. 参数名与参数值之间**没有空格**
3. 参数值不需要使用单双引号包括

## POST请求

**1. 什么是post请求**

字面上理解，post就是指`发送，提交`,它可以向指定的资源提交要被处理的数据

**2. 为什么需要POST请求**

GET方式提交数据通过URL传递到请求的页面，提交的数据量一般较小，用于请求页面数据。此外，GET方式传递的数据安全性低, 对于密码等隐私信息、文件上传必须使用POST方式提交。

要求：如果使用表单方式进行提交，表单的method必须设置为POST。

**2.3 POST请求的特点**

1-post 方式 安全性比较高

2-传递数据量大，请求对数据长度没有要求

3-请求不会被缓存，也不会保留在浏览器历史记录中

用于：密码等安全性要求比较高的场合，提交的数据量比较大：发布文章，上传文件。

## 收发数据

表单的概念在生活中很常见，就像是问卷调查表一样，别人先把问卷发给你，你照着问卷的要求填写，完事过后再将填完的问卷发给别人，从而达到一个将别人需要的信息传递给别人的一种方式。

传统的网页大多数的作用都是展示数据，就是将信息传递给用户。而在现代化的 Web 开发中，非常注重信息交互，所以表单也随处可见，只是形式上变成网页，性质上还是一模一样的。主要的作用仍然是**收集指定的用户信息**。

> 信息交互：例如 [简书](http://www.jianshu.com) 这个平台，除了展示文章（展示信息），还可以发布文章（收集信息）

**表单基本使用**

HTML 中有一个专门用于提交数据的标签：``，通过这个标签可以很容易的收集用户输入。

> form 标签有两个必要属性：
>
> - action：表单提交地址（填完了，交给谁）
> - method：表单以什么方式提交

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>登录</title>
</head>
<body>
  <form action="/submit" method="post">
    <div>
      <label for="username">用户名</label>
      <input type="text" id="username" name="username">
    </div>
    <div>
      <label for="password">密码</label>
      <input type="password" id="password" name="password">
    </div>
    <button type="submit">登录</button>
  </form>
</body>
</html>
```

按照目前的情况，用户第一次请求得到这个表单页面，填写完表单内容，点击登录，表单会自动发送到 后端服务器，剩下的问题就是要考虑如何在后端服务器中获取到用户提交过来的内容。

**提交地址**

`action` 提交地址指的是这个表单填写完成过后点击提交，发送请求的请求地址是什么。

虽然我们写的是`action="/submit"`，但是浏览器会自动的帮我们拼接好对应的完整路径.

如: http://127.0.0.1:3000/submit?userName=tom&password=123

**提交方式**

`method` 可以用于设置表单提交的方式，目前我们所认识的就是最常见两种表单提交方式：`GET` 和 `POST`。

从效果上来看，两者都可以将数据提交到服务端，但是从实现提交的原理上两者有很大的不同：

- GET
  - **表单数据是通过 URL 中的 ? 参数传递到服务端的**
  - 可以在地址栏中看到提交的内容
  - 数据长度有限制，因为 URL 地址长度有限（2000个字符）
- POST
  - **表单数据是通过请求体传递到服务端的**，我们在界面上看不到
  - 可以提交任何类型的数据，包括文件
  - 由于界面上看不见，浏览器也不储存，所以更安全

至于什么情况下应该选用哪种方式，这个需要结合业务场景和这两种方式各自的特点来决定，没有绝对的答案，只能给出一些原则：

- 绝不能使用 GET 来发送密码或其他敏感信息！！！
- **应该想清楚这次请求到底主要是去拿东西，还是去送东西**

## 常见表单元素处理

至于表单元素中的文本框文本域一类的元素，都是直接将元素的 `name` 属性值作为键，用户填写的信息作为值，发送到服务端。

但是表单元素中还有一些比较特殊的表单元素需要单独考虑：

**单选按钮**

```js
性  别: 
<input type="radio" name='gender' value="1"> 男 
<input type="radio" name='gender' value="0"> 女
<!-- 在没有设置value的情况下,提交过去的数据是on -->
```

**复选按钮**

```js
 爱  好: 
 <input type="checkbox" name="hobby" value='抽烟'>抽烟 
 <input type="checkbox" name="hobby" value='喝酒'>喝酒 
 <input type="checkbox" name="hobby" value='烫头'>烫头 
 <input type="checkbox" name="hobby" value='嚼槟郎'>嚼槟郎
 <!-- 在没有设置value的情况下,提交过去的数据是on -->
```

**下拉菜单**

```js
<select name="province" id="">
   <option value="0001">北京市</option>
   <option value="0002">上海市</option>
   <option value="0003">广东省</option>
   <option value="0004">山东省</option>
   <option value="0005">云南省</option>
   <option value="0006">西藏自治区</option>
   <option value="0007">新疆维吾尔自治区</option>
</select>
<!-- 在没有设置value的情况下,提交过去的数据是标签间的内容 -->
```

## 接收GET过来的数据

由于GET请求是通过URL拼接参数的方式发送数据的，比如：

http://127.0.0.1:3000/submit?userName=tom&userPwd=123

此时的路径如果再使用req.url来获取请求路径的话则为：/submit?userName=tom&userPwd=123

此时最好是使用`url`内置核心模块将请求的URL路径进行必要的解析

```js
// 1. 引入模块
const http = require('http')
const template = require('art-template')
const path = require('path')
const urlModel = require('url');// 此模块是专门用于来解析URL的，尤其是get请求的URL
const fs = require('fs')

// 2. 创建服务器对象
var server = http.createServer()

// 3. 开启服务并监听端口
server.listen(3000,()=>{
  console.log('server is running at http://127.0.0.1:3000');
})

// 4.注册请求事件,监听请求
server.on('request',(req,res)=>{
  var urlObj = urlModel.parse(req.url,true)
  // 当第二个参数为true的时候,会将传递过来的参数转换为对象
  // pathname里面存储着真正的路径, 是不包括参数的,所以之后都要用pathname来判断路径
  // query里面存储着get方式传递过来的数据或参数
  var url =urlObj.pathname;
  var query = urlObj.query;
  console.log(url,query);
  var method = req.method; // 获取请求方式
  // 判断路径 
  if(method=='GET' && url=='/'){
   var htmlStr = template(path.join(__dirname,'views/index.html'),{})
   res.end(htmlStr)
  }else if(method=='GET' && url=='/register'){
    var htmlStr = template(path.join(__dirname, 'views/register.html'), {})
    res.end(htmlStr)
  }else if(method=='GET' && url=='/submit'){
    fs.readFile(path.join(__dirname,'./data.json'),'utf-8',(err,data)=>{
      if(err) return console.log(err.message);
      var arr = JSON.parse(data);// 将读取到的数据转换成数组对象
      arr.push(query) // 是将传递过来的数据追加到数组里面
      console.log(arr);
      // res.end('OK')
      // var str = JSON.stringify(arr)
      var str = JSON.stringify(arr,null,'  ')
      fs.writeFile(path.join(__dirname,'./data.json'),str,err=>{
        if(err) return console.log(err.message);
        res.writeHeader(200,{
          // 告诉浏览器以什么样的方式来解析服务器端响应回去的数据
          'Content-type': 'text/plain;charset=utf-8',
          // 告诉浏览器,在2秒后进行一个跳转,路径就是url的路径
          'refresh':'2;url=/register'
        })
        res.end(JSON.stringify({
          "code":0,
          "msg":"提交成功"
        }))  
      })
    })
  }else {
    res.end('404')
  }
})
```

## 接收POST过来的数据

由于POST请求是通过`请求体`来发送数据的，因此要使用如下方式来接收POST过来的数据

```js
const querystring = require('querystring');// 引入内置核心模块，此模块专门用于解析post过来的数据
// 在此接收post方式提交过来的数据
var str = '' // 定义一个字符串
req.on('data',chunk=>{
  // post方式发送过来的数据是一块一块的发送过来的，
  // 只要一有数据发送，就会触发data事件
  str += chunk
})

req.on('end',()=>{
    // 当end事件被执行的时候，说明已经接收完了所有的数据
  var obj = querystring.parse(str); // 将post过来的数据转换成对象
})
```

## JSON

即 JavaScript Object Notation，另一种轻量级的文本数据交换格式，独立于语言。

**语法规则**

1、JSON 中属性名称必须用双引号包裹

2、JSON 中表述字符串必须使用双引号

3、JSON 中不能有单行或多行注释

4、JSON中数据由逗号分隔(最后一个健/值对不能带逗号)

5、JSON中花括号保存对象方括号保存数组

6、JSON 没有 `undefined` 这个值

```js
[
  {
    "id": 1,
    "name": "tom",
    "age": 18,
    "gender": "男",
    "zhuanye": "前端",
    "address": "天河区"
  },
  {
    "id": 2,
    "name": "rose",
    "age": 19,
    "gender": "女",
    "zhuanye": "大数据",
    "address": "黄埔区"
  },
  {
    "id": 3,
    "name": "jerry",
    "age": 20,
    "gender": "男",
    "zhuanye": "python",
    "address": "越秀区"
  },
  {
    "id": 4,
    "name": "jodan",
    "age": 21,
    "gender": "男",
    "zhuanye": "java",
    "address": "白云区"
  }
]
```

**JSON解析**

JSON数据在不同语言进行传输时，类型为字符串，不同的语言各自也都对应有解析方法，需要解析完成后才能读取

1、Javascript 解析方法

JSON对象 JSON.parse()、 JSON.stringify()；

总结：JSON体积小、解析方便且高效，在实际开发成为首选。