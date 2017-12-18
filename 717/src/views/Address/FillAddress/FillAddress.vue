<template>
  <div class="fill">
    <div class="header">
      <i 
        class="icon iconfont icon-back" 
        @click.stop="goBack">.
      </i>
      收货人
    </div>
    <ol class="myMsg">
      <li>
        <input 
          @focus='focusFn(0)'
          type="text" 
          v-model="name">
      </li>
      <li>
        <input 
          @focus='focusFn(1)'
          type="text" 
          v-model="tel">
      </li>
      <li>
        <div class="sele1">
          <select 
            v-model="cancel" 
            @change="changeCancel">
            <option>请选择省</option>
            <option 
              v-for="(item, index) in cancelList" 
              :key="index">{{ item.name }}  
            </option>
          </select>
        </div>
        <div class="sele1">
          <select 
            v-model="city"
            @change="changeCity">
            <option>请选择市</option>
            <option 
              v-for="(item, index) in cityList" 
              :key="index">{{ item.name }}  
            </option>
          </select>
        </div>
      </li>
      <li>
        <div class="sele2">
          <select v-model="area">
            <option>请选择区</option>
            <option 
              v-for="(item, index) in areaList" 
              :key="index">{{ item }}  
            </option>
          </select>
        </div>
      </li>
      <li>
        <input 
          @focus='focusFn(2)'
          type="text" 
          v-model="myaddress">
      </li>
    </ol>
    <p> 
      <span 
        @click="checked = !checked" 
        :class="{checked: checked}">√</span> 设置为默认地址</p>
    <button 
      class="save" 
      @click="saveMsg">保存</button>
  </div>
</template>
<script>
export default {
    data () {
        return {
            checked: true,
            name: '收货人姓名',
            tel: '手机号',
            myaddress: '详细地址',
            cancel: '请选择省',
            cancelList: [],
            city: '请选择市',
            cityList: [],
            area: '请选择区',
            areaList: []
        }
    },
    methods: {
        focusFn (i) {
            document.querySelectorAll('input')[i].value = '';
        },
        goBack () {
            this.$router.go(-1)
        },
        changeCancel () {
            this.city = '请选择市';
            this.area = '请选择区'
            this.cancelList.forEach(item => {
                if (item.name === this.cancel) {
                    this.cityList = item.city
                }
            })
        },
        changeCity () {
            this.area = '请选择区'
            this.cityList.forEach(item => {
                if (item.name === this.cancel) {
                    this.areaList = item.area
                }
            })
        },
        saveMsg () {
            let errors = '';
            let reg = /1[35789][0-9]{9}/
            if (!this.name) {
                errors = '请输入收货人姓名'
            } else if (!this.tel) {
                errors = '请输入收货人电话'
            } else if (!reg.test(this.tel)) {
                errors = '电话格式有误'
            }else if (!this.cancel) {
                errors = '请选择省'
            } else if(!this.city){
                errors = '请选择市'
            }else if (!this.myaddress) {
                errors = '请填写具体地址'
            }
            if (errors) {
                this.$message(errors);
                return;
            }
            // if (this.$route.params.msg) {
            //     console.log(0);
            //     return;
            // }
            this.$http.post('/admin/myAddress', {
                checked: this.checked,
                name: this.name,
                tel: this.tel,
                cancel: this.cancel,
                city: this.city,
                area: this.area,
                myaddress: this.myaddress
            }).then((res) => {
                if (res.data.msg === 'success') {
                    this.$message(res.data.msg);
                    // this.$store.commit('updata_adress', res.data.address.list);
                    this.name = '收货人姓名';
                    this.tel = '手机号'
                    this.cancel = '请选择省'
                    this.city = '请选择市'
                    this.area = '请选择区'
                    this.myaddress = '详细地址'
                }
                
            })
        }
    },
    created () {
        // if(this.$route.params.msg) {
        //     this.checked = this.$route.params.msg.checked
        //     this.name = this.$route.params.msg.name
        //     this.tel = this.$route.params.msg.tel
        //     this.myaddress = this.$route.params.msg.myaddress
        //     this.cancel = this.$route.params.msg.cancel
        // }
        this.$http.post('/admin/citylist')
            .then((res) => {
                this.cancelList = res.data.list
            })
    }
}
</script>
<style scoped>
.fill{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #eee;
}
.header{
    width: 100%;
    background: #fff;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    font-size: .4rem;
    position: relative;
}
.header i {
    position: absolute;
    left: 0.2rem;
}
.myMsg {
    padding: 0 .2rem;
}
.myMsg li {
    height: 1rem;
    margin-top:.3rem;
}
.myMsg li input{
    width: 100%;
    border:none;
    height: 100%;
    background: #fff;
    padding-left:.2rem;
}
.myMsg li {
    display: flex;
    justify-content: space-between;
}
.myMsg li .sele1 {
    width: 45%;
    background: #fff;
}
.myMsg li .sele2 {
    width: 100%;
    height: 100%;
    background: #fff;
}
.sele1 select, .sele2 select{
    border: 0;
    width:100%;
    height: 100%;
    padding-left:.2rem;
}
.fill > p {
    margin:.3rem 0;
    padding-left:.2rem;
}
.fill > p span{
    display: inline-block;
    width: .4rem;
    height: .4rem;
    border: 1px solid #ccc;
    border-radius: 50%;
    color: rgba(0,0,0,0);
    text-align: center;
    left: .4rem;;
}
.fill > p .checked {
    background: lightcoral;
    color: #fff;
}
.save{
    width: 70%;
    border: none;
    background: lightcoral;
    padding: .2rem 0;
    color: #fff;
    font-size: .4rem;
    border-radius: 20px;
    margin-left:15%;
}
</style>


