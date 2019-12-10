<template>
  <div class="list">
      <h2>这是列表页面</h2>
      <h3>{{info}}</h3>
      <button @click="jump">点击查看图片</button>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  // 数据函数
  data () {
    return {
      id: '',
      info: ''
    }
  },
  // mounted钩子函数
  mounted () {
    this.getData()
  },
  // 方法对象
  methods: {
    getData () {
      this.id = this.$route.params.id
      if (this.id === '1') {
        this.info = '你的名字,在补考名单上面'
      } else if (this.id === '2') {
        this.info = '拉姆和蕾姆'
      } else if (this.id === '3') {
        this.info = '我准备好了！'
      } else if (this.id === '4') {
        this.info = '金木研和神代利世'
      } else if (this.id === '5') {
        this.info = '庶民上篮'
      } else if (this.id === '6') {
        this.info = '第六人---黑子哲也'
      } else if (this.id === '7') {
        this.info = '成为偶像吧！！！'
      } else if (this.id === '8') {
        this.info = '只要有你在,我就无所不能'
      } else if (this.id === '9') {
        this.info = '听说四魂之玉是一个能增强妖力,对不对啊！'
      }
    },
    jump () {
      if (this.id === '1') {
        this.$router.push({ name: 'Namaiwa' })
      } else if (this.id === '2') {
        this.$router.push({ name: 'Re0' })
      } else if (this.id === '3') {
        this.$router.push({ name: 'Pinapple' })
      } else if (this.id === '4') {
        this.$router.push({ name: 'Tokyo' })
      } else if (this.id === '5') {
        this.$router.push({ name: 'Sakura' })
      } else if (this.id === '6') {
        this.$router.push({ name: 'Kuroko' })
      } else if (this.id === '7') {
        this.$router.push({ name: 'LoveLive' })
      } else if (this.id === '8') {
        this.$router.push({ name: 'Huge' })
      } else if (this.id === '9') {
        this.$router.push({ name: 'Dog' })
      }
    }
  },
  // 侦听器对象
  watch: {
    '$route' (to, from) {
      this.id = to.params.id
      this.getData()
    }
  }
}
</script>

<style>

</style>
