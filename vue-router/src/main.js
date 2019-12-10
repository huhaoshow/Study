import Vue from 'vue'
import router from '@/router/index.js'
import App from '@/App.vue'
Vue.config.productionTip = false

new Vue({
  // 在Vue中注入配置好参数的router,从而让整个应用都有路由功能
  router,
  render: h => h(App)
}).$mount('#app')
