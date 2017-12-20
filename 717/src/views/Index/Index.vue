<template>
  <div class="main">
        <div class='indexConts'>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
            
        </div>
        <div class="footer">
                <router-link class='routerLink' :to="{path: 'home'}">
                    <i class="icon iconfont icon-shouye"></i>
                    <span>首页</span>
                </router-link>
                <router-link class='routerLink' :to="{path: 'kinds'}">
                    <i class="icon iconfont icon-apps"></i>
                    <span>分类</span>
                </router-link>
                <a href='#' class='middleImg'>
                    <img src='http://www.lb717.com/static/mobile/images/footer/inter.png'/>
                </a>
                <router-link class='routerLink' :to="{path: 'shopping'}">
                    <i class="icon iconfont icon-cart_light"></i>
                    <b>{{$store.state.addCar.length}}</b>
                    <span>购物车</span>
                </router-link>
                <router-link class='routerLink' :to="{path: 'my'}">
                    <i class="icon iconfont icon-my_light"></i>
                    <span>我的</span>
                </router-link>
        </div>
  </div>
</template>
<script>
export default {
    created () {
        this.$http_token.post('/admin/showList').then((res) => {
            this.$store.commit('updata_car', res.data.list)
        })
    }
}
</script>

<style scoped>
.main{
    height: 100%;
    width:100%;
    display: flex;
    flex-direction: column;
}
.indexConts{
    flex:1;
    overflow:hidden;
}
.footer{
    height: auto;
    display: flex;
    border-top:1px solid #e5e5e5;
}
.footer a{
    flex:1;
    padding: .05rem 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color:#666;
}
.footer a b{
    position: absolute;
    width: .3rem;
    height: .3rem;
    font-size: 10px;
    line-height: .3rem;
    background: #fc4141;
    border-radius: 50%;
    top:0rem;
    right:35%;
    text-align: center;
    color:#fff;
}
.footer .active{
    color:#fc4141;
}
.footer .active i {
    color:#fc4141;
}
.footer .routerLink i {
    display: block;
    font-size: .48rem;
}

.footer>.middleImg>img {
    width: 60%;
}

.footer span{
    font-size: .28rem;
}
</style>



