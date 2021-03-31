/**
 * @description: 获取数据
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-03-30 20:33:02
 * @LastEditTime: 2021-03-30 20:33:03
 * @LastEditors: 小康
 */

const { limit, api_url } = window.kkBBConfig

async function getData() {
  let url = ''
  if (api_url.includes('.json')) {
    // 使用的是json文件
    url = api_url
  } else {
    // 使用的是api接口
    url = `${api_url}?limit=${limit}`
  }
  const data1 = await fetch(url)
  const data = await data1.json()
  return data.data
}

// getData()
module.exports = getData
