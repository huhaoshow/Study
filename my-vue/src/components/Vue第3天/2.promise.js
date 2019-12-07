const fs = require('fs')
const path = require('path')

// 创建promise实例对象,在Promise构造函数中有一个回调函数A,new Promise(回调函数A)
// 回调函数A也有两个参数resolve和reject,这两个参数也是回调函数
// 在该案例中,构造函数内的回调函数是读取a文件中的内容,
// 如果读取失败则把错误信息err作为reject的参数调用reject,
// 否则把读取到的数据data作为resolve的参数调用resolve
// resolve 成功之后的回调函数
// reject 失败之后的回调函数
let p1 = new Promise((resolve, reject) => {
  fs.readFile(path.join(__dirname, './data/a.txt'), 'utf-8', (err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})
let p2 = new Promise((resolve, reject) => {
  fs.readFile(path.join(__dirname, './data/b.txt'), 'utf-8', (err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})
let p3 = new Promise((resolve, reject) => {
  fs.readFile(path.join(__dirname, './data/c.txt'), 'utf-8', (err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})
// p1是promise实例对象 在Promise的原型上有then和catch方法
// p1.then和p1.catch都是函数
// p1.then(回调函数B)可以将resolve回调函数指定成回调函数B并执行Promise的回调函数
// p1.catch(回调函数C)可以将reject回调函数指定成回调函数C并执行Promise的回调函数
console.log(p1)
console.log(p1, p1.then, p1.then(), p1.catch, p1.catch())

// 执行promise,解决回调地狱的问题
// Promise函数可以承诺先执行完当前函数,将下一步需要执行的promise对象来返回:实现了一个链式编程
p1.then((res) => {
  console.log(res)
  return p2
}).then((res) => {
  console.log(res)
  return p3
}).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})
