<template>
  <div class="first">
    <h1>这个文件主要用来说明插值表达式的使用</h1>
    <!-- 插值表达式只能写在标签之间 -->
    <p>{{name}}</p>
    <!-- 字符串拼接 -->
    <p>{{name+'是一个小伙子'}}</p>
    <!-- 实现算术表达式,但不能写语句,不能实现自增或自减 -->
    <p>{{age+1}}</p>
    <!-- 调用Api -->
    <p>{{msg.toUpperCase().substring(0,1)+msg.substring(1)}}</p>
    <!-- 添加三元表达式,但不能添加if逻辑语句 -->
    <p>{{age>18?'成年':'未成年'}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '小海绵',
      age: 17,
      msg: 'hello'
    }
  }
}
</script>

<style>
</style>
