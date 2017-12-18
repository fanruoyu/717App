<template>
    <dl>
        <dt>
            <span :class="{checked:val.checked}" @click="checkedFn">√</span>
            <p><img v-lazy="val.img" alt=""></p>
        </dt>
        <dd>
            <h1>{{val.name}}</h1>
            <span>X<small>{{val.count}}</small></span>
            <p>￥<span>{{val.price}}</span></p>
            <section>
                <b @click="subFn(val.id, val.count)">-</b>
                <input type="text" readonly v-model="val.count">
                <b @click="addFn(val.id, val.count)">+</b>
            </section>
        </dd>
    </dl>
</template>
<script>
export default {
    props: {
        val: {
            type: Object
        }
    },
    methods: {
        checkedFn () {
            this.val.checked = !this.val.checked;
            // 计算总价
            this.$store.commit('updata_sum');
            this.$store.commit('updata_checked')
        },
        subFn (id, num) {
            if (num > 1) {
                num --
            }
            this.$store.commit('updata_count', {
                id: id,
                count: num
            })
            if (this.val.checked) {
                this.$store.commit('updata_sum')
            }
        },
        addFn (id, num) {
            num ++
             this.$store.commit('updata_count', {
                id: id,
                count: num
            });
            if (this.val.checked) {
                this.$store.commit('updata_sum')
            }
        }
    }
}
</script>
<style scoped>
dl {
    background: #fff;
    margin-bottom: .2rem;
    width: 100%;
    display: flex;
    padding: .4rem 0;
}
dl dt{
    flex:3;
    position: relative;
}
dl dd {
    flex:6;
}
dl dt span {
    position: absolute;;
    width: .4rem;
    height: .4rem;;
    text-align: center;
    list-style: .4rem;;
    border-radius: 50%;
    color: #fff;
    border:1px solid #999;
    top:50%;
    margin-top:-.2rem;
    margin-left: .2rem;
}
dl dt .checked{
    background: red;
}
dl dt p {
    width: 2rem;
    height: 2rem;;
    margin-left:.8rem;
    border:1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
}
dl dt  img{
    width: 90%;
    height: 90%;
}
dl dd {
    margin-left:.2rem;
    position: relative;
}
dl dd h1{
    display: inline-block;
    height: .8rem;
    word-break:break-all;
    -webkit-line-clamp:2;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    margin-bottom: .4rem;
}
dd p {
    color: red;
}
dd p  span{
    font-size: .36rem;
}
dd section{
    position: absolute;
    right: .2rem;
    bottom: 0rem;
}
dd section input {
    width: .6rem;
    height: .6rem;;
    margin:0 .1rem;
    text-align: center;
}
dd section b{
    border:1px solid #ccc;
    padding:.1rem .2rem;
}
</style>


