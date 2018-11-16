import Vue from 'vue';
import Vuex from 'vuex';
import test from './test.js'
import user from './user.js'

Vue.use(Vuex)


export default new Vuex.Store({
  modules:{
    test,
    user
    
  }
})
