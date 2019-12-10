<template>
  <div class="product">
    <h2>这是产品页</h2>
    <h1>{{info}}</h1>
    <button @click="jump">点击查看详情</button>
    <!-- 添加嵌套结构 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: '',
      id: ''
    }
  },
  mounted () {
    // console.log(this.$route)
    // console.log(typeof this.$route.params.id)
    // 路由带的参数存放组件的$route成员中的params内
    // console.log(this.id)
    this.id = this.$route.params.id
    if (this.id === '1') {
      this.info = '这是小海绵页面'
    } else if (this.id === '2') {
      this.info = '这是小糊涂页面'
    } else if (this.id === '3') {
      this.info = '这是其他页面'
    }
  },
  watch: {
    '$route' (to, from) {
      // console.log(to, from)
      this.id = to.params.id
      if (this.id === '1') {
        this.info = '这是小海绵页面'
      } else if (this.id === '2') {
        this.info = '这是小糊涂页面'
      } else if (this.id === '3') {
        this.info = '这是其他页面'
      }
    }
  },
  methods: {
    jump () {
      if (this.id === '1') {
        // console.log(this.$router)
        // $router  可以实现路由的跳转，它是代码形式--编程式导航
        // 可以将路由地址添加到url中
        this.$router.push({ name: 'HH' })
      } else if (this.id === '2') {
        // 嵌套路由的传参
        // 若通过path来添加路由地址,传参需要用query,传递的参数会显示在URL地址栏中
        // 若通过name来添加路由地址,传参需要用params,传递的参数会在组件的$route成员内的paramas内
        // this.$router.push({ name: 'HT', params: { username: 'jack' } })
        this.$router.push({ path: `/product/${this.id}/HT`, query: { username: 'jack' } })
      } else if (this.id === '3') {
        this.$router.push({ name: 'other' })
      }
    }
  }
}
</script>

<style>

</style>
