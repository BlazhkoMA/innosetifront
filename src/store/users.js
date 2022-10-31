import {USERS_URL} from "../api/usersConfig";

const usersStore = {
    state () {
        return {
            dialogVisible: false,
            users: [],
            userData: null,
        }
    },
    mutations: {
        setDialogVisible(state, payload){
            state.dialogVisible = payload
        },
        setDialogUserId(state, payload) {
            state.dialogUserId = payload
        },
        setUsers(state, payload) {
            state.users = payload
        },
        setUser(state, payload) {
            state.userData = payload
        }
    },
    actions: {
         async openModal({commit}, payload){
            commit('setDialogVisible', true)
             const response = await fetch(USERS_URL + '/' +  payload)
             const user = await response.json()
             commit('setUser', user )
        },
        closeModal({commit}){
            commit('setDialogVisible', false)
            commit('setUser', null)
        },
        async fetchUsers({commit}){
            const response = await fetch(USERS_URL)
            const users = await response.json()
            commit('setUsers', users )
        },
    },
    getters: {
        getDialogVisible(state) {
            return state.dialogVisible
        },
        getUsers(state) {
            return state.users
        },
        getUser(state) {
            return state.userData
        },
    },
}

export default usersStore