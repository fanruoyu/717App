<template>
  <div class="my"> 
    <headers></headers>
    <div class="userMsg">
      <img src="../../../assets/user.png"/>
      <p>{{userName}}</p>
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
import Headers from '@/components/My/Headers/Headers.vue';
import {getCookie} from '@/utiles/utiles.js'
export default {
    data () {
        return {
            userName: ''
        }
    },
    components: {
        Headers
    },
    created () {
        this.$http_token.post('/admin/username').then(res => {
            if (res.data.msg === 'success') {
                this.userName = res.data.userName.data
            } else {
                this.userName = '用户名'
            }
            
        })
    }
}
</script>

<style scoped src='./My.css'></style>