const appStore = {
    state () {
        return {
            transitionCount: +localStorage.getItem('transitionCount') ? +localStorage.getItem('transitionCount') : 0 ,
            isMenuOpen: !!localStorage.getItem('isMenuOpen'),
        }
    },
    mutations: {
        setTransition(state, payload){
            state.transitionCount = payload
        },
        setMenuState(state, payload){
            state.isMenuOpen = payload
        },
    },
    actions: {
        increaseTransition({commit, state}) {
            commit('setTransition', state.transitionCount + 1)
            localStorage.setItem('transitionCount', state.transitionCount + '')
        },
        clearTransition({commit}) {
            commit('setTransition', 0)
            localStorage.setItem('transitionCount', '0')
        },
        switchMenuState({commit}, payload) {
            commit('setMenuState', payload)
            localStorage.setItem('isMenuOpen', payload ? 'expand' : '')
        },
    },
    getters: {
        getTransitionCount(state){
            return state.transitionCount
        },
        getIsMenuOpen(state){
            return state.isMenuOpen
        },
    }
}

export default  appStore