import Vue from 'vue'
import App from './App.vue'
import router from './routers/routers.js'
import './stantic/style/style.css'
import './stantic/fontSize.js'
import './stantic/libs/swiper.min.css'
import './stantic/libs/swiper.min.js'
import './stantic/fonts/iconfont.css'
import axios from './http/axios.js'
import store from '@/store/store.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import popup from './utiles/Popup'
Vue.use(popup)
Vue.use(MintUI)
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
