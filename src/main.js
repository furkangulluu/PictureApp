import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VModal from 'vue-js-modal'

import Route from './routes/route'
import Store from './stores/store'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VModal)

const router= new VueRouter(Route)
const store = new Vuex.Store(Store);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
