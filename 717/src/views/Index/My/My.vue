<template>
  <div class="my"> 
    <headers></headers>
    <div class="userMsg">
      <img src="../../../assets/user.png"/>
      <p>童言</p>
    </div>
    <div class="myStore">
        <img src="../../../assets/shoping.png" alt="">
        我的店铺
        <i class="icon iconfont icon-right"></i>
    </div>
    <div class="my_nav">
        <span>
            <i class="icon iconfont icon-addressbook"></i>
            <small>代付款</small>
        </span>
        <span>
            <i class="icon iconfont icon-yijianfankui"></i>
            <small>待发货</small>
        </span>
        <span>
            <i class="icon iconfont icon-deliver"></i>
            <small>代收货</small>
        </span>
        <span>
            <i class="icon iconfont icon-recharge"></i>
            <small>售后</small>
        </span>
        <span class="last">
            <i class="icon iconfont icon-wodedingdan"></i>
            <small>我的订单 <i class="icon iconfont icon-right"></i></small>
            
        </span>
    </div>
    <ul class="vertical_nav">
      <li>
        <i class="icon iconfont icon-wodehongbao"></i>
        账户余额
        <i class="icon iconfont icon-right"></i>
      </li>
      <li>
        <router-link :to="{name: 'Address'}">
          <i class="icon iconfont icon-shouhuodizhi"></i>
          地址管理
          <i class="icon iconfont icon-right"></i>
        </router-link>
        
      </li>
      <li>
        <i class="icon iconfont icon-emoji"></i>
        我的客服
        <i class="icon iconfont icon-right"></i>
      </li>
    </ul>
  </div>
</template>
<script>
import Headers from '@/components/My/Headers/Headers.vue'
export default {
    components: {
        Headers
    },
    created () {
        this.$http.post('/admin/showList').then((res) => {
            this.$store.commit('updata_car', res.data.list)
        })
    }
}
</script>

<style scoped src='./My.css'></style>