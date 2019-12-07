// 时间格式化
export const dateformat = (data, spe) => {
  spe = spe || '-'
  let year = data.getFullYear()
  let month = data.getMonth() + 1
  let day = data.getDate()
  return year + spe + month + spe + day
}
