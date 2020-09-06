import Vue from 'vue'
import App from './App.vue'

//全局使用组件
import TIcon from './assets/fonts/fonts'
import TButton from './components/button.vue'
import TButtonGroup from './components/button-group.vue'


Vue.component('t-icon', TIcon)
Vue.component('t-button', TButton)
Vue.component('t-button-group', TButtonGroup)

import './assets/fonts/fonts.css'
import './assets/styles/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
