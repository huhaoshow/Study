<template>
  <div class="v-text">
    <h1>这个文件主要用来说明v-text的使用</h1>
    <!-- v-text这类指令都是当成属性来添加和使用 -->
    <!-- v-text会将标签内的内容全部替换 -->
    <p v-text="name"></p>
    <!-- v-text可以做和插值表达式一样的事 -->
    <p v-text="age>18?'成年':'未成年'"></p>
    <p v-text="msg.toUpperCase().substring(0,1)+msg.substring(1)"></p>
    <p v-text="age+1"></p>
    <p v-text="name+'想要和你说'+msg"></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '小海绵',
      age: 24,
      msg: 'hello'
    }
  }
}
</script>

<style>
</style>
