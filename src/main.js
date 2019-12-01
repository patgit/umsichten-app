import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store';

import Home from './components/Home.vue'
import Page from './components/Page.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  // { path: '*', component: Home },
  { path: '/:slug', component: Page },
]

const router = new VueRouter({
  routes
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
