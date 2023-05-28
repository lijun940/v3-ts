import { createStore } from 'vuex'
// vuex 对ts的支持会差一些，有些人会喜欢用第三方库
const store = createStore({
  state: () => {
    return {
      name: 'lijjun'
    }
  },
  mutations: {},
  getters: {},
  actions: {}
})

export default store
