<template>
  <div class="hello">
    <h1>欢迎来到我的{{msg}}世界</h1>
  </div>
</template>

<script>
// 也可以通过export default 来将内容暴露出去,而且建议使用export default,因为一个vue文件只描述一个组件，所以这个组件就可以当成默认需要返回的对象
export default {
  data() {
    return {
      msg: "Vue"
    };
  }
};
</script>

<style lang='less' scoped>
// lang:可以指定样式的类型，如指定预处理器less
// scoped:定义当前样式是组件作用域样式：只有在当前组件中可以使用
.hello h1 {
  color: skyblue;
  font-size: 25px;
}
</style>