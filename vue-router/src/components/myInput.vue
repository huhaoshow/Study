<template>
  <input :type="type" class="inp" :placeholder='placeholder' :value="value" @input='handleInput'>
</template>

<script>
export default {
  // 变量数组
  props: ['type', 'placeholder', 'value'],
  //   事件处理函数对象
  methods: {
    handleInput (event) {
      this.$emit('input', event.target.value)
    //   console.log(event.target.value)
    }
  }
}
</script>

<style lang='less' scoped>
.inp{
    border: none;
    outline: none;
    border-bottom: 1px solid #ccc;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
}
</style>
