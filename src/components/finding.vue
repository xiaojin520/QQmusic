<template>
  <div>
    <v-index></v-index>
    <img src="../public/icons/10.jpg" alt="" class="img1">
    <img src="../public/icons/1.jpg" alt="" class="img2">
    <img src="../public/icons/3.jpg" alt="" class="img3">
    <img src="../public/icons/4.jpg" alt="" class="img4">
  </div>
</template>
<script>
import index from '@/components/index.vue' 
export default {
  components:{
      "v-index":index
  }
}
</script>
<style>
.img1{
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 25rem;
}
.img2{
    position: absolute;
    margin-top: 25rem;
    left: 0;
    right: 0;
    width: 100%;
    height: 25rem;
}
.img3{
    position: absolute;
    margin-top: 50rem;
    left: 0;
    right: 0;
    width: 100%;
    height: 25rem;
}
.img4{
    position: absolute;
    margin-top: 75rem;
    left: 0;
    right: 0;
    width: 100%;
    height: 25rem;
}
</style>
