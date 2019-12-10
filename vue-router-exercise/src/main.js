import Vue from 'vue'
import router from '@/router/index.js'
import App from '@/App.vue'
Vue.config.productionTip = false

new Vue({
  // 将配置好的路由注入
  router,
  render: h => h(App)
}).$mount('#app')
