<template>
  <div>
      <div class="t">
          <div class="img1">
              <router-link to="/">
                <img src="../public/icons/jiantou.png" alt="" class="back" @click="showFooter">
              </router-link>
          </div>
          <div class="name">
              <p class="song">{{name}}</p>
          </div>
          <img src="../public/icons/sandian.png" class="dot" alt="" @click="showFooter">
      </div>
      <div class="small">
          <small class="singer">— {{singerName}} —</small>
      </div>
      <img :src="picUrl" alt="" class="img2">
      <div class="rot">
          <img :src="picUrl" alt="" class="rotImg" v-show="rotImgShow">
          <img :src="picUrl" alt="" class="rotImg1" v-show="rotImg1Show">
      </div>
  </div>
</template>
<script>
export default {
   computed: {
        picUrl () {
           return this.$store.state.picUrl 
        },
        lyrics () {
            return this.$store.state.lyrics 
        },
        name () {
            return this.$store.state.name
        },
        singerName () {
            return this.$store.state.singerName
        },
        rotImgShow () {
            return this.$store.state.rotImgShow
        },
        rotImg1Show () {
            return this.$store.state.rotImg1Show
        },
        src () {
            return this.$store.state.src
        },
        isPlay() {
             return this.$store.state.isPlay
       }
    },
    methods:{
        showFooter(){
            this.$store.state.showFooter=true
        },
         play(){
      this.$store.state.isPlay=! this.$store.state.isPlay
      var audio=document.querySelector('.audio')
      var p = document.querySelector('.avatar')
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
    overflow: hidden;
    font-family: Tahoma;
}

.t{
    width: 100%;
    position: absolute;
    top: 1rem;
    display: flex;
    justify-content: center;
    z-index: 2;
}
.back{
    width: 3rem;
    height: 3rem;
    position: absolute;
    left: 1rem;
    z-index: 999;
    overflow: visible;
}
.dot{

    width: 3rem;
    height: 3rem;
    position: absolute;
    right: 1rem;

}
.img2{
    position: fixed;
    width: 100%;
    height: 100%;
    filter: blur(30px);
}
.song{
    color: #ffffff;
    font-size: 3.5rem;
    font-weight: 200;
}
.small{
    width: 100%;
    position: absolute;
    top: 4rem;
    display: flex;
    justify-content: center;
    color: #ffffff;
    font-weight: 200;
    font-size: 3rem;
    z-index:1;
}
.rot{
    position: absolute;
    top: 12rem;
    display: flex;
    justify-content: center;
    width: 100%;
}
.rotImg{
    z-index:1;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
}
.rotImg1{
    z-index:1;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
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
</style>
