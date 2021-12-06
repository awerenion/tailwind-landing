import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import VueLazyload from 'vue-lazyload'
import './index.css'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
