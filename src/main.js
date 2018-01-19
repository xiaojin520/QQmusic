// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
// 引入更新rem的js
import '@/assets/js/reset.js'
//引入mint-ui
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.config.productionTip = false

import axiosJs from 'axios'
Vue.prototype.axios = axiosJs
Vue.use(Vuex)

import APIJS from './assets/js/api.js'
Vue.prototype.api=APIJS

const store = new Vuex.Store({
  state:{
    musiclist:[],
    showFooter:true,
    avatarShow:true,
    avatar1Show:false,
    rotImgShow:true,
    rotImg1Show:false,
    isPlay:false,
    lyrics: "",
    src: "https://music.163.com/#/search/m/?id=70348908&s=%E8%AF%B4%E6%95%A3%E5%B0%B1%E6%95%A3&type=1",
    name: "说散就散",
    singerName:"JC",
    picUrl: "http://img.mp.sohu.com/upload/20170617/44cfc4a2f4c14dfdab7ef92a4f16b287_th.png"

  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
