<template>
  <div id="app">
    
   <Header/>
   <div class="main">
     <!-- <post-list></post-list> -->
     <router-view name="slide"></router-view>
     <router-view name="main"></router-view>
   </div>
   
  </div>
</template>
  
<script>
  import Header from './components/Header'
  import PostList from './components/PostList'
  // import Articel from './components/Articel'
export default {
  name: 'App',
  components:{
    Header,
    PostList
  }
 
}
</script>

<style>
body,html{
    padding:0;
    margin:0;
    background:#e1e1e1
}
.main{
  width:80%;
  margin: 0 auto;
  
}
</style>
