# 717

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
## project structure

```js
├── node_module 安装包
├── dist 打包后生成文件
├── webpack.config.js weback打包配置
└── src
   ├── main.js  入口文件
   ├── App.js  视图文件
   ├── assets 存放图片文件
   ├── routers  路由配置
   └── server  
        ├── data_table  请求数据管理
        ├── SerModule  请求模块封装
        ├── queryApi.js 封装 node 开启真正借口服务配置
        └── server.js  node的express服务配置
   ├── stantic 所需静态文件  [css, fonts, libs]
   ├── store
        └── store.js  数据容器实例对象
            ├── actions 方法
            ├── mutition 方法
            └── state 属性
   ├── utiles 公用方法的封装
        └── Popup 封装共用插件
   ├── components 组件页面
        ├── Home 首页页组件
            ├── Headers 头部
            ├── NavList 导航列表
            ├── ProductList 产品列表
            └──Swiper 轮播图
        ├── Kinds 种类页组件
            ├── Headers 头部
            └── Sections 主体
                ├── Dl 产品下拉列表
        ├── Public 公共路由页组件
            └── 产品详情
        ├── My 我的页组件
            ├── Headers 头部
            └── Address 地址管理填写，展现
        └── Shopping 购物车页组件
            └── CarList 购物车列表
    ├── http 配置 axios [包含请求头部添加token检测]
    └── views 路由视图
        ├── Index 一级主要路由
            ├── index.css 
            ├── index.vue 
            ├──Home 首页路由
            ├──Kinds 种类页路由
            ├── My 我的页路由
            ├── Search 查血页面路由
            └── Shopping 购物车路由
        ├── Address 添加地址路由
        ├── Login   登录页路由
        ├── Pulic 公共路由
        └── Regist 注册页路由

```

## project Introduce

> 项目名称： 717商城，是一款移动端web app

### 项目功能

#### 大体了解

    > 该项目整体功能与淘宝等购物app类似，为客户提供方便的购物平台。用户可在该商城购买任意喜爱的商品。
    > 该项目最外层一个大的index路由，里面包含4个主题路由页面：home，kings， shopping， my。内部包含其他详情页，登录注册页面也包含在一级路由之下
    > home 页面展示商品，kinds展示商品种类，shopping，购物车页面包括添加购物车商品，以及商品数量总价计算，my我的页面包含个人信息填写，及用户账号管理
    > 登录注册页面放在一级路由下实现用户登录的验证以及用户注册717商城账号
    > 每个一级和二级路由下，还包含其余小的路由页面。

#### 深入了解

    > login登录页面，用户登录时向后台请求数据判断当前用户是否存在，若存在则判断用户的账号密码是否正确，进行登录，并将登录信息以token形式加密存贮在本地cookie下，并设置token过期时长。在路由跳转时候对登录页面进行了头部导航守卫，主要判断本地cookie是否存在token，如果不存在且该页面不是login页面则跳转到登录页面提醒用户登录
    > regist注册页面，用户登录时候如果现实用户不存在，则提示用户前往注册页进行注册。注册是判断用户注册的用户名是否存在以及各式是否符合要求
    > home首页展示了当天所有商品，这里包含了商品轮播图展示，轮播图展示是用来swiper实例，请求数据之后实例化swiper，但由于数据是异步请求的，必须把实例化swiper放在vue的$nextTick的回调函数下执行。下拉刷新列表，每当scroll到底部是请求数据进行展示。使用的原生方法，给dom绑定scroll事件。判断当滑动到离底部某个距离开始向后台请求数据。点击商品进入详情页，点击购物车图标可添加到购物车。这里做了阻止冒泡处理。商品详情页跳转路由，传参数将当前商品对应信息传递到详情页进行请求数据展示。详情页面也可对商品实施添加购物车功能。
    > kinds分类页，左边是一个一级导航列表展示，点击列表右边展示出对应二级列表内容。默认展示第一条信息内容。在左边列表每条数据上添加有唯一code值，通过点击当前数据匹配到合适的二级列表。该模块没有使用到路由跳转，只是普通的统计组件之间的传参，使用的是自定义事件方式传参数。
    > shopping购物车页面展示首页添加到购物车列表的商品，每种商品显示一次，多余的只在数量上进行改变。数量可进行加减，以及计算总金额，单选多选框。单选多选状态使用的是store数据容器来改变，点击结算时候，将已选择的商品总价进行计算，并判断当前用户是否为登录状态，及对token状态进行判断。如果未登录状态沪指token已经过期则提醒用户前往登录页面，否则就进行跳转结算页进行结算。
    > my我的管理，主要实现了地址栏添加展现删除以及修改功能。进入地址栏管理，这里涉及到路由跳转。如果不存在详细地址展示，则提醒用户添加新的地址，填写地址包括收件人姓名，手机号，地址等信息。保存地址后向后台发送数据将数据存储到后台进行管理，方便展示。对地址可删除，编辑。编辑时候跳转到编辑页路由。保存后对当前信息更新。

### 项目技术

    该款web app属于电商类的应用，使用的是vue主流框架，（vue2.0版本）结合了vue-router进行路由跳转，vuex实现数据容器更新数据，开发期间使用的是node的express启动了本地服务，结合vue的axios请求数据。数据方面启用mockjs摸底数据进行数据展示。页面主要使用vue单文件组件形式，单文件组件将页面分成模块，方便事后维护以及整改。为减少路由跳转，我们还是用到了动态组件，对页面内容进行展示。
    数据接口链接，使用到了node的http请求，解决node跨域问题设置相应头部信息，设置为允许跨域。创建axios实例设定默认基础路径。数据容器方面主要解决的问题就是组件之间传参问题，解决了使用props和自定义事件传参数费时费事得到弊端。开发期间我们还封装了一些常用的插件，比如说弹框的插件。其实可以使用ui框架自带的，比如是mintui的，但是考虑到了框架样式固定，改变起来比较难，于是我们选择自己来封装，使用起来也挺好。在路由跳转是进行导航守卫，进行某些操作。在请求数据是我们做了获取token处理，这样就可以在用户登录状态之下，随时获取到用户token信息。而且token是加密形式的，传递时候不存在泄漏用户信息的情况。整体上，主要使用的是es6的语法，而对模块的引用，我们选择了按需加载的方式来提升性能。es6箭头函数，来避免this指向问题。
    
For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
