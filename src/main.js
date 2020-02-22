import Vue from 'vue'
import App from './App.vue'
import create from './utils/create';
import router from './router'
Vue.prototype.$bus = new Vue()
Vue.prototype.$create = create
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
