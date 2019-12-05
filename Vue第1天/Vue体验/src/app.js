// 第1遍
// // 引入Vue
// import Vue from 'vue';
// // 引入组件
// import hello from './components/hello.vue';
// // 创建Vue实例
// new Vue({
//     // 配置el,指定模板范围
//     el: '#app',
//     // render函数可以实现组件的渲染，它本身是一个函数，函数有一个回调函数h,这个h是真正的能够渲染的函数
//     render: (h) => {
//         // 我们只需要将渲染结构来返回，Vue实例就会将这个结果填充到指定的位置
//         return h(hello);
//     }
// });

// 第2遍
// 引入vue
import Vue from 'vue';
// 引入组件
import hello from './components/helloVue.vue';
// 创建Vue实例
new Vue({
    el: '#app',
    render: (h) => {
        return h(hello);
    }
});