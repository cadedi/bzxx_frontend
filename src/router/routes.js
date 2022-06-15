import Home from '@/pages/Home'
import NationalStandard from '@/pages/NationalStandard'
import IndustryStandard from '@/pages/IndustryStandard'
import GroupStandard from '@/pages/GroupStandard'
import EnterpriseStandard from '@/pages/EnterpriseStandard'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Personal from '@/pages/Personal'
import NationalDetail from '@/pages/NationalDetail'
export default [
  {
    name: 'home',
    path:'/',
    component: Home
  },
  {
    name: 'nationalStandard',
    path:'/nationalStandard',
    component: NationalStandard
  },
  {
    name:'nationalDetail',
    path:'/nationalStandard/detail/:id',
    // props: route => ({id: route.param.id}),
    props: true,
    component:NationalDetail
  },
  {
    name: 'industryStandard',
    path:'/industryStandard',
    component: IndustryStandard
  },
  {
    name: 'groupStandard',
    path: '/groupStandard',
    component:GroupStandard
  },
  {
    name: 'enterpriseStandard',
    path: '/enterpriseStandard',
    component:EnterpriseStandard
  },
  {
    name: 'register',
    path: '/register',
    component:Register
  },
  {
    name: 'login',
    path: '/login',
    component:Login
  },
  {
    name:'personal',
    path:'/personal',
    redirect:'/personal/info',
    component:Personal,
    beforeEnter: (to, from, next) => { // 路由前置守卫
      // 如果还没有登陆, 放行
      if (localStorage.getItem('token')!=null) {
        next()
      } else {
        // 如果已经登陆, 跳转到首页
        next('/login')
      }
    },
    children:[
      {
        path:'info',
        component:()=>import('@/pages/Personal/UserInfo')
      },
      {
        path:'order',
        component:()=>import('@/pages/Personal/UserOrder')
      }
    ]
  }
]