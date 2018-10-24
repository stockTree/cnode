<template>
  <div id="articel" class="article">
    <div class="topic_header">
        <div>
            <span>{{items |timeF}}</span>
            <div class="topic_title">{{items.title}}</div>
        </div>
        <ul>
            <li>•发布于{{items.create_at|timeF}}</li>
             <li>•作者{{items.author.loginname}}</li>
              <li>•{{items.visit_count}}次浏览</li>
               <li>•来自{{items| tabF}}</li>
        </ul>
        <p v-html="items.content" class="markdown-body topic_content">
           
        </p>
</div>
        <div id="reply">
            <ul>
                <div class="topbar">回复</div>
                <li v-for="(ply,index) in items.replies" :key="ply.id" class="replySec">
                    <router-link :to="{name:'details',params:{
                        name:ply.author.loginname
                    }}">
                         <img :src="ply.author.avatar_url">
                    </router-link>
                    <router-link :to="{name:'details',params:{
                        name:ply.author.loginname
                    }}">
                         <span>{{ply.author.loginname}}</span>
                    </router-link>   
                    
                    <span>{{index+1}}楼</span>
                    <span>{{ply.create_at| timeF}}</span>
                    <span>☝{{ply.ups.length}}</span>
                    <p v-html="ply.content" class="markdown-body"></p>

                </li>
            </ul>
        </div>
 
  </div>
</template>
  
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http='axios'
export default {
  name: 'Articel',
  data(){
      return{
        items:{}
    }
  },
  methods:{
geturl(){
    axios.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`,{
        page:1,
        limit:10
    }).then(res=>{
        if(res.data.success===true){
            console.log(res.data.data)
        this.items=res.data.data;
        console.log(this.items.author.loginname)
        }
        
    }).catch(err=>{
        console.log(err)
    })
}
  },
beforeMount(){
    this.geturl();
},
 watch:{
          '$route'(to,from){
            this.geturl()
          }
      }
}
</script>

<style>
.topbar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 16px;
    font-size: 12px;
    margin-top: 10px;
  }

  .article:not(:first-child) {
    margin-right: 340px;
    margin-top: 15px;
  }

  #reply, .topic_header {
    background-color: #fff;
  }

  #reply {
    margin-top: 15px;
  }

  #reply img {
    width: 30px;
    height: 30px;
    position: relative;
    bottom: -9px;
  }

  #reply a, #reply span {
    font-size: 13px;
    color: #666;
    text-decoration: none;
  }
  .replySec{
    border-bottom:1px solid #e5e5e5;
    padding:0 10px;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }

  .replyUp a:nth-of-type(2) {
    margin-left: 0px;
    display: inline-block;
  }

  .topic_header {
    padding: 10px;
  }

  .topic_title {
    font-size: 20px;
    font-weight: bold;
    padding-top: 8px;
  }

  .topic_header ul {
    list-style: none;
    padding: 0px 0px;
    margin: 6px 0px;
  }

  .topic_header li {
    display: inline-block;
    font-size: 12px;
    color: #838383;
  }

  .topic_content {
    border-top: 1px solid #e5e5e5;
    padding: 0 10px;
  }

  .markdown-text img {
    width: 92% !important;
  }
</style>