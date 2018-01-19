<template>
  <div>
      <div class="header">
          <div class="t-header">
              <div class="l-icon">
                  <img src="../public/icons/xian.png" alt="" @click="tagSidebar">
              </div>
              <div class="m-content">
                 <router-link to="/">
                  <span>我的</span>
                </router-link> 
                <router-link to="/club">
                  <span>音乐馆</span>
                </router-link>
                <router-link to="/finding">
                  <span>发现</span>
                </router-link>
              </div>
              <div class="r-icon">
                  <img src="../public/icons/shiqu.png">
              </div>
              <div>
                  <transition name="fold">
                      <div class="sidebar" v-show="sidebarshow">
                          <div class="sidebar-header">
                              <div class="l-sidebar-header">
                                  <img src="../public/icons/vip.png" alt="">
                                  <p class="intr">升级为VIP</p>
                                  <small>畅享音乐特权</small>
                              </div>
                              <div class="m-sidebar-header">
                                  <img src="../public/icons/zhuti.png" alt="">
                                  <p class="intr">个性化中心</p>
                                  <small>点此换皮肤</small>
                              </div>
                              <div class="r-sidebar-header">
                                  <img src="../public/icons/message.png" alt="">
                                  <p class="intr">消息中心</p>
                                  <small></small>
                              </div>
                          </div>
                          <div class="sidebar-middle">
                              <p>仅Wi-Fi联网</p>
                              <p>定时关闭</p>
                              <p>免流量服务</p>
                              <p>传歌到手机</p>
                              <p>QPlay与车载音乐</p>
                              <p>清理占用空间</p>
                              <p>帮助与反馈</p>
                              <p>关于QQ音乐</p>
                          </div>
                          <div class="sidebar-bottom">
                              <div class="l-sidebar-bottom">
                                  <img src="../public/icons/shezhi.png" alt="">
                                  <span>设置</span>
                              </div>
                              <div class="r-sidebar-bottom">
                                  <img src="../public/icons/tuichu.png" alt="">
                                  <span>退出QQ登录</span>
                              </div>
                          </div>
                      </div>
                  </transition>
                  <transition name="fold">
                    <div class="mask" v-show="sidebarshow" @click="tagSidebar"></div>
                </transition>
              </div>
          </div>
          <div class="b-header">
              <div class="search-input">
                  <router-link to="./search">
                     <input type="text" placeholder="搜索">
                  </router-link>
              </div>
          </div>
      </div>
      <router-view/>
      <v-footer/>
  </div>
</template>
<script>
import footer from '@/components/footer.vue'
export default {
    data (){
        return {
            sidebarshow:false
        }
    },
    components:{
        "v-footer":footer
    },
    methods:{
        tagSidebar(){
            this.sidebarshow=!this.sidebarshow
        }
    }
}
</script>

<style lang="less" scoped>
@import url("../assets/style/index.less");
</style>

