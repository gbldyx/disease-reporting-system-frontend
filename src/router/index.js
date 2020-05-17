import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Login from '@/components/Login'
import PersonalCase from '@/components/PersonalCase'
import Advance from '@/components/Advance'
import UserInfo from '@/components/UserInfo'
import Register from '@/components/Register'
import Report from '@/components/Report'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/mainpage',
      component: MainPage,
      meta: {
        needLogin: true
      },
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
          path: 'advance',
          name: 'Advance',
          component: Advance
        },
        {
          path: 'userinfo',
          name: 'UserInfo',
          component: UserInfo
        },
        {
          path: 'report',
          name: 'Report',
          component: Report
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
      component: Login,
      meta: {
        needLogin: false
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        needLogin: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  var flag = localStorage.getItem('isLogin') === 'true'
  console.log(flag)
  if (flag) {
    if (to.path === '/login') {
      next({ path: '/mainpage' })
    } else {
      next()
    }
  } else {
    if (to.meta.needLogin) {
      next({ path: '/login' })
    } else {
      next()
    }
  }
})

export default router
