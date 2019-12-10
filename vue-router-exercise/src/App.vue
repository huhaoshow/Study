<template>
  <div id="app">
    <h1>这是根组件</h1>
    <!-- 添加路由超链接 -->
    <router-link to="/index">首页</router-link>&nbsp;
    <br>
    <router-link to="/list/1">你的名字</router-link>&nbsp;
    <router-link to="/list/2">Re:从零开始的异世界生活</router-link>&nbsp;
    <router-link to="/list/3">海绵宝宝</router-link>&nbsp;
    <router-link to="/list/4">东京喰种</router-link>&nbsp;
    <router-link to="/list/5">灌篮高手</router-link>&nbsp;
    <router-link to="/list/6">黑子的篮球</router-link>&nbsp;
    <router-link to="/list/7">Love Live</router-link>&nbsp;
    <router-link to="/list/8">进击的巨人</router-link>&nbsp;
    <router-link to="/list/9">犬夜叉</router-link>
    <!-- 添加路由映射展示区域 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="less">
  img{
    width: 100%
  }
</style>
