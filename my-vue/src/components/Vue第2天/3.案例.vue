<template>
<div id="app">
        <div class="add">
        编号:<input type="text" v-model="newData.id" ref="id">
        品牌名称:<input type="text" v-model="newData.name" v-setcolor="'skyblue'">
            <input type="button" value="添加" @click="add">
        </div>
        <div class="add">
            品牌名称:
            <input type="text" placeholder="请输入搜索条件" v-myfocus>
        </div>
        <div>
            <table class="tb">
                <tbody>
                    <tr>
                        <th>编号</th>
                        <th>式神名称</th>
                        <th>创立时间</th>
                        <th>操作</th>
                    </tr>
                    <tr v-for="(value,index) in data" :key='index'>
                        <td>{{value.id}}</td>
                        <td>{{value.name}}</td>
                        <td>{{value.time | dateformat('-')}}</td>
                        <td>
                            <!-- 在遍历的时候获取到索引值,将索引值传递给函数,在点击删除的时候将对应的数据删除 -->
                            <a href="#" @click.prevent='del(index)'>删除</a>
                        </td>
                    </tr>
                    <!-- 添加一行提示结构,用v-if判断,如果没有数据的话,就显示着行提示结构 -->
                    <tr v-if="data.length===0">
                        <td colspan="4">没有数据了！！！</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
// 引入,通过解构来获取你想使用的指令对象
// ES6新语法,解构赋值,将原先是对象的结构去除,获得其中的成员然后赋值给新对象
import { myfocus, setcolor } from '../until/myDirectives.js'
// import { dateformat } from '../until/filters'
export default {
  data () {
    return {
      data: [
        { id: 1,
          name: '不知火',
          time: new Date() },
        { id: 2,
          name: '大天狗',
          time: new Date() },
        { id: 3,
          name: '妖刀姬',
          time: new Date() },
        { id: 4,
          name: '酒吞童子',
          time: new Date() },
        { id: 5,
          name: '茨木童子',
          time: new Date() },
        { id: 6,
          name: '泷夜叉姬',
          time: new Date() },
        { id: 7,
          name: '青行灯',
          time: new Date() }
      ],
      newData: {
        id: '',
        name: '',
        time: new Date()
      }
    }
  },
  methods: {
    add () {
    // 如果直接添加对象,由于对象的赋值会将地址赋值过去,所以会使每次添加修改的对象都是同一个
    //   this.data.push(this.newData)
    // 用展开运算符可以解决,展开运算符可以将对象内的成员获取出来,然后再赋值到一个新对象后在添加到原数组中
      this.data.push({ ...this.newData })
    },
    del (index) {
      this.data.splice(index, 1)
    }
  },
  //   mounted钩子函数是数据和模板关联已经完成以后触发的函数,类似于window.onload,是一个单独的结构
  mounted () {
    console.log(this, this.$refs.id)
    // this.$refs.id.focus()
  },
  // 虽然上面这种虽然可以，但是代码不够灵活，它的元素是固定定死的，如果以后有不同的元素需要此功能，那么修改源代码
  // 自定义指令
  directives: {
    // 指令封装注册
    // ES6语法,对象内当键和值相等时可以合并缩写
    myfocus,
    setcolor
    // 局部指令
    // 获得焦点
    // myfocus: {
    //   // 钩子函数,当被绑定的元素插入到 DOM 中时触发
    //   inserted (el, bingding) {
    //     // el:当前使用这个指令的元素
    //     // bindding:一个对象，包含很多属性，其中的value：指令的绑定值
    //     // console.log(el, bingding)
    //     el.focus()
    //   }
    // },
    // 自定义颜色设置
    // setcolor: {
    //   inserted (el, binding) {
    //     // console.log(binding.value)
    //     el.style.color = binding.value
    //   }
    // }
  },
  filters: {
    // 过滤器封装
    // dateformat
    // 局部过滤器
    dateformat: (data, spe) => {
      spe = spe || '/'
      let year = data.getFullYear()
      let month = data.getMonth() + 1
      let day = data.getDate()
      return year + spe + month + spe + day
    }
  }
}
</script>
<style lang='less' scoped>
    #app {
            width: 600px;
            margin: 10px auto;
        }

        .tb {
            border-collapse: collapse;
            width: 100%;
        }

        .tb th {
            background-color: #0094ff;
            color: white;
        }

        .tb td,
        .tb th {
            padding: 5px;
            border: 1px solid black;
            text-align: center;
        }

        .add {
            padding: 5px;
            border: 1px solid black;
            margin-bottom: 10px;
        }
</style>
