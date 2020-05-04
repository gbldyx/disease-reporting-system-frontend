import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Login from '@/components/Login'
import PersonalCase from '@/components/PersonalCase'
import Query from '@/components/Query'
import UserInfo from '@/components/UserInfo'
import Register from '@/components/Register'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/mainpage',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: '',
          redirect: 'userinfo'
        },
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
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login' || to.path === '/register') {
//     next()
//   } else {
//     if (this.$store.isLogin)
//   }
// })

export default router
