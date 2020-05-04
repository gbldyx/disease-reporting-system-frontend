import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Login from '@/components/Login'
import PersonalCase from '@/components/PersonalCase'
import Query from '@/components/Query'
import UserInfo from '@/components/UserInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mainpage',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: 'personalcase',
          name: 'PersonalCase',
          component: PersonalCase
        },
        {
          path: 'query',
          name: 'query',
          component: Query
        },
        {
          path: 'userinfo',
          name: 'userinfo',
          component: UserInfo
        }
      ]
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
