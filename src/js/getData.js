/**
 * @description: 获取数据
 */

const { limit, api_url, author } = window.kkBBConfig

async function getData() {
  let url = api_url
  let pageSize = 10
  if (limit) pageSize = limit

  url = `${url}/api/ispeak?author=${author}&page=1&pageSize=${pageSize}`

  const data1 = await fetch(url)
  const data = await data1.json()
  return data.data
}

// getData()
module.exports = getData
