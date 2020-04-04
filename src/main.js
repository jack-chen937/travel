// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mintUI from 'mint'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastclick from 'fastclick'// 解决手机点击延迟300ms问题
import './assets/styles/reset.css'// 重置css
import './assets/styles/border.css'// 解决手机端1px边框问题
import './assets/styles/iconfont.css'
import 'swiper/css/swiper.css'


Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
