<template>
  <div id="UseInfo">
      <div class="userInfomation">
      <section>
          <router-link to="/">
              <div class="postlist">主页</div>
          </router-link>
      
      <div class="lineH">
      <img :src="item.avatar_url">
        <span>{{item.loginname}}</span>
     </div>
      <p>{{item.score}}积分</p>
      <span>注册时间 {{item.create_at|timeF}}</span>
      </section>
      <div class="replies">
          <p>最近创建的话题</p>
          <ul>
              <li v-for="list in item.recent_topics" :key="list.id">
                  <img :src="list.author.avavtar_url">
                  <router-link :to="{name:'postlist',params:{
                      id:list.id
                  }}">
                      <span>{{list.title}}</span>
                  </router-link>
                  <span>{{list.last_reply_at|timeF}}</span>
              </li>
          </ul>
      </div>
      <div class="topics">
          <p>最近参与的话题</p>
          <ul>
              <li v-for="list in item.recent_replies" :key="list.id">
                  <img :src="list.author.avavtar_url">
                  <router-link :to="{name:'postlist',params:{
                      id:list.id
                  }}">
                      <span>{{list.title}}</span>
                  </router-link>
                  <span>{{list.last_reply_at|timeF}}</span>
              </li>
          </ul>
      </div>
  </div>
  </div>
</template>
  
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http='axios'
export default {
  name: 'UseInfo',
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
  beforeMount(){
       this.geturl();
  }

}

</script>

<style>

.userInfomation {
    background: white;
    width: 75%;
    margin: 10px auto;
  }
  .userInfomation section {
    padding: 12px;
  }
  .userInfomation img {
    width: 30px;
  }
  .userInfomation li {
    list-style:none;
  }
  .userInfomation .replies,
  .userInfomation .topics {
    font-size: 0.72rem;
    border-top: 10px #DDDDDD solid;
  }
  .userInfomation > div > p {
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    font-size: 0.75rem;
    margin: 0;
  }
  .userInfomation > div >ul > li {
    padding: 4px 0 4px 12px;
    white-space: nowrap;
    font-size: 0.72rem;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    vertical-align: middle;
  }
  .userInfomation > div >ul > li > a {
    color: #094E99;
    text-decoration: none;
  }
.lineH{
  line-height: 44px;

}
.lineH>img{
width: 40px;
  float: left;
}
.lineH>span{
  display: block;
 margin-left:50px;
 color:#778087;
 font-size:14px;
}
section span{
    color:#778087;
    font-size:14px;
}
section p{
   font-size:14px; 
}
.postlist{
        color: #80bd01;
        text-decoration: none;
        padding: 10px;
        background:#f6f6f6;
        border-radius:3px 3px 0 0 ;
        margin: 0 -12px;
         margin-top: -13px;
         margin-bottom:10px
}
a{
    text-decoration: none; 

}
</style>
