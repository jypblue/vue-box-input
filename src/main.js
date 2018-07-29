import Vue from 'vue'
import App from './App.vue'
import VueBoxInput from '../dist/vue-box-input.js'
Vue.use(VueBoxInput)
new Vue({
  el: '#app',
  render: h => h(App)
})
