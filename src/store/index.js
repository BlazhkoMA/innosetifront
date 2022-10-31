import Vuex from 'vuex'
import Vue from "vue";
import usersStore from "./users";
import appStore from "./app";
Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        user: usersStore,
        app: appStore
    }
})

// TODO to actions get users and user
export default store;