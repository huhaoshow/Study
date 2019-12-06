<template>
  <div class="v-html">
    <h1>这个文件主要是用来说明v-html的使用</h1>
    <!-- v-html可以解析html结构,html也会替换标签内的全部内容 -->
    <p v-html="'<h2>h2标签</h2>'+name"></p>
    <!-- v-html可以做和插值表达式一样的事 -->
    <p v-html="age>18?'成年':'未成年'"></p>
    <p v-html="msg.toUpperCase().substring(0,1)+msg.substring(1)"></p>
    <p v-html="age+1"></p>
    <p v-html="name+'想要和你说'+msg"></p>
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
