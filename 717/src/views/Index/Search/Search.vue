<template>
  <div class="search">
      <div class="header">
          <i class="icon iconfont icon-sousuo"></i>
          <input type="text" placeholder="请输入您要购买的商品" v-model.trim="searchGoods">
          <span @click="searchFn">搜索</span>
      </div>
      <div class="history">
          <p>最近搜索<i class="icon iconfont icon-delete" @click='deleteFn'></i></p>
          <div class="history_search">
              <p v-if="!searchHistory">暂无搜索记录...</p>
              <div class="myhistory">
                  <span 
                  v-for="(item, index) in searchHistory" 
                  :key="index">{{item}}</span>
              </div>
             <!-- 搜索记录列表 -->
          </div>
      </div>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
    data () {
        return {
            searchHistory: [],
            searchGoods: ''
        }
    },
    created () {
        let ls = localStorage;
        if (!ls.getItem('historyList')) {
            ls.setItem('historyList', JSON.stringify([]));
        }
        this.searchHistoryFn()
    },
    methods: {
        searchFn () {
            let ls = localStorage;
            if (!this.searchGoods) {
                return;
            }
            let oldHis = JSON.parse(ls.getItem('historyList'));
            oldHis.unshift(this.searchGoods);
            oldHis =  _.uniq(oldHis)
            ls.setItem('historyList', JSON.stringify(oldHis));
            this.searchGoods = ''
            this.searchHistoryFn()
        },
        deleteFn () {
            let ls = localStorage;
            ls.removeItem('historyList')
            this.searchHistoryFn()
        },
        searchHistoryFn () {
            let ls = localStorage;
            let list = JSON.parse(ls.getItem('historyList'))
            this.searchHistory = list
        }
    }
}
</script>

<style scoped>
.search {
    width: 100%;
    height: 100%;
    background: #fff;
}
.header{
    background: #fff;
    position: relative;
    padding:.1rem 0;
    border-bottom: 1px solid #ccc;
}
.header input{
    width: 75%;
    margin-left:6%;
    padding:.2rem .8rem;;
    border:none;
    background: #eee;
}
.header i {
    position: absolute;
    left:10%;
    top:.35rem;
}
.header span{
    position: absolute;
    right: .2rem;
    line-height: .8rem;
    font-size: .34rem;
}
.history p{
    padding:.24rem .2rem;
    font-size: .34rem;
    position: relative;
}
.history p i {
    position: absolute;
    right: .2rem;
    font-size: .4rem;
}
.myhistory {
    padding: 0 .2rem;
}
.myhistory span{
    border: 1px solid #333;
    padding:.1rem .2rem;
    display: inline-block;
    border-radius: 8px;
    margin-right: .2rem;
    margin-bottom:.2rem;
}
</style>

