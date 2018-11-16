import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const eventBus = {
  install(Vue) {
    Vue.prototype.$bus = new Vue()
  }
}
Vue.use(eventBus)
new Vue({
  render: h => h(App),
}).$mount('#app')
