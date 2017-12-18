<template>
    <div class="header">
        <div class="logo">
            <img src="../../../assets/homelo.gif">
        </div>
        <div class="form">
            <img src="../../../assets/serach.png">
            <input type="text" placeholder="请输入您要购买的商品" @focus="onfocus">
        </div>
        <div class="myshop">
            <img src="../../../assets/shoping.png">
            <small>我的店铺</small>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        onfocus () {
            this.$router.push({name: 'Search'})
        }
    }
}
</script>

<style scoped>

  .header {
    width: 100%;
    height: 1rem;
    background: #fff;
    display: flex;
    position: relative;
  }
  .logo{
    width: 1rem;
    height: .44rem;
    margin:.28rem;
  }
  .logo img{
    height: 100%;
    width: 100%;
    text-align: center;
   
  }
  .myshop{
    width: 1.5rem;
    height: 1rem;
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
   align-items: center;
  }
  .myshop img{
    width: .45rem;;
    height: .45rem;;
    margin-top:.1rem;
  }
  .myshop small{
    line-height: .4rem;
    color:#fd4848;
  }
  .form{
    position: relative;
    width: 60%;
  }
  .form input{
    height: .76rem;
    width: 100%;
    margin-top:.14rem;
    text-align: center;
    border: none;
    background:#F5F5F5;
    border-radius: 5px;
  }
  .form img{
    position: absolute;
    left:5%;
    top:50%;
    margin-top: -.15rem;
    width: .3rem;
    height: .3rem;
  }
</style>

