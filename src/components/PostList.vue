<template>
  <div id="PostList">
      <div class="toplist">
          <span>全部</span>
          <span>精选</span>
          <span>问答</span>
          <span>招聘</span>
          <span>分享</span>
      </div>
  <ul>
      <li v-for="item in items" :key="item.id">
            <img :src="item.author.avatar_url">
            <span>
              <span>{{item.reply_count}}</span>/{{item.visit_count}}
            </span>
            <span :class="[{item_good:(item.good==true)},{item_top:(item.top==true)},{
                item_tab:(item.good!=true&&item.top!=true)
            }]">
            <span>{{item|tabF}}</span></span>
            <router-link :to="{name:'postlist',params:{id:item.id,name:item.author.loginname}}">
                <h5>{{item.title}}</h5>
            </router-link>
            
            <span class="timeR">{{item.create_at|timeF}}</span>
      </li>
  </ul>
  <Pagination @handleList="changepages"></Pagination>
  </div>
</template>
  
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http='aosix'
import Pagination from './Pagination'
export default {
  name: 'PostList',
  data(){
      return{
          items:[],
          pages:1
      }
  },
  
  components:{
      Pagination
  },
  methods:{
      getData(){
             axios.get('https://cnodejs.org/api/v1/topics',{
          params:{
            page:this.pages,limit:10
          }
          
      }).then((res)=>{
          console.log(res)
          this.items=res.data.data
          console.log(this.items)
      }).catch((err)=>{
          console.log(err)
      })
      },
      changepages(value){
          this.pages=value
          this.getData();
      }
  },
    beforeMount(){
     this.getData();
  }

}
</script>

<style scoped>
ul{
    list-style:none;
    background:#fff;
    margin-top:0px;
    padding:0;

}
    li>img{
        width:30px;
        
    }
    ul>li{
        border-bottom:1px solid #f0f0f0;
        width:100%;
        position: relative;
        display:flex;
        align-items:center;
        padding:10px;
        box-sizing:border-box;
    }
    h5{
        display:inline-block;
        max-width:60%;
        font-size: 16px;
        font-weight: normal;
        white-space:nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin:0;
        margin-left:3px
    }
    li>span:nth-child(2){
        text-align: center;
         width:70px;
         display:inline-block;
         color:#b4b4b4;
        font-size:10px; 
    }
    li>span>span{
        color:#9e78c0;
        font-size:14px;
        
    }
    .item_good>span,
    .item_top>span{
        background:#80bd01;
        padding:2px 4px;
        color:#fff;
        font-size:12px;
        border-radius:3px;
    }
    .item_tab>span{
        background:#e5e5e5;
        color:#999;
        padding:2px 4px;
        font-size:12px;
        border-radius:3px;
    }
    .timeR{
       position: absolute;
        font-size:11px;
        right:10px;
        color:#778087
    }
    .toplist{
        background:#f6f6f6;
        border-radius:3px 3px 0 0; 
        margin-top:16px;
    }
    .toplist>span:first-child{
        color:#fff;
        background:#80bd01;
        border-radius:3px;
        padding:3px 4px;
        margin-left:20px;
    }
    .toplist>span{
        display: inline-block;
        margin: 8px 10px;
        font-size: 14px;
        color:#80bd01;
    }
</style>
