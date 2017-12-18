import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Index from '../views/Index/Index.vue'
import Home from '../views/Index/Home/Home.vue'
import Kinds from '../views/Index/Kinds/Kinds.vue'
import My from '../views/Index/My/My.vue'
import Shopping from '../views/Index/Shopping/Shopping.vue'
import Public from '../views/Public/Public.vue'
import Search from '../views/Index/Search/Search.vue'
import Login from '../views/Login/Login.vue'
import Regist from '../views/Regist/Regist.vue'
import Address from '../views/Address/Address.vue'
import FillAddress from '../views/Address/FillAddress/FillAddress.vue'
import { log } from 'util';
import { getCookie } from '../utiles/utiles'
const router = new VueRouter({
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: 'index'
        },
        {
            path: '/index',
            component: Index,
            children: [
                {
                    path: '',
                    redirect: 'home',
                },
                {
                    path: 'home',
                    name: 'Home',
                    component: Home
                },
                {
                    path: 'kinds',
                    name: 'Kinds',
                    component: Kinds
                },
                {
                    path: 'shopping',
                    name: 'Shopping',
                    component: Shopping
                },
                {
                    path: 'my',
                    name: 'My',
                    component: My
                },
                {
                    path: 'search',
                    name: 'Search',
                    component: Search
                }
            ]
        },
        {
            path: '/public',
            name: 'Public',
            component: Public
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/regist',
            name: 'Regist',
            component: Regist
        },
        {
            path: '/address',
            name: 'Address',
            component: Address
        },
        {
            path: '/fillAddress',
            name: 'Fill',
            component: FillAddress
        }
    ]
});
router.beforeEach((to, from, next) => {
    if (to.name !== 'Login') {
        if (!getCookie('token')) {
            next({name: 'Login'})
        } else {
            if (to.name == 'My') {
                if (!getCookie('token')) {
                  next({name: 'Login'})
                } else {
                    // console.log(getCookie('token'))
                    next()
                }
            } else {
                next()
            }
        }
    }else {
        next()
    }
})
export default router