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
            <dl-list 
              v-for="(val, i) in contens" 
              :key="i" 
              :src='val.src' 
              :text='val.options'>
            </dl-list>
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
            contens:[]
        }
    },
    components: {
        DlList
    },
    methods: {
        addClass (val,index) {
            this.ind = index;
            this.categorySon (val.cate_id)
        },
        topCategory () {
            this.$http_token.post('/mall/category/topCategory')
                .then((res) => {
                    this.list = res.data.data;
                })
        },
        categorySon (id) {
            this.$http.post('/admin/category/getcatelist', {
                cate_id: id
            }).then(res => {
                this.contens = res.data.list
            })
            /*if (this.cate_id == 2) {
                this.$http_token.post('/mall/category/getcatelist')
                    .then((res) => {
                        this.contens = res.data.data
                        // console.log(res.data.data)
                    })
            } else {
                this.contens = []
            }*/
            
        }
    },
    created () {
        this.topCategory();
        this.categorySon (2)
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

