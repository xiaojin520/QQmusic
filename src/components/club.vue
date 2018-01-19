<template>
  <div>
    <v-index></v-index>
    <div class="wrap">
      <div class="music-banner">
        <mt-swipe :auto="2000">
          <!-- <mt-swipe-item v-for="data in banner" key="item.id">
              <img :src="data.src">
          </mt-swipe-item> -->
        </mt-swipe>
      </div>
    </div>
    <div class="t-classify">
      <div class="img1">
        <img src="../public/icons/singer.png" alt="">
        <span>歌手</span>
      </div>
      <div>
        <img src="../public/icons/paihang.png" alt="">
        <span>排行</span>
      </div>
      <div class="img3">
        <img src="../public/icons/diantai.png" alt="">
        <span>电台</span>
      </div>
    </div>
       <div class="b-classify">
          <div class="img1">
            <img src="../public/icons/fenlei.png" alt="">
            <span>分类歌单</span>
      </div>
      <div>
        <img src="../public/icons/shipingMV.png" alt="">
        <span>视频</span>
      </div>
      <div class="img3">
        <img src="../public/icons/zhuanji.png" alt="">
        <span>专辑</span>
      </div>
    </div>
    <h3>热 门 推 荐</h3>
    <div class="t-imglist">
      <div class="imglist1">
        <img src="../public/icons/zhoubichang.jpg" alt="">
        <p>每周新歌: 周笔畅用声音温暖时光</p>
      </div>
      <div class="imglist3">
        <img src="../public/icons/avatar.jpg" alt="">
        <p>不留遗憾,在离开前向你表白! 毕业季</p>
      </div>
    </div>
       <div class="b-imglist">
          <div class="imglist1">
            <img src="../public/icons/zxy.jpg" alt="">
            <p>99首精选情歌 | 没关系,我们就此结束吧</p>
          </div>
          <div class="imglist3">
            <img src="../public/icons/2.jpg" alt="">
            <p>你是我心内的一首歌</p>
          </div>
    </div>
  </div>
</template>
<script>
import index from '@/components/index.vue' 
export default {
  components:{
      "v-index":index
  },
  data(){
    return{
      banner:[
        {'id':1, 'src':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498295434956&di=a722252571ba0d8a6f5f2f1bec5ed467&imgtype=0&src=http%3A%2F%2Fupload.admin5.com%2F2015%2F1014%2F1444782570656.jpg'},
        {'id':2, 'src':'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/236704.jpg'},
        {'id':3, 'src':'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/235397.jpg'},  
        {'id':4, 'src':'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/236564.jpg'},
        {'id':6, 'src':'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/234923.jpg'},
        {'id':7, 'src':'http://img.mp.itc.cn/upload/20170125/8af568aa27474028beb9773ea9816471_th.jpg'},
        {'id':8, 'src':'https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/114798.jpg'},
        {'id':9, 'src':'https://b-ssl.duitang.com/uploads/item/201605/01/20160501065159_4jQBE.jpeg'},
      ]
    }
  }
}
</script>
<style>
*{
    font-weight: normal;
}
.music-banner{
    position: absolute;
    top: 6rem;
    left: 0;
    right: 0;
    height: 15rem;
}
.music-banner img{
    width: 100%;
    height: 100%;
    float: left;
}
.t-classify{
    margin-top: 23rem;
    display: flex;
    justify-content: center;
}
.t-classify img{
    width: 3rem;
    height: 3rem;
    vertical-align: middle;
    margin-right: 0.5rem;
}
.t-classify span{
    font-size: 2.5rem;
    vertical-align: middle;
}
.img1{
    position: absolute;
    left: 2rem;
}
.img3{
    position: absolute;
    right: 2rem;
}
.b-classify{
    margin-top: 2rem;
    display: flex;
    justify-content: center;
}
.b-classify img{
    width: 3rem;
    height: 3rem;
    vertical-align: middle;
    margin-right: 0.5rem;
}
.b-classify span{
    font-size: 2.5rem;
    vertical-align: middle;
}
h3{
    margin-top: 2rem;
    text-align: center;
    font-size: 3rem;
    font-weight: normal;
}
.t-imglist{
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    margin-right: 2rem;
}
.t-imglist img{
    width: 14rem;
    height: 14rem;
    position: relative;
    /* margin-right: 1rem; */
}

.t-imglist p{
    font-size: 3rem;
    width: 12rem;
    position: absolute;
    left: 2rem;
    top: 3rem;
    z-index: 10;
    font-weight: 800;

}

.imglist1{
    position: absolute;
    left: 1.1rem;
}
.imglist3{
    position: absolute;
    right: 1.1rem;
}
.b-imglist{
    margin-top: 14rem;
    display: flex;
    justify-content: center;
    margin-right: 2rem;
}
.b-imglist img{
    width: 14rem;
    height: 14rem;
    position: relative;
}

.b-imglist p{
    font-size: 3rem;
    width: 12rem;
    position: absolute;
    left: 2rem;
    top: 3rem;
    z-index: 10;
    font-weight: 800;

}
</style>
