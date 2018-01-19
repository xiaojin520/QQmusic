<template>
  <div id="app">
    <router-view/>
    <div class="footer" v-show="showFooter">
      <router-link to="/play">
        <img :src="picUrl" alt="" class="avatar" v-show="avatarShow">
        <img :src="picUrl" alt="" class="avatar1" v-show="avatar1Show">
        <div class="Name">
          <p class="name">{{name}}</p><br/>
          <small class="singerName">{{singerName}}</small>
        </div>
      </router-link>
      <audio :src="src" class="audio" v-bind:autoplay="isPlay" loop>
      </audio>
      <img src="./public/icons/pause.png" alt="" class="img" @click="play" v-show="!isPlay">
      <img src="./public/icons/play.png" alt="" class="img1" @click="play" v-show="isPlay">
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  },
  computed:{
    src(){
      return this.$store.state.src
    },
    name(){
      return this.$store.state.name
    },
    singerName(){
       return this.$store.state.singerName
    },
     picUrl(){
      return this.$store.state.picUrl
    },
    avatarShow(){
      return this.$store.state.avatarShow
    },
    avatar1Show(){
      return this.$store.state.avatar1Show
    },
     isPlay() {
      return this.$store.state.isPlay
    },
    showFooter () {
      return this.$store.state.showFooter
    }
  },
  methods:{
    play(){
      this.$store.state.isPlay=! this.$store.state.isPlay
      var audio=document.querySelector('.audio')
      if(! this.$store.state.isPlay){
        audio.pause()
        this.$store.state.avatarShow=true
        this.$store.state.avatar1Show=false
        this.$store.state.rotImgShow=true
        this.$store.state.rotImg1Show=false

      }else{
        audio.play()
        this.$store.state.avatarShow=false
        this.$store.state.avatar1Show=true
        this.$store.state.rotImgShow=false
        this.$store.state.rotImg1Show=true
      }
    }
  }
}
</script>

<style lang="css" scoped>
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}
.footer{
  /*z-index:1;*/
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4.5rem;
  background-color: #ffffff;
  /* padding: 1rem;   */
  display: flex;
  /* align-items: center; */
}
.avatar{
  position: fixed;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-left: 1rem;
}
.avatar1{
  position: fixed;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
    margin-left: 1rem;
  animation: rotate 10s linear infinite ;
  -webkit-animation: rotate 10s linear infinite;
  transform-origin: center center;

}
@keyframes rotate {
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }

  }

.Name{
  color: #000000;
  margin-left: 6rem; 
  /*text-decoration: none; */
}
.footer .img,.img1{
  position: fixed;
  width: 3rem;
  height: 3rem;
  right: 3rem;
  margin-top: 0.5rem;
}
.name{
  font-size: 3rem;
  margin-bottom: -1rem;
}
.singerName{
  font-size: 1rem;

}
</style>