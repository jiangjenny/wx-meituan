import Vue from 'vue'
import App from './App'
import store from './store/index'

Vue.config.productionTip = false
App.mpType = 'app'

// 在原型上挂载store
Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()
