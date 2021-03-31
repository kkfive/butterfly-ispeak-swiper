/**
 * @description: 入口文件
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-01-03 10:26:27
 * @LastEditTime: 2021-01-03 10:26:27
 * @LastEditors: 小康
 */
require('../css/index.less')
require('./inject')
const Swiper = require('./swiper-bundle.min.js')
const getData = require('./getData')
const filter = require('./filter')
const index = async () => {
  const data = await getData()
  const kangSwiper = document.querySelector(`#bbTimeList #bber-talk`)
  const aside = document.querySelector('.swiper-weapper-aside')
  let innerHtml = ''
  let asideInnerHtml = ''
  for (const bb of data) {
    const content = filter(bb.content)
    innerHtml += `<div class='li-style swiper-slide'>${content}</div>`
    asideInnerHtml += `<div class='swiper-slide aside-bbtalk'>${content}</div>`
  }
  kangSwiper.innerHTML = innerHtml
  aside.innerHTML = asideInnerHtml
  // 上方
  new Swiper('#bbtalk', {
    direction: 'vertical', // 垂直切换选项
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  })
  // 侧边栏
  new Swiper('.swiper-container-aside', {
    loop: true,
    autoHeight: false,
    effect: 'flip',
    autoplay: {
      delay: 2500,
      disableOnInteraction: true
    }
  })
}
index()
