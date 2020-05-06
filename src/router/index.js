/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../view/Main/Main.vue'
import Homepage from '../view/Main/Homepage.vue'
// 声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/map',
      component: Homepage
    }
  ]
})
