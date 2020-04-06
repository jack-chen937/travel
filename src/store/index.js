import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let defaultCity = '南昌'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {

}
export default new Vuex.Store({
  state: {
    city: localStorage.city || '南昌'
  },
  actions: {
    changeCity (ctx, city) {
      // 向mutations中传入city值
      ctx.commit('changeCity', city)
      console.log(city)
    }
  },
  mutations: {
    // 修改state中的值
    changeCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (error) {

      }
    }
  }
})
