<template>
  <div>
      <v-index/>
      <div class="wrapper">
          <div class="intr">
              <div class="timer">
                  <img src="../public/icons/dengji.png">
                  <span>0分钟</span>
              </div>
              <div class="avatar" @click="intrshow">
                  <img src="../public/icons/01.jpg" alt="">
                   <transition name="fold">
                     <div class="intr1" v-show="intrShow">
                         <h1>落花</h1>
                         <h2>看不穿谎言里谁的泪落下</h2>
                         <h2>无奈花飞满天恨不过天涯</h2>
                         <h2>痛到最后</h2>
                         <h2>让人眷恋</h2>
                         <h2>又让人害怕</h2>
                         <h2>心躲在冷冷夜风中感受天与地的落差</h2>
                         <h2>不愿做水中的落花,</h2>
                         <h2>别让谁再为谁牵挂</h2>
                         <h2>岁月带不走 是满身的伤疤</h2>
                         <h2>不想做感情的落花</h2>
                         <h2>别让心爱恨里挣扎</h2>
                         <h2>明天谁的心会浪迹天涯</h2>
                     </div>
                  </transition>
              </div>
              <div class="vip" >
                  <img src="../public/icons/vvip.png">
                  <span>开通</span>
              </div>
          </div>
          <p class="username">如梦令</p>
          <div class="intr-songs">
              <div class="t-intr-songs">
                  <div class="t-intr-songs1">
                      <router-link to="/total">
                        <img src="../public/icons/yinfu.png" alt="">
                        <p>全部歌曲</p>
                      </router-link>
                  </div>
                   <div class="t-intr-songs1">
                      <router-link to="/download">
                        <img src="../public/icons/download.png" alt="">
                        <p>下载歌曲</p>
                      </router-link>
                  </div>
                   <div class="t-intr-songs1">
                      <router-link to="/musiclist">
                        <img src="../public/icons/zuijin.png" alt="">
                        <p>最近播放</p>
                      </router-link>
                  </div>
              </div>
              <div class="b-intr-songs">
                  <div class="b-intr-songs1">
                      <img src="../public/icons/heart.png" alt="">
                      <p>我喜欢</p>
                  </div>
                   <div class="b-intr-songs1">
                      <img src="../public/icons/mv.png" alt="">
                      <p>下载MV</p>
                  </div>
                   <div class="b-intr-songs1">
                      <img src="../public/icons/cd.png" alt="">
                      <p>已购音乐</p>
                  </div>
              </div>
          </div>
          <div class="blank"></div>
      </div>
      <div class="radio">
          <div class="radio1">
              <img src="../public/icons/run.jpg" alt="">
              <div class="title">
                  <p>个性电台</p>
                  <small>听 Bad 的人也喜欢听这些歌曲</small>
              </div>
          </div>
           <div class="radio2">
              <img src="../public/icons/run1.jpg" alt="">
              <div class="title2">
                  <p>暖心电台</p>
                  <small>新增万首治愈</small>
              </div>
          </div>
      </div>
      <div class="blank1"></div>
      <div class="songList">
          <p class="title">我 的 歌 单</p>
      </div>
      <router-link to="/like">
          <div class="list">
              <img src="../public/icons/5.jpg" alt="">
              <div class="number">
                  <p>再见只是陌生人</p>
                  <small></small>
              </div>
          </div>
          <div class="list">
              <img src="../public/icons/6.jpg" alt="">
              <div class="number">
                  <p>万众宠爱的天后</p>
                  <small></small>
              </div>
          </div>
      </router-link>
      <div class="blank2"></div>
  </div>
</template>
<script>
import index from '@/components/index'
export default {
    data(){
        return{
            intrShow:false
        }
    },
  components:{
      "v-index":index
  },
  methods:{
      intrshow(){
          this.intrShow=!this.intrShow
      }
  }
}
</script>
<style lang="less" scoped>
@import url("../assets/style/header.less");
</style>
