import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header.vue'
import finding from '@/components/finding.vue'
import club from '@/components/club.vue'
import index from '@/components/index.vue'
import search from '@/components/search.vue'
import total from '@/components/total.vue'
import download from '@/components/download.vue'
import musiclist from '@/components/musiclist.vue'
import play from '@/components/play.vue'

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
    },
    {
      path:'/search',
      component:search
    },
    {
      path:'/total',
      component:total
    },
    {
      path:'/download',
      component:download
    },
    {
      path:'/musiclist',
      component:musiclist
    },
    {
      path:'/play',
      component:play
    }
  ]
})
