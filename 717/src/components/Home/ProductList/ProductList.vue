<template>
    <dl @click="goTo(item)">
        <dt><img v-lazy="'http://www.lb717.com/' + item.obj_data"></dt>
        <dd>
            <small>{{item.goods_name}}</small>
            <p>
                <span>￥{{item.discount_price}}</span>
                <img @click.stop='addShops' v-lazy="'http://www.lb717.com/static/mobile/images/homeImg/homeland3.png'">
            </p>
        </dd>
    </dl>
</template>
<script>
export default {
    name: 'goods',
    props: {
        item: {
            type: Object
        }
    },
    methods: {
        goTo (item) {
            this.$router.push({name: 'Public', params: {data: item}})
        },
        addShops () {
            this.$http_token.post('/admin/addCar', {
                name: this.item.goods_name,
                id: this.item.goods_id,
                checked: false,
                price: this.item.discount_price,
                img: 'http://www.lb717.com/' + this.item.obj_data
            }).then((res) => {
                if (res.data.code) {
                    this.$store.commit('updata_car', res.data.list)
                }
                
            })
            // this.$store.commit('updata_car', {
            //     name: this.item.goods_name,
            //     id: this.item.goods_id,
            //     price: this.item.discount_price,
            //     img: 'http://www.lb717.com/' + this.item.obj_data
            // })
            this.$message('添加成功')
        }
    }
}
</script>
<style scoped>
    .productList .box dl{
        background: #fff;
        width: 100%;
        padding-bottom: .2rem;
    }
    .productList dl dt {
    height: 3.69rem;
    overflow: hidden;
    }
    .productList dl dt img{
    width: 100%;
    }
    .productList dl dd {
    padding: 0 .1rem;
    }
    .productList dl dd small{
    font-size: .28rem;
    width: 100%;
    margin-top:.1rem;
    display: inline-block;
    height: .8rem;
    word-break:break-all;
    -webkit-line-clamp:2;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    }
    .productList dl dd p {
    position: relative;
    margin-left: 0.1rem;
    font-weight: bold;
    margin-top: 5px;
    }
    .productList dl dd p  span{
    color: #fc4141;
    font-size: .32rem;
    }
    .productList dl dd p img{
    position: absolute;
    right: 3%;
    top: -.08rem;
    width: 0.65rem;
    height: 0.55rem; 
    }

</style>


