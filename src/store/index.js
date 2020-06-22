import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: localStorage.getItem('username') ? localStorage.getItem('username') : '未登录',
    rolename: localStorage.getItem('rolename') ? localStorage.getItem('rolename') : '',
    userid: localStorage.getItem('userid') ? parseInt(localStorage.getItem('userid')) : -1,
    isLogin: localStorage.getItem('isLogin') ? localStorage.getItem('isLogin') : false
  },
  mutations: {
    setuser (state, payload) {
      state.username = payload.username
      state.rolename = payload.rolename
      state.userid = payload.userid
    },
    reset (state) {
      state.username = '未登录'
      state.rolename = ''
      state.userid = -1
    },
    changeLogin (state, flag) {
      state.isLogin = flag
      if (flag) {
        localStorage.setItem('isLogin', flag)
        localStorage.setItem('username', state.username)
        localStorage.setItem('rolename', state.rolename)
        localStorage.setItem('userid', state.userid)
      } else {
        localStorage.removeItem('isLogin')
        localStorage.removeItem('username')
        localStorage.removeItem('rolename')
        localStorage.removeItem('userid')
      }
    }
  }
})
