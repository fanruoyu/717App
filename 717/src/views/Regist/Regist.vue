<template>
  <div class="regist">
      
        <div class="header">
            <i class="icon iconfont icon-back" @click="back"></i>
            <p>注册717</p>
            <span @click="gotoLogin">登录</span>
        </div>
        <div class="form">
            <label for="">
                <i class="icon iconfont icon-people"></i>
                <input class='user'type="text" placeholder="请输入您的手机号" v-model.trim="tel">
            </label>
            <label for="">
                <i class="icon iconfont icon-iconfont5"></i>
                <input type="text"  class='number' placeholder="请输入验证码" v-model.trim="number">
                <span>获取验证码</span>
            </label>
            <label for="">
                <i class="icon iconfont icon-lock"></i>
                <input class='pwd' type="password" placeholder="请输入您的密码" v-model.trim="pwd">
            </label>
        </div>
        <button class="btn" @click="regist">立即注册</button>
  </div>
</template>
<script>
export default {
    name: 'regist',
    data () {
        return {
            tel: '',
            pwd: '',
            number: '',
            from : this.$route.query.from
        }
    },
    methods: {
        gotoLogin () {
            this.$router.push({name: 'Login'})
        },
        regist () {
            let errors  = '';
            let reg = /1[3,5,7,8,9][0-9]{9}/
           if (!this.tel) {
               errors = '账号不能为空'
           } else if (!this.pwd) {
               errors = '密码不能为空'
           } else if (!this.number) {
               errors = '请输入验证码'
           } 
        //    else if (!reg.test(this.tel)) {
        //        errors = '用户格式有误'
        //    }
           if (errors) {
               this.$message(errors)
           } else  {
                this.$http_token.post('/api/regist', {
                tel: this.tel,
                pwd: this.pwd
            }).then((res) => {
                this.$message(res.data.msg);
                this.tel = '';
                this.number = '';
                this.pwd = '';
                if (res.data.code == 1) {    
                    this.$router.push({name: 'Login'})
                }
            })
           }
        },
        back () {
            this.$router.push({name: this.from})
        }
    }
}
</script>

<style scoped>
    .login {
        width: 100%;
        height: 100%;
        background: #eee;
    }
    .header{
        width: 100%;
        height: 1rem;
        background: #fafafb;
        line-height: 1rem;
        display: flex;
        justify-content: space-around;
    }
    .header i{
        color:.4rem;
        color:#999;
    }
    .header p{
        font-size: .36rem;
    }
    .header span{
        color:#fb6f70;
    font-size: .3rem;
    }
    .form {
        background: #fff;
    }
    .form label {
        display: block;
        height: 1rem;
        padding: 0 .5rem;
        position: relative;
    }
    .form label i {
        font-size: .6rem;
        color:#999
    }
    .form label span{
        position: absolute;;
        right: 16%;
        top:.05rem;
        border:1px solid #fb6f70;
        color:#fb6f70;;
        padding: .2rem;
        font-size: .34rem;
    }
    .form input{
        width: 80%;
        height: 100%;
    }
    .user, .number {
        border:0;
        border-bottom: 1px solid #ccc;
    }
    .pwd{
        border: 0;
        border-top: 1px solid #ccc;
    }
    .btn{
        width: 70%;
        border: none;
        margin-left:15%;
        background: #fc4141;
        color: #fff;
        font-size: .36rem;
        margin-top:1rem;
        display: block;
        height: 1.1rem;
        border-radius: 30px;
        margin-bottom: .1rem;
    }
    .login>a{
        position: absolute;
        right: 15%;
        color: #999;
        border-bottom: 1px solid #ccc;
    }
</style>
