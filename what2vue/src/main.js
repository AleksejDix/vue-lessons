import Vue from 'vue'
import router from '@/plugins/router'
import store from '@/plugins/vuex'
import '@/plugins/composition-api'
import App from '@/App'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
