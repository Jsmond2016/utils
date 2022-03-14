// 异步编程当然少不了定时器了，常见的定时器函数有 setTimeout 、 setInterval 、 requestAnimationFrame 。我们先来
// 讲讲最常用的 setTimeout ，很多人认为 setTimeout 是延时多久，那就应该是多久后执行。
// 其实这个观点是错误的，因为 JS 是单线程执行的，如果前面的代码影响了性能，就会导致 setTimeout 不会按期
// 执行。当然了，我们可以通过代码去修正 setTimeout ，从而使定时器相对准确

let period = 60 * 1000 * 60 * 2
let startTime = new Date().getTime()
let count = 0
let end = new Date().getTime() + period
let interval = 1000
let currentInterval = interval
function loop() {
  count++
  // 代码执行所消耗的时间
  let offset = new Date().getTime() - (startTime + count * interval);
  let diff = end - new Date().getTime()
  let h = Math.floor(diff / (60 * 1000 * 60))
  let hdiff = diff % (60 * 1000 * 60)
  let m = Math.floor(hdiff / (60 * 1000))
  let mdiff = hdiff % (60 * 1000)
  let s = mdiff / (1000)
  let sCeil = Math.ceil(s)
  let sFloor = Math.floor(s)
  // 得到下一次循环所消耗的时间
  currentInterval = interval - offset
  console.log('时：' + h, '分：' + m, '毫秒：' + s, '秒向上取整：' + sCeil, '代码执行时间：' + offset, '下次循环间隔' + currentInterval)
  setTimeout(loop, currentInterval)
}
setTimeout(loop, currentInterval)