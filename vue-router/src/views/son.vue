<template>
  <div class="son">
      <h3>这个是小海绵</h3>
      <p>{{move}}是从父组件接收过来的</p>
      <p>派大星告诉我,他今天{{isReady}}</p>
      <button @click='tellHave'>点击告诉老海绵,小海绵有没有女朋友</button>
      <input type="hidden" @click='tellName' ref="tell">
  </div>
</template>

<script>
import eventBus from '@/utils/myEventBus.js'
export default {
  // 数据对象函数
  data () {
    return {
      sonName: '小海绵',
      gfName: '小糊涂',
      isHave: '有',
      isReady: '???'
    }
  },
  // 钩子函数
  mounted () {
    eventBus.$on('isReady', (data) => {
      this.isReady = data.isReady
    })
  },
  // 属性变量数组
  props: ['move'],
  // 方法函数对象
  methods: {
    tellHave () {
      this.$refs.tell.click()
      this.$emit('isHave', this.isHave)
    },
    tellName () {
      this.$emit('getName', this.gfName)
    }
  }
}
</script>

<style>

</style>
