import axios, { AxiosResponse } from 'axios'
// axios的实例 对象
// axios.get()
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 10000
// axios.defaults.headers = {}
// axios.get('/home/multidata').then((res: AxiosResponse<any>) => {
//   console.log(res)
// })

// 多个请求，一起返回 内部使用了promise.all
// axios.all([axios.get(), axios.post()]).then(res => {res[0],res[1]})

// 拦截器
// fn1 成功 fn2 失败
axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return error
  }
)
axios.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    return err
  }
)
// Promise本身可以有类型
// new Promise<string>((resolve, reject) => {
//   resolve(123)
// }).then((res) => {})
