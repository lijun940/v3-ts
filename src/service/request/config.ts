// 根据process.env.NODE_ENV 不同环境 根据webpack 插件defineplugin 注入不同值
// development
// production
// test
let BASE_URL = ''
const TIME_OUT = 10000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://123.207.32.32:8000'
}

// es6 导出变量必须在定义时导出
export { BASE_URL, TIME_OUT }
