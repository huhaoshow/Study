// 从axios配置中导入axios
import axios from '@/components/utils/myAxios.js'

// 将接口暴露出去
export const postObj = (data) => {
  return axios({
    url: '路由接口',
    method: 'post',
    data
  })
}
