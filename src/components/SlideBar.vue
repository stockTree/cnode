<template>
  <div id="SlideBar" class="autherinfo">
    <div class="authersummay">
        <div class="topbar">作者</div>
        <div class="imgss">
            <img :src="item.avatar_url">
            <span>{{item.loginname}}</span>
        </div>
        <p>积分：{{item.score}}</p>
    </div>
    <div class="recent_topics">
       <div class="topbar">作者的其他话题</div> 
    <ul>
        <li v-for="list in slideslistone" :key=list.id>
            <router-link :to="{
                name:'postlist',params:{
                    id:list.id,name:list.author.loginname
                }
            }">
                {{list.title}}
            </router-link>
            
        </li>
    </ul>
    </div>
    <div class="recent_replies">
       <div class="topbar">作者的其他话题</div> 
    <ul>
        <li v-for="list in slideslisttwo" :key=list.id>
            <router-link :to="{
                name:'postlist',params:{
                    id:list.id,name:list.author.loginname
                }
            }">
                {{list.title}}
            </router-link>
            
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
  name: 'SlideBar',
  data(){
      return{
          item:{}
      }
  },
  methods:{
      geturl(){
    axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`).then(res=>{
        if(res.data.success===true){
            console.log(res.data.data)
        this.item=res.data.data;
        }
    }).catch(err=>{
        console.log(err)
    })
  }
  },
  computed:{
      slideslistone(){
          if(this.item.recent_topics){
             return this.item.recent_topics.splice(0,5) 
          }
      },
      slideslisttwo(){
          if(this.item.recent_replies){
             return this.item.recent_replies.splice(0,5) 
          }
      }
  },
  beforeMount(){
       this.geturl();
  },
  watch:{
      '$route'(to,from){
          this.geturl();
      }
  }

}
</script>

<style scoped>
.authersummay p{
    margin:0px 10px 10px 10px;
    padding-bottom:10px;
    font-size:14px;
    color:#333;
  }
.imgss>img{
    float: left;
}
.imgss{
    height: 70px;
    line-height: 70px;
    font-size: 16px;
    color: #778087
}
.authersummay, .recent_replies, .recent_topics {
    background-color: #fff;
  }
  .autherinfo {
    width: 328px;
    float: right;
    margin-top: 0;
  }
  li{
    padding: 3px 0 ;
  }
  .recent_replies ul, .recent_topics ul {
    margin-top: 0px;
    margin-bottom: 0px;
    list-style: none;
    padding-left: 14px;
  }

  ul a {
    font-size: 12px;
    text-decoration: none;
    color: #778087;
  }

  .topbar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 16px;
    font-size: 12px;
    margin-top: 10px;
  }

  img {
    height: 48px;
    width: 48px;
    border-radius: 3px;
    margin: 10px;
  }

  .loginname {
    width: 100px;
    float: right;
    margin-top: 22px;
    margin-right: 159px;
    font-size: 14px;
  }

  .loginname a {
    text-decoration: none;
    color: #778087;
  }

  .authersummay .topbar {
    margin-top: 0px;
  }
</style>
