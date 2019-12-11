<template>
  <div class="index">
    <h2>这是首页</h2>
    <!-- 两个输入框达到的效果是一样的,都是实现动态绑定 -->
    <myInput type='text' placeholder="请输入用户名" :value='currentUser.userName' @input="handleInput"></myInput><br><br>
    <!-- 用v-model来实现的前提条件是需要子组件发射的事件类型必须为input -->
    <myInput type='password' placeholder='请输入密码' v-model="currentUser.userPwd"></myInput>
    <h3>这个是老海绵</h3>
    <p>小海绵告诉我,他{{isHave}}女朋友</p>
    <p v-if='isHave==="有"'>小海绵找了个女朋友,小海绵告诉我她的名字叫{{gfName}}</p>
    <son :move='msg' @getName='dealName' @isHave='dealHave'></son>
    <daughter></daughter>
    <myButton type='success' @click='login'>登录</myButton>
  </div>
</template>

<script>
import myButton from '@/components/myButton.vue'
import myInput from '@/components/myInput.vue'
import son from '@/views/son.vue'
import daughter from '@/views/daughter.vue'
export default {
// 钩子函数
  mounted () {

  },
  // 数据对象函数
  data () {
    return {
      msg: '你好',
      gfName: '???',
      isHave: '???',
      currentUser: {
        userName: 'huhaomine',
        userPwd: '1596321'
      }
    }
  },
  // 组件注册对象
  components: {
    son, daughter, myButton, myInput
  },
  // 事件方法函数对象
  methods: {
    dealName (data) {
      this.gfName = data
    },
    dealHave (data) {
      this.isHave = data
    },
    sayHi (data) {
      console.log(123, data)
    },
    login () {
      console.log(this.currentUser)
    },
    handleInput (data) {
      this.currentUser.userName = data
    }
  }
}
</script>

<style>

</style>
