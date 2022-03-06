/**
 * @description: 入口文件
 */
require('../css/index.less')
require('./inject')
const Swiper = require('./swiper-bundle.min.js')
const getData = require('./getData')
const filter = require('./filter')
const index = async () => {
  let innerHtml = ''
  let asideInnerHtml = ''
  try {
    const data = await getData()
    const kangSwiper = document.querySelector(`#bbTimeList #bber-talk`)
    const aside = document.querySelector('.swiper-weapper-aside')
    console.log(data)
    for (const bb of data.items) {
      const content = filter(bb.content)
      innerHtml += `<div class='li-style swiper-slide'>${content}</div>`
      asideInnerHtml += `<div class='swiper-slide aside-bbtalk'>${content}</div>`
    }
    kangSwiper.innerHTML = innerHtml
    aside.innerHTML = asideInnerHtml
  } catch (e) {
    innerHtml += `<div class='li-style swiper-slide'>获取失败</div>`
    asideInnerHtml += `<div class='swiper-slide aside-bbtalk'>获取失败</div>`
  }

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
