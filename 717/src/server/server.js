const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const queryApi = require('./queryApi.js');
const fs = require('fs');
const jwt = require('jsonwebtoken');
app.use(bodyparser.json())
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
// 请求录播图图片
const swiperList = require('./ServerModdle/indexSwiper.js')
app.get('/api/indexSwiper', swiperList)

// 请求home页导航列表
const navList = require('./ServerModdle/navList.js')
app.get('/api/navList', navList)

//请求下拉加载产品列表结合http
// const goodsChannel = require('./ServerModdle')
app.post('/mall/index/getGoodsChannel', (req, res) => {
    queryApi('/mall/index/getGoodsChannel', req.body, 'POST').then((data) => {
        res.end(data)
    })
})

//请求分类nav列表
app.post('/mall/category/topCategory', (req, res) => {
    queryApi('/mall/category/topCategory', req.body, 'POST').then((data) => {
        res.end(data)
    })
})

//请求分类主要内容
// app.post('/mall/category/getcatelist', (req, res) => {
//     queryApi('/mall/category/getcatelist', req.body, 'POST').then((data) => {
//         res.end(data)
//     })
// })
// 分类请求
const kind_list = require('./ServerModdle/kind_list.js')
app.post('/admin/category/getcatelist', kind_list)
// 登录请求
const login = require('./ServerModdle/login.js');
app.post('/api/user', login)
// 注册功能
const regist = require('./ServerModdle/regist.js');
app.post('/api/regist', regist)
// 展示购物车列表
const show_carList = require('./ServerModdle/show_carList.js')
app.post('/admin/showList', show_carList)
// 添加购物车
const addCar = require('./ServerModdle/addCar.js');
app.post('/admin/addCar', addCar)
// 城市是三级联动
const cityList = require('./ServerModdle/selectCity.js')
app.post('/admin/citylist', cityList)

//添加地址
const my_address = require('./ServerModdle/my_address.js');
app.post('/admin/myAddress', my_address)
// 读取地址
app.post('/admin/showAddress', (req, res) => {
    jwt.verify(req.headers.authorization, '1508', function(err, decoded) {
        if (err) {
            let my_address = JSON.parse(fs.readFileSync('./data_table/my_address.json'));
            res.end(JSON.stringify({msg: 'success', address: my_address.list})) 
        } else {
            let user_address = JSON.parse(fs.readFileSync('./data_table/user_list.json'));
            res.end(JSON.stringify({msg: 'success', address: user_address[decoded.data].addArr})) 
        }
    })
})
// 删除地址
const deleteA = require('./ServerModdle/delete.js');
app.post('/admin/delete', deleteA);
// 修改地址
const revamp = require('./ServerModdle/revamp.js');
app.post('/admin/revamp', revamp);
//空请求返回token
app.post('/admin/username', (req, res) => {
    let token = req.headers.authorization;
    jwt.verify(token, '1508', function(err, decoded) {
        if (err) {
            res.end(JSON.stringify({msg: 'error'}))
        } else {
            res.end(JSON.stringify({msg: 'success', userName: decoded}))
        }
      });
})
app.listen(3000, () => console.log('listening...'))