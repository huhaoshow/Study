<template>
  <div class="showif">
      <h1>这个文件主要说明了v-show和v-if的使用</h1>
      <!-- 控制元素是否在页面上显示 -->
      <button @click='isshow=!isshow'>点击切换</button>
      <p>小糊涂</p>
      <!-- v-if是通过删除和创建标签来实现元素的显示和隐藏 -->
      <p v-if="isshow">v-if</p>
      <p>小海绵</p>
      <!-- v-show是通过添加display='none'属性来实现属性的显示和隐藏 -->
      <p v-show='isshow'>v-show</p>
      <!-- v-if的分支结构 -->
      <input type="text" v-model="score">
        <p v-if="score>=90">A</p>
        <p v-else-if="score>=80">B</p>
        <p v-else-if="score>=70">C</p>
        <p v-else>D</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isshow: true,
      score: ''
    }
  }
}
</script>

<style>

</style>
