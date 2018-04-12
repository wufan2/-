// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// 引入全局scss文件
import './stylesheets/main.scss'
// 引入axios
import axios from 'axios'
// 在Vue的原型上添加http事件，让它等于axios
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
