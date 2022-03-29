import Home from '@/pages/Home'
import NationalStandard from '@/pages/NationalStandard'
import IndustryStandard from '@/pages/IndustryStandard'
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
  }
]