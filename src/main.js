// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
import router from './router'
import Navi from './components/Navi/Navi.vue'
import ElementUI from 'element-ui'	//手动变红
import store from './vuex/index'
import '../node_modules/element-ui/lib/theme-chalk/index.css'	//手动变红

//具体路径有的不同，vue运行报错请看第五点

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI)	//手动变红

new Vue({
  el: '#app',
  router,
  store,
  template: '<Navi/>',
  components: {Navi}
})

