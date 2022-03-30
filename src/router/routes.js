import Home from '@/pages/Home'
import NationalStandard from '@/pages/NationalStandard'
import IndustryStandard from '@/pages/IndustryStandard'
import GroupStandard from '@/pages/GroupStandard'
import EnterpriseStandard from '@/pages/EnterpriseStandard'
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
  }
]