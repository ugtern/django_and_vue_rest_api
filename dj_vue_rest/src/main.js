import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  components: {
    'django': App
  },
  render: h => h(App)
})
