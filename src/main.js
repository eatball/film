// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './stores/index'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false

import 'common/css/index.styl'

Vue.prototype.axios = axios

Vue.filter('setWH',(url,arg)=>{
    return url.replace(/w\.h/,arg)
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
