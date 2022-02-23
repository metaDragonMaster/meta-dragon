import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from "./i18n"
import './global.js'

import directives from './directives/index'

Object.keys(directives).forEach((fncName) => {
  console.log(fncName)
	Vue.directive (fncName, directives[fncName])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
