/**
 * @description: 过滤内容中不合法的部分
 */
const filter = (content) => {
  // html标签替换
  const tagReg = /<[^>]+>/gim
  content = content.replace(tagReg, '')
  // 替换markdown的超链接
  const re_mdLink = /\[(.*?)\]\((.*?)\)/gm
  // 普通链接
  const re_Link = /\bhttps?:\/\/(?!\S+(?:jpe?g|png|bmp|gif|webp|gif|mp4))\S+/g
  content = content.replace(re_mdLink, '[链接]')
  content = content.replace(re_Link, '[链接]')
  // 替换markdown的图片
  const re_mdImg = /!\[(.*?)\]\((.*?)\)/gm
  content = content.replace(re_mdImg, '[图片]')
  return content
}

module.exports = filter
