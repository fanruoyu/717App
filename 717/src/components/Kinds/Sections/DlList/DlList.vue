<template>
    <keep-alive>
        <dl>
            <dt><img v-lazy="'http://www.lb717.com' + src" alt=""></dt>
            <dd>{{text}}</dd>
        </dl>
    </keep-alive>
</template>
<script>
export default {
    props: {
        src: {
            tyle: String
        },
        text: {
            tyle: String
        }
    }
}
</script>
<style scoped>
dl{
    width: 30%;
    height: 2.5rem;
    margin-left: .1rem;
    margin-top: .13rem;
    background: #f7f7f7;
    float: left;
    text-align: center
}
dl img{
    width: 100%;
}
</style>


