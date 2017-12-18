<template>
<div class="public">
    <headers @send='getPage'></headers>
    <component :is='page':list='$route.params.data'></component>
    <div class="pubfooter">
        <div class="publeft">
            <span>
                <img v-lazy="'http://www.lb717.com/static/mobile/images/food/05.png'" alt="">
                <small>客服</small>
            </span>
            <span>
                <img v-lazy="'http://www.lb717.com/static/mobile/images/footer/3.png'" alt="">
                <small>购物车</small>
            </span>
        </div>
        <div class="pubright">
            <button class="addCar">加入购物车</button>
            <button class="buy">立即购买</button>
        </div>
    </div>
</div>

</template>
<script>
import Headers from '../../components/Public/Headers/Headers.vue'
import Goods from '../../components/Public/Goods/Goods.vue'
import Menute from '../../components/Public/Menute/Menute.vue'
export default {
    data () {
        return {
            page: 'Goods'
        }
    },
    components: {
        Headers,
        Goods,
        Menute
    },
    methods: {
        getPage (val) {
           this.page = val;
        }
    }
}
</script>

<style scoped>
.public{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.pubfooter{
    height: 1.2rem;
    width: 100%;
    display: flex;
}
.publeft {
    flex:3;
    display: flex;
}
.publeft span{
    flex:1;
    display: flex;
    flex-direction: column;
   justify-content: center;
   align-items: center;
}
.publeft span img{
    width: 40%;
}
.publeft span small{
    font-size: .28rem;
    line-height: .5rem;
}
.pubright{
    flex:7;
    background: pink;
    display: flex;
}
.pubright button {
    flex:1;
    border:none;
    font-size: .38rem;
    color:#fff;
}
.addCar{
    background: #fe8282
}
.buy{
    background: #fb4142;
}
</style>

