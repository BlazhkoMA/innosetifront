import Router from 'vue-router'
import Vue from 'vue'
import menu from "../../options/menu";

Vue.use(Router)

export default new Router({
  routes: [
      ...menu.map(item => {
          return {
              path: item.route,
              name: item.alias,
              component: item.component
          }
      })
  ]
})
