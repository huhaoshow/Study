<template>
  <div class="daughter">
    <h3>我是派大星</h3>
    <button @click='tellHave'>点击告诉小海绵,今天有没有准备好！</button>
  </div>
</template>

<script>
import eventBus from '@/utils/myEventBus.js'
export default {
  // 数据对象函数
  data () {
    return {
      isReady: '准备好了！'
    }
  },
  // 事件函数对象
  methods: {
    tellHave () {
      eventBus.$emit('isReady', {
        isReady: this.isReady
      })
    }
  }
}
</script>

<style>

</style>
