
const navigation = performance.getEntriesByType('navigation')[0]
const request_time = navigation.responseEnd - navigation.requestStart
const render_time = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart

console.log(`请求时间：${request_time} ms, 渲染时间：${render_time} ms`)

/**
 * 参数图 https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg
 * 浏览器查看性能
 * 1. 通过查看 network 文件请求时间
 * 2. 通过查看 performance 查看网页渲染性能
 *  2.1. DCL domContentLoaded
 *  2.2. LCP LargestContentfulPaint
 *  2.3. FP FirstPaint
 *  2.4. FCP FirstContentfulPaint
 *  2.5. L Load
 * 3. 通过 lighthouse 查看网站综合评分
 */