import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: localStorage.getItem('username') ? localStorage.getItem('username') : '未登录',
    password: '',
    isLogin: localStorage.getItem('isLogin') ? localStorage.getItem('isLogin') : false
  },
  mutations: {
    edituser (state, payload) {
      state.username = payload.username
      state.password = payload.password
    },
    changeLogin (state, flag) {
      state.isLogin = flag
      if (flag) {
        localStorage.setItem('isLogin', flag)
        localStorage.setItem('username', state.username)
      } else {
        localStorage.removeItem('isLogin')
        localStorage.removeItem('username')
      }
    }
  }
})
