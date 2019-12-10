// 引入vue和vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入需要映射的组件
import Index from '@/views/Index.vue'
import List from '@/views/List.vue'
import Namaiwa from '@/views/1.Namaiwa.vue'
import Re0 from '@/views/2.Re0.vue'
import Pinapple from '@/views/3.Pinapple.vue'
import Tokyo from '@/views/4.Tokyo.vue'
import Sakura from '@/views/5.Sakura.vue'
import Kuroko from '@/views/6.Kuroko.vue'
import LoveLive from '@/views/7.LoveLive.vue'
import Huge from '@/views/8Huge.vue'
import Dog from '@/views/9.Dog.vue'
// 将VueRouter挂载到Vue上,使Vue组件可以使用路由模块管理路由
Vue.use(VueRouter)

// 创建路由实例
let router = new VueRouter({
  // 配置路由
  routes: [
    {
      name: '/',
      path: '/',
      redirect: { name: 'index' }
    },
    {
      name: 'index',
      path: '/index',
      component: Index
    },
    {
      name: 'list',
      path: '/list/:id',
      component: List,
      children: [
        {
          name: 'Namaiwa',
          path: '/Namaiwa',
          component: Namaiwa
        },
        {
          name: 'Re0',
          path: '/Re0',
          component: Re0
        },
        {
          name: 'Pinapple',
          path: '/Pinapple',
          component: Pinapple
        },
        {
          name: 'Tokyo',
          path: '/Tokyo',
          component: Tokyo
        },
        {
          name: 'Sakura',
          path: '/Sakura',
          component: Sakura
        },
        {
          name: 'Kuroko',
          path: '/Kuroko',
          component: Kuroko
        },
        {
          name: 'LoveLive',
          path: '/LoveLive',
          component: LoveLive
        },
        {
          name: 'Huge',
          path: '/Huge',
          component: Huge
        },
        {
          name: 'Dog',
          path: '/Dog',
          component: Dog
        }
      ]
    }
  ]
})

// 暴露路由
export default router
