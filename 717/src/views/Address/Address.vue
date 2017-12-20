<template>
  <div class="address">
    <div class="header">
      <i 
        class="icon iconfont icon-back" 
        @click.stop="goBack">.</i>
      收货地址
      <i 
        class="icon iconfont icon-shouye" 
        @click.stop="goHome">.</i>
    </div>
    <div class="addressList">
      <div 
        class="main" 
        v-if="$store.state.address">
        <address-sect
          v-for="(item, index) in $store.state.address"
          :key="index"
          :item="item">
        </address-sect>
      </div>
    </div>
    <button 
      class="add" 
      @click.stop="goFill">
      <i class="icon iconfont icon-add_light">.</i>新增地址
    </button>
  </div>
</template>
<script>
import AddressSect from '../../components/My/Address/AddressSection.vue'
export default {
  data () {
      return {
          list: null
      }
  },
  components: {
      AddressSect
  },
  methods: {
      goBack () {
          this.$router.go(-1)
      },
      goHome () {
          this.$router.push({name: 'Home'})
      },
      goFill () {
          this.$router.push({name: 'Fill'})
      }
  },
  created () {
      this.$http_token.post('/admin/showAddress').then(res => {
          // this.list = res.data.address.list;
          this.$store.commit('updata_adress', res.data.address);
      })
  }
}
</script>

<style scoped>
.address{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #eee;
}
.header{
    width: 100%;
    height: 1rem;
    position: relative;
    text-align: center;
    background: #fff;
    border-bottom: 1px solid #ccc;
    line-height: 1rem;
}
.header i {
    position: absolute;
    font-size: .44rem;
}
.header i:nth-child(1) {
    left:.2rem;
}
.header i:nth-child(2) {
    width: .7rem;
    height:.7rem;
    right:.4rem;
    line-height: .7rem;
    text-align: center;
    top:.15rem;
    border:1px solid #ccc;
    border-radius: 50%;
}
.addressList{
    flex: 1;
    overflow-y: scroll;
}

.add{
    margin-top:1rem;
    border: none;
    background: lightcoral;
    color:#fff;
    text-align: center;
    width: 70%;
    padding:.4rem 0;
    border-radius: 50px;
    margin-left:15%;
    font-size: .4rem;
    margin-bottom: .5rem;
}
.add i {font-size: .44rem;}
</style>


