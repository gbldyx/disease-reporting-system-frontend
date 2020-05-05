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
      meta: {
        needLogin: true
      },
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
