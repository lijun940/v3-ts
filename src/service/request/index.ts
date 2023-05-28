import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { LJRequestInterceptors, LJRequestConfig } from './type'
import { ElLoading } from 'element-plus'
const DEFAULT_LOADING = false
class LJRequest {
  instance: AxiosInstance
  interceptors?: LJRequestInterceptors
  loading?: any
  showLoading: boolean
  constructor(config: LJRequestConfig<any>) {
    console.log(config)
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? false
    // 从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有的实例都有的拦截器：请求拦截成功')
        if (this.showLoading) {
          console.log(1)
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }

        return config
      },
      (err) => {
        console.log('所有的实例都有的拦截器：请求失败')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有的实例都有的拦截器：响应成功')
        setTimeout(() => {
          this.loading?.close()
        }, 1000)
        const data = res.data
        return data
      },
      (err) => {
        console.log('所有的实例都有的拦截器：响应失败')
        this.loading?.close()
        // 判断不同的httperrorcode
        return err
      }
    )
  }
  request<T>(config: LJRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = DEFAULT_LOADING

          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }

  get<T>(config: LJRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: LJRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: LJRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: LJRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default LJRequest
