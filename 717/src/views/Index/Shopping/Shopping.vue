<template>
    <div class="shopping">
       <h1>购物车</h1>
       <section class="scroll">
            <div class="shoppingList">
                <div class="emptyList" v-if="!$store.state.addCar.length">
                    <img v-lazy="'http://www.lb717.com/static/mobile/images/goshop/8.png'">
                    <p>购物车为空</p>
                    <button @click="goHome">去逛逛</button>
                </div>
                <div class="addList">
                    <car-list 
                    v-for="(val, index) in $store.state.addCar" 
                    :key="index"
                    :val='val'>
                    </car-list>
                </div>
            </div>
       </section>
       <div class="total">
            <p><span :class="{checked:this.$store.state.checkedAll}" @click="checkedAllFn">√</span>全选</p>
            <div class="sumBox">
                <h4>
                    <p>合计： <span>￥{{($store.state.sum).toFixed(2)}}</span></p>
                    <small>（运费：￥20）</small>
                </h4>
                <button>结算</button>
            </div>
       </div>
    </div>
</template>
<script>
import CarList from '../../../components/Shopping/CarList/CarList.vue'
export default {
    components: {
        CarList
    },
    methods: {
        goHome () {
            this.$router.push({name: 'Home'})
        },
        checkedAllFn () {
            this.$store.state.checkedAll = !this.$store.state.checkedAll
            this.$store.commit('updata_checkAll', this.$store.state.checkedAll)
            this.$store.commit('updata_sum')
        }
    },
    created () {
        this.$http_token.post('/admin/showList').then((res) => {
            this.$store.commit('updata_car', res.data.list)
        })
    }
}
</script>

<style scoped>

.shopping {
    height: 100%;
    width:100%;
    display: flex;
    flex-direction: column;
    background: #eee;
}
.shopping>h1{
    width: 100%;
    font-size: .36rem;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    background: #fafafb;
    border-bottom: 1px solid #e5e5e5;
    font-weight: normal;
}
.shopping> section {
    flex:1;
    overflow-y: scroll;
    background: #eee;
}
.scroll{
    flex:1;
}
.shoppingList{
    width: 100%;
    height: auto;

}
.emptyList{
    width: 100%;
    height: 4.8rem;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.emptyList img{
    width: 17%;
}
.emptyList p{
    margin: .2rem 0;
    font-size: .34rem;
}
.emptyList button{
    color: #fc4141;
    border:1px solid #fc4141;
    background: rgba(0,0,0,0);
    padding:.15rem .4rem;
    border-radius: 6px;
    font-size: .36rem;
}
.addList{
    width: 100%;
    height: auto;
}
.total {
    width: 100%;
    height: 1rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.total p{
    padding-left: .2rem;
    font-size: .36rem;
}
.total>p >span {
    display: inline-block;
    width: .4rem;
    height: .4rem;;
    text-align: center;
    list-style: .4rem;;
    border-radius: 50%;
    color: #fff;
    border:1px solid #999;
    margin-top:-.2rem;
    margin:0 .2rem;
}
.total .checked{
    background: red;
}
.total .sumBox{
    display: flex;
}
.total .sumBox h4{
    font-size: .32rem;
    font-weight: normal;
}
.sumBox {
    height: 100%;;
}
.total .sumBox button{
    border: none;
    background: lightcoral;
    color:#fff;
    font-size: .36rem;
    height: 100%;;
    padding: 0 .5rem;
}
</style>