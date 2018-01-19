<template lang="html">
  <div>
      <div class="header">
          <p>全部歌曲</p>
      </div>
      <router-link to="/">
      <img src="../public/icons/left.png" alt="" class="back1">
      </router-link>
      <div class="musiclist">
            <div class="music" @click="play(data.id, data.name,data.al.picUrl,data.al.name,data.ar[0].name)" 
            v-for="data in musiclist" :key="data.id" :data-id="data.id">
              <div class="music-name">{{data.name}}</div>
              <div class="music-info">{{data.al.name}}</div>
          </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
      return{
          musiclist:[]
      }
  },
  mounted(){
      this.isHaveList()
  },
  methods:{
      isHaveList(){
          this.axios.post(this.api.music.search+'徐良')
          .then((res)=>{
              console.log(this.api.music.search)
              if(200===res.data.code){
                  this.musiclist=res.data.result.songs
              }
          })
      },
      play(id,name,picUrl,alName,arName){
          this.$store.state.picUrl=picUrl
          this.$store.state.name=name
          this.$store.state.singerName=arName
          this.$store.state.isPlay = true
          this.$store.state.avatarShow=false
          this.$store.state.avatar1Show=true
          this.$store.state.rotImg1Show=true
          this.$store.state.rotImgShow=false
          

          let data={
              id,
              name,
              picUrl,
              alName,
              arName
          }
          this.$store.state.musiclist.unshift(data)
            console.log(this.$store.state.musiclist)
          this.axios.post("https://api.imjad.cn/cloudmusic/?type=song&id=" + id +"&br=128000")
          .then((res)=>{
              
              if(200===res.data.code){
                  this.$store.state.src=res.data.data[0].url
                //   console.log(this.$store.state.src)
              }
          })
      }
  }
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
}
.header{
    height: 5rem;
    background-color:#2AAA6D;
}
.header p{
    text-align: center;
    font-size: 3rem;
    color: white;
    padding: 1.5rem;
}
.back1{
    position: absolute;
    z-index:9;
    top:1.5rem;
    width: 2rem;
    height: 2rem;
}
.musiclist{
    margin-top: 1rem;
    margin-left: 1rem;
}
.music{
    margin-bottom: 2rem;
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.6rem;
}
.music-name{
    font-size: 3.5rem;
}
.music-info{
    font-size: 3rem;
}
</style>

