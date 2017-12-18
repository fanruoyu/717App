<template>
    <div class="header">
        <span @click="goBack"><i class="icon iconfont icon-back"></i>返回</span>
        <h4>
            <span :class="{active: className}" @click="addClassO">商品</span>
            <span :class="{active: !className}" @click="addClassT">详情</span>
        </h4>
        <small @click="goHome"><i class="icon iconfont icon-shouye"></i></small>
    </div>
</template>
<script>
export default {
    data () {
        return {
            className: true
        }
    },
  methods: {
      goBack () {
          this.$router.go(-1)
      },
      addClassO () {
          this.className = true;
          this.$emit('send', 'Goods')
      },
      addClassT () {
          this.className = false
          this.$emit('send', 'Menute')
      },
      goHome () {
          this.$router.push({name: 'Home'})
      }

  }
}
</script>
<style scoped>
.header{
    width: 100%;
    height: 1rem;;
    position: relative;
}
.header>span{
    position: absolute;
    left:.15rem;
    top:.35rem;
    font-size: .32rem;
    color:#666;  
    
}
.header>span i{
    font-size: .4rem;
    vertical-align: middle;
    color:#ccc;
}
h4{
    display: flex;
    line-height: .9rem;
    justify-content: center;
}
h4 span{
    margin-right: .2rem;
    font-size: .38rem;
    font-weight: normal;
    border-bottom: 2px solid rgba(0,0,0,0);
    padding:0 .1rem;
    color:#666;
}
h4 .active{
    border-bottom-color: black;
}
.header small {
    position: absolute;
    right: .77rem;
    top:.2rem;
    width: .7rem;
    height: .7rem;
    border-radius: 50%;
    border:1px solid #ccc;
    text-align: center;
    line-height: .7rem;
}
.header small i {
    font-size: .5rem;
    color:#ccc;
}
</style>


