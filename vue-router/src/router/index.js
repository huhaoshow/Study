// 这个文件是用来配置路由模块的
// 引入Vue
import Vue from 'vue'
// 引入路由模块 VueRouter:路由的构造函数，通过它可以创建路由对象
import VueRouter from 'vue-router'
// 引入需要路由映射的组件
import Index from '@/views/Index.vue'
import Product from '@/views/Product.vue'
import HH from '@/views/SmallHH.vue'
import HT from '@/views/SmallHT.vue'
import Other from '@/views/Other.vue'

// 将VueRoute挂载到Vue,让Vue可以使用VueRouter进行路由管理
// 挂载后,Vue组件就会添加一些成员,如$route和$router
Vue.use(VueRouter)

// 创建路由实例 router:路由实例,在main.js中注入
let router = new VueRouter({
  // 配置路由 routes:路由对象,是一个数组，里面的每一个成员都是一个单独的路由对象
  routes: [
    {
      name: 'default',
      path: '/',
      redirect: { name: 'index' }
    },
    {
      // name: 路由的名称,不能重复,可以为之后的路由跳转提供便利
      name: 'index',
      // path: 路由路径,在其他文件中可以通过path来映射组件
      path: '/index',
      // component: 当前路由所映射的组件,它是一个组件对象，绝对不要写成字符串
      component: Index
    },
    {
      name: 'product',
      // 路由的传参通过在path后面添加/:形参
      // :只是一个标识,标记之后的内容是形参
      path: '/product/:id',
      component: Product,
      // 设置嵌套路由,使用children属性,它是一个数组,里面的每一个成员都一个单独的嵌套路由配置,每个配置都是一个对象，可以设置的成员与之前的路由配置完全一致
      children: [
        // 嵌套路由的组件会映射在父容器的router-view中
        {
          name: 'HH',
          // 嵌套路由一般不会添加/,添加/并不是错误的路由的配置，只是添加了/的路由都被认为是根路由，会屏蔽掉路由的嵌套结构
          path: 'HH',
          component: HH
        },
        {
          name: 'HT',
          path: 'HT',
          component: HT
        },
        {
          name: 'other',
          path: 'other',
          component: Other
        }
      ]
    }
  ]
})
// 将路由对象暴露出去
export default router
