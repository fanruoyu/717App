<template>
    <div class="pop" v-if="bool">
        {{text}}
    </div>
</template>
<script>
export default {
    props: {
        bool: {
            type: Boolean
        },
        text: {
            type: String
        }
    }
}
</script>
<style scoped>
.pop{
    width: 60%;
    background: rgba(0,0,0,.6);
    color: #fff;
    text-align: center;
    border-radius: 30px;
    padding:.13rem 0;
    position: fixed;;
    top:24%;
    left:50%;
    margin-left:-28%;
}
</style>


