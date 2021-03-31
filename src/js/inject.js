/**
 * @description: 插入dom元素
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-03-30 20:08:08
 * @LastEditTime: 2021-03-30 20:08:08
 * @LastEditors: 小康
 */
;(function () {
  const element = document.createElement('div')
  element.id = 'bbTimeList'
  element.className = 'bbTimeList container'
  console.log(window.kkBBConfig.blog || '/bb/')
  element.addEventListener('click', function () {
    window.location.href = window.kkBBConfig.blog || '/bb/'
  })
  element.innerHTML = `<i class='bber-gotobb far fa-comment-alt'></i>
  <div class="swiper-container" id="bbtalk">
    <div class='swiper-wrapper' id='bber-talk'></div>
  </div>
  <i class="bber-gotobb fas fa-angle-double-right pass"></i>
  `
  const anchor = document.getElementsByClassName('recent-post-item')[0]
  const parent = anchor.parentElement
  parent.insertBefore(element, anchor)
})()
