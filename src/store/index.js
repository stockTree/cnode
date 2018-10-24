import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
      num:80
    },
    mutations:{
              increase(){
                this.state.num++
              },
              decrease(){
                this.state.num=this.state.num-10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
              }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    },
    actions:{
        actionsIncrease(context){
            context.commit('increase')
        },
        actionsDecrease(context){
            context.commit('decrease')
        }
    },
    getters:{
        getNum(state){
           return state.num>0?state.num:0
        }
    }
  })