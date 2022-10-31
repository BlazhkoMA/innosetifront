import Vuex from 'vuex'
import Vue from "vue";
Vue.use(Vuex)
const store = new Vuex.Store({
    state () {
        return {
            transfers: +localStorage.getItem('transfer'),
            menuOpen: !!localStorage.getItem('menuOpen'),
            dialogVisible: false,
            dialogMovieId: null
        }
    },
    mutations: {
        addTransfers(state){
            state.transfers = state.transfers + 1
            localStorage.setItem('transfer', state.transfers + '')
        },
        openModal(state, payload){
            state.dialogMovieId = payload
            state.dialogVisible = true
        },
        closeModal(state){
            state.dialogMovieId = null
            state.dialogVisible = false
        },
        setMenuState(state, payload){
            state.menuOpen = payload
            localStorage.setItem('menuOpen', payload ? 'expand' : '')
        },
    }
})

export default store;