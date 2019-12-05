<template>
  <div class="hello">
    <h1>欢迎再次来到{{msg}}世界</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Vue"
    };
  }
};
</script>

<style lang='css' scoped>
.hello h1 {
  font-size: 15px;
  color: skyblue;
  background-color: black;
}
</style>