import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TapTwo from '@/components/TapTwo'
import TapThr from '@/components/TapThr'
import TapFur from '@/components/TapFur'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/TapTwo',
      name: 'TapTwo',
      component: TapTwo
    },{
      path: '/TapThr',
      name: 'TapThr',
      component: TapThr
    },{
      path: '/TapFur',
      name: 'TapFur',
      component: TapFur
    }
  ]
})
