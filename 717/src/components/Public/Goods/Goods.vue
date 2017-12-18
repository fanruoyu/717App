<template>
  <div class="main">
      <dl>
          <dt>
              <div class="swiper-container goodSwiper">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide page">
                          <img src="http://www.lb717.com//public/upload/temp/2017/07-17/a1324f85faeab4bb134a74f5d9f1b1e4.jpg">
                      </div>
                      <div class="swiper-slide page">
                          <img src="http://www.lb717.com//public/upload/temp/2017/07-17/67ebc65a3e61b404a2954fca2574fe5d.jpg">
                      </div>
                      <div class="swiper-slide page">
                          <img src="http://www.lb717.com//public/upload/temp/2017/07-17/0bbc44e58c83a3eb8190913cc1b93937.jpg">
                      </div>
                  </div>
                  <div class="swiper-pagination  goodPage"></div>
              </div>
          </dt>
          <dd>
              <section>{{list.goods_name}}</section>
              <p>￥{{list.discount_price}} <span>￥68.00</span></p>
              <span>(运费:￥0.00)</span>
              <button>溯源查询</button>
          </dd>
      </dl>
  </div>
</template>
<script>
export default {
    props: {
        list: {
          type: Object
        }
    },
    mounted () {
      new Swiper('.goodSwiper', {
        loop: true,
        autoplay: 2000,
        pagination: '.goodPage'
      })
    }
}
</script>

<style scoped>
.main{
  flex:1;
  overflow: auto;
  background: #eee;
  display: flex;
  flex-direction: column;
}
dl {
  width: 100%;
  background: #fff;
}
dl dd {
  padding:.2rem;
  position: relative;
}
dl dd section {
  font-size: .26rem;
    padding:0 .2rem;
    font-weight: inherit;
  color:#333;
  line-height: .4rem;
  margin-bottom: .1rem;
}
dl dd p{
 font-size: .24rem;
  color: #999999;
  padding: 0 .2rem;
}
dl dd p span{
   font-size: .24rem;
  color: #999999;
}
dl dd p span{
  text-decoration: line-through
}
dl dd>span{
  color:#999;
  padding-left:.22rem;
  line-height: .6rem;;
}
dd button{
  position: absolute;
  bottom: .2rem;
  right: .3rem;
  width: 2rem;
  height: .82rem;
  background: #4f99f2;
  border-radius: 5px;
  border:none;
  color: #fff;
}
.goodSwiper {
  width: 100%;
}
.goodSwiper img{
  width: 100%;
}
</style>

