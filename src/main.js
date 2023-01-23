import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {store} from './store'
//import VueRouter from 'vue-router'
import router from './router'


Vue.config.productionTip = false



new Vue({
  store:store,
  vuetify,
  router,
  mode:'history',
  render: h => h(App)
  
}).$mount('#app')
