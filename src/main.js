// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axiosJs from 'axios'
import Vuex from 'vuex'
// 引入更新rem的js
import '@/assets/js/reset.js'

Vue.config.productionTip = false
Vue.prototype.axios = axiosJs
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
