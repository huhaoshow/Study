// 全局指令
// import Vue from 'vue'

// export const myfocus = Vue.directive('myfocus', {
//   inserted (el) {
//     el.focus()
//   }
// })
// export const setcolor = Vue.directive('setcolor', {
//   inserted (el, binding) {
//     el.style.color = binding.value
//   }
// })

// 指令封装
// 不需要引用Vue,且可以简化代码
// 将对象暴露出去,在vue组件中引用,在directives内注册,最后在DOM元素中使用
// 获取焦点
export const myfocus = {
  inserted (el) {
    el.focus()
  }
}
// 设置颜色
export const setcolor = {
  inserted (el, binding) {
    el.style.color = binding.value
  }
}
