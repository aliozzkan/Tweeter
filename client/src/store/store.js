import Vue from 'vue'
import Vuex from 'vuex'
import  * as getters from './getters'
import  * as mutations from './mutations'
import  * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token'),
        isLogged: localStorage.getItem('token')==undefined?false:true,
        user: JSON.parse(localStorage.getItem('user')),
        homeTweets: []
    },
    getters,
    mutations,
    actions,
})