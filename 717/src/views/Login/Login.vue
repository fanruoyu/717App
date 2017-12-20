<template>
  <div class="login">
        <div class="header">
            <i class="icon iconfont icon-back"></i>
            <p>会员登录</p>
            <span @click="gotoRegist">注册</span>
        </div>
        <div class="form">
            <label for="">
                <i class="icon iconfont icon-people"></i>
                <input class='user'type="text" placeholder="请输入您的手机号" v-model.trim="tel">
            </label>
            <label for="">
                <i class="icon iconfont icon-lock"></i>
                <input class='pwd' type="password" placeholder="请输入您的密码" v-model.tirm="pwd">
            </label>
        </div>
        <button class="btn" @click="login">立即登录</button>
        <a href="#">忘记密码？</a>
  </div>
</template>
<script>
import { getCookie, setCookie } from '../../utiles/utiles'
export default {
    name: 'login',
    data () {
        return {
            tel: '',
            pwd: ''
        }
    },
    methods: {
        login () {
            let reg = /1[3,5,7,8,9][0-9]{9}/
            let errors = ''
            if (this.tel === '' || this.pwd === '') {
                errors = '账号，或密码不能为空'
            }
            if (errors) {
               this.$message(errors)
            } else {
                this.$http_token.post('/api/user', {
                    tel: this.tel,
                    pwd: this.pwd
                }).then((res) => {
                    this.$store.state.userName = res.data.token
                    if (res.data.msg === 'success') {
                        setCookie('token', res.data.token)
                        this.$router.push({name: 'Home'})
                        this.tel = '';
                        this.pwd = ''
                    } else {
                        this.$message('账号，或密码错误！');
                        this.tel = '';
                        this.pwd = ''
                    }
                })
            }
        },
        gotoRegist () {
            this.$router.push({name: 'Regist', query: {from: this.$route.name}})
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
    }
    .form label i {
        font-size: .6rem;
        color:#999
    }
    .form input{
        width: 80%;
        height: 100%;
    }
    .user {
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
