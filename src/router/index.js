import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header.vue'
import finding from '@/components/finding.vue'
import club from '@/components/club.vue'
import index from '@/components/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:header
    },
    {
      path:'/club',
      component:club
    },
    {
      path:'/finding',
      component:finding
    }
  ]
})
