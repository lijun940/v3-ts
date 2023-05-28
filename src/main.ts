import { createApp, App } from 'vue'
import rootApp from './App.vue'
import router from './router'
import store from './store'
import { registerApp } from './global'
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'normalize.css'
import '@/assets/css/index.less'
import { BASE_URL } from './service/request/config'
import ljRequest from './service'
// import 'element-plus/theme-chalk/el-button.css'
// import 'element-plus/theme-chalk/base.css'
const app: App = createApp(rootApp)
registerApp(app)
// app.use(function (app: App) {})
// app.use({
//   install: function (app: App) {}
// })
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')
// ljRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独相应的res')
//       return res
//     }
//   }
// })
interface DataType {
  data: any
  returnCode: string
  success: boolean
}
