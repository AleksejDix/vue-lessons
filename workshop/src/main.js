import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

Vue.component('inlineCode', {
  name: 'InlineCode',
  render(h) {
    return h('code', [this.$slots.default])
  },
})

Vue.component('wrapper', {
  name: 'Wrapper',
  render(h) {
    return h('div', [this.$slots.default])
  },
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
