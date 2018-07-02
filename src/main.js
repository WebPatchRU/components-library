// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import components
import HeaderNav from '@/components/HeaderNav'
import AsideBar from '@/components/AsideBar'
import Chip from '@/components/Chip'

// registration components
Vue.component('header-nav', HeaderNav)
Vue.component('aside-bar', AsideBar)
Vue.component('chip-item', Chip)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
