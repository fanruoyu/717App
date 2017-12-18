<template>
    <section>
        <ol class="nav" v-if="list">
            <li 
                v-for="(item, index) in list" 
                :key="index" 
                :class="{on: ind===index}" 
                @click="addClass(item, index)">
                {{item.cate_name}}
            </li>
        </ol>
        <div class="content">
            <dl-list v-for="(val, i) in contens" :key="i" :src='val.cate_icon' :text='val.cate_name'></dl-list>
        </div>
    </section>
</template>
<script>
import DlList from './DlList/DlList.vue'
export default {
    data () {
        return {
            ind: 0,
            list: [],
            contens:[],
            cate_id: 2
        }
    },
    components: {
        DlList
    },
    methods: {
        addClass (val,index) {
            this.ind = index;
            this.cate_id = val.cate_id
            this.categorySon ()
        },
        topCategory () {
            this.$http.post('/mall/category/topCategory')
                .then((res) => {
                    this.list = res.data.data;
                })
        },
        categorySon () {
            if (this.cate_id == 2) {
                this.$http.post('/mall/category/getcatelist')
                    .then((res) => {
                        this.contens = res.data.data
                        // console.log(res.data.data)
                    })
            } else {
                this.contens = []
            }
            
        }
    },
    created () {
        this.topCategory();
        this.categorySon ()
    }
}
</script>

<style scoped>

section {
    flex:1;
    display: flex;
}
.nav{
    width: 2.2rem;
    background: #f0eced;
    overflow: auto;
}
ol.nav li{
    text-align: center;
    line-height: .9rem;
    font-size: .3rem;
    font-weight: 500;
    color: #333;
}
ol.nav .on {
    color: #fc4141;
    background: #fff;
    text-align: center;
    border-right: none;
    border-left: 2px solid #fc4141;
}
.content{
    flex:1;
    background: #fff;
}
</style>

