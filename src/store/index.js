import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: localStorage.getItem('username') ? localStorage.getItem('username') : '未登录',
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    isLogin: localStorage.getItem('isLogin') ? localStorage.getItem('isLogin') : false
  },
  mutations: {
    setuser (state, payload) {
      state.username = payload.username
      state.token = payload.token
    },
    reset (state) {
      state.username = '未登录'
      state.token = ''
    },
    changeLogin (state, flag) {
      state.isLogin = flag
      if (flag) {
        localStorage.setItem('isLogin', flag)
        localStorage.setItem('username', state.username)
        localStorage.setItem('token', state.token)
      } else {
        localStorage.removeItem('isLogin')
        localStorage.removeItem('username')
        localStorage.removeItem('token')
      }
    }
  }
})
