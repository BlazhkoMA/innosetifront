import Vuex from 'vuex'
import Vue from "vue";
Vue.use(Vuex)
const store = new Vuex.Store({
    state () {
        return {
            transfers: +localStorage.getItem('transfer'),
            menuOpen: !!localStorage.getItem('menuOpen'),
            dialogVisible: false,
            dialogUserId: null
        }
    },
    mutations: {
        addTransfers(state){
            state.transfers = state.transfers + 1
            localStorage.setItem('transfer', state.transfers + '')
        },
        clearTransfers(state){
            state.transfers = 0
            localStorage.setItem('transfer', '0')
        },
        openModal(state, payload){
            state.dialogUserId = payload
            state.dialogVisible = true
        },
        closeModal(state){
            state.dialogUserId = null
            state.dialogVisible = false
        },
        setMenuState(state, payload){
            state.menuOpen = payload
            localStorage.setItem('menuOpen', payload ? 'expand' : '')
        },
    }
})

export default store;