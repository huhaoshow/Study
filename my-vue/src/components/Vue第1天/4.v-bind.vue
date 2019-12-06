<template>
  <div class="v-bind">
    <h1>这个文件主要是用来说明v-bind的使用</h1>
    <!-- v-bind可以实现属性值的动态绑定 -->
    <a v-bind:href="'/del?id='+id">点击删除</a>
    <p :style="'font-size:'+size">我有自己的字体大小</p>
    <!-- 为动态属性进行动态绑定 -->
    <p :[userkey]="value">我有自己的样式</p>
    <!-- 可以动态判断 -->
    <p :class="{fontsize:true,skyblue:isskyblue}">我是天蓝色吗？</p>
    <!-- 简单案例,点击收缩/展开 -->
    <div :class="{menu:true,collepse:iscollepse}"></div>
    <button @click="iscollepse=!iscollepse">点击收缩</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: 9,
      size: '50px',
      userkey: 'style',
      value: 'color:pink',
      isskyblue: true,
      iscollepse: false
    }
  }
}
</script>

<style lang='css' scoped>
.skyblue {
  color: skyblue;
}
.fontsize {
  font-size: 50px;
}
.menu {
  width: 200px;
  height: 200px;
  background-color: #f00;
  transition: width 0.5s;
}
.collepse {
  width: 50px;
}
</style>
