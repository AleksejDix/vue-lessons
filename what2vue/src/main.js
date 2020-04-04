import Vue from 'vue'
import router from '@/plugins/router'
import App from '@/App'
import store from '@/plugins/vuex'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
