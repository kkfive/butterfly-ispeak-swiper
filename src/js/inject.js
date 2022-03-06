/**
 * @description: 插入dom元素
 */
;(function () {
  const element = document.createElement('div')
  element.id = 'bbTimeList'
  element.className = 'bbTimeList container'
  element.addEventListener('click', function () {
    window.location.href = window.kkBBConfig.blog || '/speak/'
  })
  element.innerHTML = `<i class='bber-gotobb far fa-comment-alt'></i>
  <div class="swiper-container" id="bbtalk">
    <div class='swiper-wrapper' id='bber-talk'></div>
  </div>
  <i class="bber-gotobb fas fa-angle-double-right pass"></i>
  `
  const anchor = document.getElementsByClassName('recent-post-item')[0]
  if (anchor) {
    const parent = anchor.parentElement
    parent.insertBefore(element, anchor)
  }
})()
