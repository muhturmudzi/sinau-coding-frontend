import Vue from 'vue'
import App from './App.vue'

import routerInstance from './router'

Vue.config.productionTip = true

new Vue({
  router: routerInstance,
  render: h => h(App),
}).$mount('#app')