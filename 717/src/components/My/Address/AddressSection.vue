<template>
  <section>
    <h3>{{ item.name }} <span>{{ item.tel }}</span></h3>
    <p>{{ item.cancel + item.city + item.area + item.myaddress }}</p>
    <div class="bottom">
      <small><span :class="{checked: item.checked}" @click="item.checked =!item.checked">√</span>默认地址</small>
      <div class="event">
        <span @click.stop="revampFn"><i class="icon iconfont icon-edit"></i><small>编辑</small></span>
        <span @click="deleteAddress"><i class="icon iconfont icon-delete"></i><small>删除</small></span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
 props: {
     item: {
         type:Object
     }
 },
 methods: {
     deleteAddress () {
         this.$http.post('/admin/delete', {id: this.item.id}).then(res => {
             this.$store.commit('updata_adress', res.data.address.list);
         })
     },
      revampFn () {
          this.$router.push({name: 'Fill', params: {msg:this.item}})
      }
 },
    created () {
        console.log(this.$store.state.address)
 }
}
</script>
<style scoped>
.addressList section {
    background: #fff;
    width: 100%;
    height: aotu;
    margin-bottom: .2rem;
    padding:.2rem;
}
.addressList section h3{
    padding:.1rem 0;
    font-size: .38rem;
    font-weight: normal;
}
.addressList section h3 span{
    font-size: .34rem;
}
.addressList section p {
    margin: .2rem 0;
}
.bottom {
    padding:.1rem 0;
    border-top:1px solid #ccc;
    margin-top:.3rem;
    display: flex;
    justify-content: space-between;
}
.bottom small {
    padding:.2rem 0;
    font-size: .34rem;
}
.bottom small span {
    display: inline-block;
    width: .4rem;
    height: .4rem;;
    text-align: center;
    list-style: .4rem;;
    border-radius: 50%;
    color: #fff;
    border:1px solid #999;
    top:50%;
    margin-top:-.2rem;
    margin-right: .2rem;
}
.checked{
    background: red;
}
.event {
    padding:.1rem 0;
}
.event i {
    font-size: .48rem;
    margin-left:.2rem;
}
.event small {
    font-size: .34rem;
    margin-left:.1rem;
}
</style>


