// 在这个文件中,配置axios一些参数
// 从axios模块中导入axios
import axios from 'axios'

// 配置全局的baseURL---基本路径
axios.defaults.baseURL = 'http://127.0.0.1'

// 将axios暴露出去
export default axios
