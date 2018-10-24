import Vue from 'vue'
import Router from 'vue-router'
import PostList from '../components/PostList'
import Articel from '../components/Articel'
import UseInfo from '../components/UseInfo'
import SlideBar from '../components/SlideBar'


Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
   {
     path:'/',
     components:{
       main:PostList
     }
   },
   {
    name:'postlist',
    path:'/topic/:id&author=:name',
    components:{
       main:Articel,
       slide:SlideBar
    }
  },
  {
    name:'details',
   path:'/user/:name',
   components:{
     main:UseInfo
   }
 }
  ]
})
