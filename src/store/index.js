import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '未登录',
    password: ''
  },
  mutations: {
    edituser (state, payload) {
      state.username = payload.username
      state.password = payload.password
    }
  }
})
