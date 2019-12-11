<template>
  <div class="btn" :class="{red:type==='danger',pink:type==='warring',green:type==='success'}" @click='handleClick'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['type'],
  //  事件函数对象
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang='less' scoped>
.btn{
    max-width: 100px;
    text-align: center;
    height: 36px;
    line-height: 36px;
    border:1px solid #ccc
}
.red{
    background: red;
    color: #000
}
.green{
    background: skyblue;
    color: #000
}
.pink{
    background: pink;
    color:#000
}
</style>
