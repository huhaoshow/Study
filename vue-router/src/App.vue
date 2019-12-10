<template>
  <div id="app">
    <h1>这是根组件</h1>
    <!-- router-link路由超链接  声明式导航,页面不会刷新,会跳转到to指定的路径下-->
    <router-link to="/index">首页</router-link>&nbsp;
    <br>
    <!-- router-link 和 <a href="#"></a> 锚标签作用一致,但是习惯使用router-link来进行跳转-->
    <router-link to="/product/1">小海绵</router-link>&nbsp;
    <!-- <a href="#/product/1">小海绵</a> -->
    <router-link to='/product/2'>小糊涂</router-link>&nbsp;
    <router-link to='/product/3'>其他</router-link>&nbsp;
    <!-- 添加路由映射的组件的展示区域router-view，一定要设置展示区域，否则组件内容并不可见 -->
    <!-- router-view 在路由中配置的组件会映射到router-view中 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="less">

</style>
