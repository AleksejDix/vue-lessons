import Vue from 'vue'
import router from '@/plugins/router'
import { createPinia, PiniaVuePlugin } from 'pinia'
import '@/plugins/composition-api'
import '@/plugins/portal'
import '@/directives'
import '@/assets/css/index.css'
import App from '@/App'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount('#app')
