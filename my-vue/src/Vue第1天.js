import Vue from 'vue'
// import App from './components/Vue第1天/1.插值表达式.vue'
// import App from './components/Vue第1天/2.v-text.vue'
// import App from './components/Vue第1天/3.v-html.vue'
// import App from './components/Vue第1天/4.v-bind.vue'
import App from './components/Vue第1天/5.v-for.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
