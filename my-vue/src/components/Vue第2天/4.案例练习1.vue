<template>
<div id="app">
        <div class="add">
            编号:
            <input type="text" v-model="newData.id" v-myFocus> 动漫名称:
            <input type="text" v-model="newData.name" v-setColor="'#666'">
            <input type="button" value="添加" @click="add">
        </div>
        <div class="add">
            品牌名称:
            <input type="text" placeholder="请输入搜索条件">
        </div>
        <div>
            <table class="tb">
                <tbody>
                    <tr>
                        <th>编号</th>
                        <th>动漫名称</th>
                        <th>创立时间</th>
                        <th>操作</th>
                    </tr>
                    <tr v-for="(value,index) in dataList" :key='value.id'>
                        <td>{{value.id}}</td>
                        <td>{{value.name}}</td>
                        <td>{{value.time | formatDate('-')}}</td>
                        <td>
                            <a href="#" @click.prevent="del(index)">删除</a>
                        </td>
                    </tr>
                    <tr v-show="dataList.length===0">
                      <td colspan="4">你这啥也没有啊！！！</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  // mounted钩子函数,是一个函数,类似window.onload
  mounted () {
    console.log('你的页面准备好了！')
  },
  // 数据函数,是一个函数
  data () {
    return {
      dataList: [
        { id: 1,
          name: '游戏王',
          time: new Date()
        },
        { id: 2,
          name: '东京喰种',
          time: new Date()
        },
        { id: 3,
          name: '寄生兽',
          time: new Date()
        },
        { id: 4,
          name: '死神',
          time: new Date()
        },
        { id: 5,
          name: '史莱姆',
          time: new Date()
        }
      ],
      newData: {
        id: '',
        name: '',
        time: new Date()
      }
    }
  },
  // 事件方法,是一个对象
  methods: {
    add () {
      this.dataList.push({ ...this.newData })
    },
    del (index) {
      this.dataList.splice(index, 1)
    }
  },
  // 指令,是一个对象
  directives: {
    // 获得焦点
    myFocus: {
      inserted (el) {
        el.focus()
      }
    },
    // 设置颜色
    setColor: {
      inserted (el, binding) {
        el.style.color = binding.value
      }
    }
  },
  // 过滤器,是一个对象
  filters: {
    // 事件格式化
    formatDate (data, spe) {
      spe = spe || '/'
      let year = data.getFullYear()
      let month = data.getMonth()
      let day = data.getDate()
      return year + spe + month + spe + day
    }
  }
}

</script>

<style lang='css' scoped>
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
