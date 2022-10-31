import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VueCompositionAPI from '@vue/composition-api'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueCompositionAPI)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


