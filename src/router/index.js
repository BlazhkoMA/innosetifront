import Router from 'vue-router'
import Vue from 'vue'
import menu from "../../options/menu";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/innosetifront/',
    routes: [
      ...menu.map(item => {
          return {
              path: item.path,
              name: item.name,
              component: item.component
          }
      }),
      { path: '*', redirect: '/' }
    ]
})
