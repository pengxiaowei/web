import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import http from "./http"
import './style.css'
import { VueEditor } from "vue2-editor";
Vue.component('vue-editor', VueEditor)

Vue.prototype.$http = http

Vue.config.productionTip = false

Vue.mixin({   //定义代码块
  computed: {
    uploadUrl() {
      return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
