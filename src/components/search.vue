<template>
  <div class="search-top">
      <input type="text" placeholder="请输入内容">
      <router-link to="/">
        <span @click="back">取消</span>
      </router-link>
      <div class="hot">
          <p>热门搜索</p>
          <div class="search">庄心妍</div>
      </div>
  </div>
</template>
<script>
export default {
  methods:{
    back(){
      this.$router.push({pash:'/header'})
   }
  }

}
</script>
<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: Tahoma;
}
.search-top{
    position:fixed;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
     height: 4rem;
     background-color: #31C37C;

input{
       position: absolute;
       left: 0.6rem;
       top: 2rem;
       width: 85%;
       height: 1rem;
       padding: 0.3rem;
       background-color: #2AAA6D;
       border-radius: .5rem;
       border: none;
       font-size: 2rem;
       outline: none;
}

span{
       position: absolute;
       right: 1rem;
       top: 2rem;
       font-size: 2.1rem;
       color:white;
       font-weight: 200;
}
}
.hot{
    position: absolute;
    top:5rem;
}
.hot p{
    margin-left: 2rem;
    font-size: 2rem;
    color:#cccccc;

}
.hot .search{
    margin-left: 3rem;
    margin-top: 1rem;
    font-size: 2rem;
    color:#2AAA6D;
    font-weight: 200;
    border: 1px solid #2AAA6D;
    padding: 0.5rem;
    border-radius: 2.5rem;

}

</style>
