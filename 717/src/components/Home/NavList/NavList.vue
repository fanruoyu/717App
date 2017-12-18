<template>
    <li>
        <img :src='src'/>
        <span>{{conts}}</span>
    </li>
</template>
<script>
export default {
    props: {
        src: {
            type: String
        },
        conts: {
            type: String
        }
    }
}
</script>
<style scoped>
li{
    width: 25%;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:.1rem;
    padding: .1rem 0;
}
li img{ 
    width: 50%;
}
li span{
    padding-top:.1rem;
}
</style>