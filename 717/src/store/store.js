import Vue from 'vue';
import VueX from 'vuex';
Vue.use(VueX);
const store = new VueX.Store({
    state: {
        list: null,
        addCar: [],
        sum: 0,
        checkedAll: false,
        address: []
    },
    mutations: {
        updata_list (state, data) {
            state.list = data
        },
        updata_car (state, data) {
            state.addCar = data
            // let num = 1;
            // let flag = true;
            // state.addCar.forEach(item => {
            //     if (item.id == data.id) {
            //         flag = false
            //         item.count ++
            //     }
            // })
            // if (flag) {
            //     data.count = 1;
            //     state.addCar.push(data)
            // }
        },
        updata_count (state, data) {
            state.addCar.forEach(item => {
                state.addCar.forEach(item => {
                    if (item.id == data.id) {
                        item.count = data.count
                    }
                })
            })
        },
        updata_checked (state) {
            // 单选控制全选
            let flag = true; // 有未选中存在
            state.addCar.forEach(item => {
               if (!item.checked) {
                flag = false
               } 
            })
            state.checkedAll = flag;
        },
        updata_checkAll (state, data) {
            // 全选控制单选
            state.addCar.forEach(item => {
                item.checked = data
            }) 
        },
        updata_sum (state) {
            let sum = 0
            state.addCar.forEach(item => {
                if (item.checked) {
                    sum += item.count * item.price
                }
            })
            state.sum = sum;
        },
        updata_adress (state, data) {
            // data.forEach((item, index) => {
            //     var tel = item.tel.split('')
            //     tel.splice(3,4,'****');
            //     var telStr = tel.join('')
            //     item.tel = telStr
            // })
            state.address = data
        }
    }
})
export default store