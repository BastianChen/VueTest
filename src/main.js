// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './vuex/index'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import axios from './untils/http'
import '../static/global.css'

//具体路径有的不同，vue运行报错请看第五点

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI)

Vue.prototype.$axios = axios

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})

