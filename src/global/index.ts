import { App } from 'vue'
// 以hook形式进行全局注册的东西
export function registerApp(app: App): void {
  console.log('registerApp')
}
