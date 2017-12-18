<template>
    <div class='home'>
        <!-- home页头部 -->
        <headers></headers>
        <!-- home也主题 -->
        <section class="maincontents" @scroll="isScroll" ref="scroller">
            <div class="main" ref="main">
                <!-- 轮播图 -->
                <swipers></swipers>
                <!-- ol列表 及垂直轮播-->
                <div class='navBox'>
                    <ol class='navlist' v-if='navList'>
                        <nav-list 
                        v-for='(item, index) in navList' 
                        :key='index'
                        :src='item.src'
                        :conts='item.conts'
                        ></nav-list>
                    </ol>
                    <div class='advertise'>
                        <span>商城动态</span>
                        <div class='adverCont'>
                            <div class="swiper-container smallSwiper">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        717商城社区服务功能正式上线！抢红包！晒家乡！好吃、好玩、好看尽在717商城社区！
                                    </div>
                                    <div class="swiper-slide">
                                        7.17安全食品商城周年庆，暑期放价嗨不停！好吃、安全、放心的食品，陪你度假期！
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 天天优惠 -->
                <div class="today">
                    <p>
                        <img v-lazy="'http://www.lb717.com/static/mobile/images/homeImg/todayimg.png'">
                        <em>天天特惠</em>
                        <small>每天有惊喜</small>
                    </p>
                    <span>更多<i class="icon iconfont icon-right"></i></span>
                </div>
                <!-- 图片 -->
                <div class="coupon">
                    <div class="leftcont">
                        <img v-lazy="'http://www.lb717.com/static/mobile/images/homeImg/home1.png'">
                    </div>
                    <div class="rightcont">
                        <p class="rightcont-top"> <img v-lazy="'http://www.lb717.com/static/mobile/images/homeImg/ruwei.png'"></p>
                        <p class="rightcont-bottom"><img v-lazy="'http://www.lb717.com/static/mobile/images/homeImg/gaodian.png'"></p>
                    </div>
                </div>
                <!-- 家乡的味道 -->
                <div class="homeTit">
                    <b></b>
                    <h4><img v-lazy="'http://www.lb717.com/static/mobile/images/homeImg/homelandlogo.png'"> 家乡味道</h4>
                    <span>更多<i class="icon iconfont icon-right"></i></span>
                </div>
                <!-- 产品列表 -->
                
                <div class="productList" v-if="produceList">
                    <div class="box" v-for="(item, index) in produceList" :key="index">
                        <product-list :item='item'></product-list>
                    </div>
                </div>
                <p class="end">我是有底线的...</p>
            </div>
        </section>
    </div>
</template>
<script>
import Headers from '../../../components/Home/Headers/Headers.vue'
import Swipers from '../../../components/Home/Swiper/Swiper.vue'
import NavList from '../../../components/Home/NavList/NavList.vue'
import ProductList from '../../../components/Home/ProductList/ProductList.vue'
export default {
    name: 'home',
    data () {
        return {
            navList: null,
            channel_id: 2,
            produceList: [],
            bool: true
        }
    },
    components: {
        Headers,
        Swipers,
        NavList,
        ProductList
    },
    created () {
        this.$http.get('/api/navList')
            .then((res) => {
                if (res. data.msg === 'Success') {
                    this.navList = res.data.list
                }
            })
        this.$http.post('/admin/showList').then((res) => {
            this.$store.commit('updata_car', res.data.list)
        })
        this.queryGoodsList()
    },
    methods: {
        queryGoodsList () {
            this.$http.post('/mall/index/getGoodsChannel', {
                channel_id: this.channel_id
            }).then((res) => {
               this.produceList = this.produceList.concat(res.data.data.data);
               this.bool = true;
            })
        },
        isScroll () {
            let select = this.$refs['scroller']
            let selectH = this.$refs['scroller'].offsetHeight;
            let mainH = this.$refs.main.offsetHeight;
            let scrollTop = select.scrollTop
            if (this.bool) {
                if ((mainH - selectH - scrollTop) < 50)  {
                    this.bool = false;
                    this.channel_id ++;
                    this.queryGoodsList()
                }
            }
        }
    },
    mounted () {
        new Swiper('.smallSwiper', {
            loop: true,
            direction: 'vertical',
            autoplay: 2000
        })
    }
}
</script>
<style scoped src='../Index.css'></style>
