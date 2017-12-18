<template>
    <div class="swiper-container mainSwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide page" v-for="(item, index) in swiperList" :key="index">
                <img v-lazy="item.src">
            </div>
        </div>
        <div class="swiper-pagination  paginations"></div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            swiperList: null
        }
    },
    mounted () {
        this.$http.get('/api/indexSwiper')
            .then((res) => {
                if (res.data.msg === 'success') {
                    this.swiperList = res.data.list;
                    this.$nextTick(() => {
                        const swiper = new Swiper('.mainSwiper', {
                            loop:true,
                            autoplay: 1000,
                            pagination: '.paginations',
                            paginationClickable: true
                        })
                    })
                }
            })
    }
}
</script>
<style scoped>
 .mainSwiper {
  height: 3.54rem;
  overflow: hidden;width: 100%;
  margin-bottom: .1rem;
}
  .page {
    width: 100%;
  }
  .mainSwiper img{
    width: 100%;
  }

</style>