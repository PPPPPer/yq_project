/*
入口js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from 'echarts/dist/echarts.min.js'
import china from 'echarts/map/json/china.json'
echarts.registerMap('china', china)
Vue.prototype.$echarts = echarts
var vue = new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router
})
