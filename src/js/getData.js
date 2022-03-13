/**
 * @description: 获取数据
 */

const { limit, api_url, author } = window.kkBBConfig

async function getData() {
  let url = api_url
  let pageSize = 10
  if (limit) pageSize = limit

  url = `${url}/api/ispeak?author=${author}&page=1&pageSize=${pageSize}`
  const token = window.localStorage.getItem('ispeak-token')
  const requestHeaders = {}
  if (token) {
    requestHeaders['Authorization'] = 'Bearer ' + token
  }
  const data1 = await fetch(url, { headers: requestHeaders })
  const data = await data1.json()
  return data.data
}

// getData()
module.exports = getData
