<template>
  <div class="v-on">
      <h1>这个文件主要用来说明v-on的使用</h1>
      <!-- 普通调用方式 -->
      <button v-on:click="sayHi">点击触发</button>
      <!-- 简写 -->
      <button @click="sayHi">点击触发</button>
      <!-- 带参数的事件 -->
      <button @click="say('小海绵',$event)">点我带参</button>
      <!-- 动态绑定事件 -->
      <button @[type]="sayHi">动态触发</button>
      <!-- 事件修饰符 -->
        <!-- 阻止默认行为.prevent -->
        <a href="http://www.baidu.com" @click.prevent>页面不跳转</a>
        <!-- 只当事件是从特定键触发时才触发回调.keycode | keyAlias -->
        <input type="text" @keyup.enter='sayHi'>
        <!-- 只触发一次回调.once -->
        <input type="password" @keyup.13.once='sayHi'>

  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '小糊涂',
      age: 18,
      type: 'dblclick'
    }
  },
  // 方法一般都写在methods结构内,methods是一个单独的结构
  // 在methods内this的指向是该vue组件
  methods: {
    sayHi ($event) {
      console.log('欢迎来到Vue世界', $event)
    },
    say (data, $event) {
      console.log(this)
      console.log(data, $event)
      console.log('欢迎' + this.name + '来到Vue世界')
    }
  }
}
</script>

<style>

</style>
