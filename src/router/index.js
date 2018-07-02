import Vue from 'vue'
import Router from 'vue-router'
import LibNavPage from '@/projectsPages/LibNavPage'
import HeaderNavPage from '@/componentsPages/HeaderNavPage'
import AsideBarPage from '@/componentsPages/AsideBarPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'lib-nav-page',
      component: LibNavPage
    },
    {
      path: '/header-nav',
      name: 'header-nav',
      component: HeaderNavPage
    },
    {
      path: '/aside-bar',
      name: 'aside-bar',
      component: AsideBarPage
    }
  ]
})
