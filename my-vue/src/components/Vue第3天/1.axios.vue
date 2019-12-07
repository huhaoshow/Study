<template>
  <div class="axios">
      <button @click="get">get方式请求不带参</button>
      <button @click="getUrl">get方式请求在url带参</button>
      <button @click="getObj">get方式请求参数包装成对象</button>
      <button @click="postObj">post请求方式</button>
  </div>
</template>

<script>
// import axios from 'axios'
// import axios from '@/utils/myAxios'
import { postObj } from '@/api/cate.js'
export default {
  methods: {
    // get () {
    //   axios.get('http://localhost:3000/api/v1/admin/user/info')
    //     .then((res) => {
    //       console.log(res)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // },
    // getUrl () {
    //   axios.get('http://localhost:3000/api/v1/admin/user/login?id=5', {
    //     username: '小海绵',
    //     password: '1596321'
    //   })
    //     .then((res) => {
    //       console.log(res)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // },
    // getObj () {
    //   axios.get('请求地址', {
    //     params: {
    //       id: 1
    //     }
    //   })
    //     .then((res) => {
    //       console.log(res)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // },
    postObj () {
      // axios.post('请求地址', { id: 1 })
      //   .then((res) => {
      //     console.log(res)
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })

      // config为axios的配置,是一个对象
      // axios(config)方法
      // axios({
      //   url: '请求地址',
      //   method: 'post',
      //   data: { id: 1 },
      //   baseURL: '加载URL前面,若url是绝对路径则不加'
      // }).then((res) => {
      //   console.log(res)
      // }).catch((err) => {
      //   console.log(err)
      // })

      // 封装的axios
      // axios({
      //   url: '请求地址',
      //   method: 'post',
      //   data: { id: 1 }
      //   // 在myAxios.js文件中给axios设置了baseURL,所以不需再重写
      // }).then((res) => {
      //   console.log(res)
      // }).catch((err) => {
      //   console.log(err)
      // })

      // 二次封装axios
      postObj({ id: 1 }).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>
