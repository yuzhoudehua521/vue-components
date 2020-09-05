import Vue from 'vue'
import App from './App.vue'

//全局使用组件
import Button from './components/button.vue'

Vue.component('t-button', Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
