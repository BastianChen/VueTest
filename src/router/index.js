import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/components/Page1/Page1.vue'
import Page2 from '@/components/Page2/Page2.vue'
import Page3 from '@/components/Page3/Page3.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Page1',
      name: 'Page1',
      component: Page1
    },{
      path: '/Page2',
      name: 'Page2',
      component: Page2
    }, {
      path: '/Page3',
      name: 'Page3',
      component: Page3
    }
  ]
})
