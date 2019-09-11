import Vue from 'vue'
// import VueRouter from 'vue-router'
import App from './App.vue'
// import Sensors from './components/Sensors'
// import VirtualComponent from './components/VirtualComponent'
// import Robot from './components/Robot'

Vue.config.productionTip = false

// Vue.use(VueRouter)

// const routes = [
//   {path: '/sensors', component: Sensors},
//   {path: '/virtual-components', component: VirtualComponent},
//   {path: '/robot', component: Robot}
// ]

// const router = new VueRouter({
//   routes
// })

new Vue({
  // router,
  render: function (h) { return h(App) },
}).$mount('#app')
