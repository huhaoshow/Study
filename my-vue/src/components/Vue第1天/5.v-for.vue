<template>
  <div class="v-for">
    <h1>这个文件主要说明v-for的使用</h1>
    <!-- 想要循环生成什么结构就在该结构处用v-for -->
    <!-- v-for循环数组  eslint的存在,key必须要被指定,循环数组时必须将key指定为index-->
    <!-- 循环数组内的每个成员,参数1value代表当前循环的成员的值,参数2index,代表前面循环成员的索引值 -->
    <table border="1">
      <tr>
        <th>名字</th>
        <th>性别</th>
        <th>级别</th>
        <th>所属</th>
      </tr>
      <tr v-for="(value,index) in data" v-bind:key="index">
        <td>{{data[index].name}}</td>
        <td>{{data[index].gender}}</td>
        <td>{{data[index].level}}</td>
        <td>{{data[index].address}}</td>
      </tr>
    </table>
    <!-- v-for循环对象 eslint的存在,key必须要被指定,循环数组时必须将key指定为key-->
    <!-- 循环对象内的每个成员,参数1value代表当前循环的成员的值,参数2key代表当前成员的键,参数3index代表对应的索引值 -->
    <ul v-for="(value,key,index) in data2" :key="index">
      <li>{{value}}-{{index}}-{{key}}</li>
      <!-- <li>{{value}}</li>
      <li>{{index}}</li>
      <li>{{key}}</li>-->
    </ul>
    <!-- 普通循环 -->
    <p v-for="value in data" :key='value.id'>
      {{value}}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          id: 1,
          name: '不知火',
          gender: '女',
          level: 'ssr',
          address: '不详'
        },
        {
          id: 2,
          name: '妖刀姬',
          gender: '女',
          level: 'ssr',
          address: '安倍晴明'
        },
        {
          id: 3,
          name: '大天狗',
          gender: '男',
          level: 'ssr',
          address: '黑晴明'
        },
        {
          id: 4,
          name: '酒吞童子',
          gender: '男',
          level: 'ssr',
          address: '大江山'
        }
      ],
      data2: {
        name: '小海绵',
        age: 24,
        gender: '男',
        address: '广州'
      },
      data3: '小糊涂'
    }
  }
}
</script>

<style>
</style>
