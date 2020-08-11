import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AOS from 'aos'
import 'aos/dist/aos.css'

library.add(faBars)
library.add(faTimes)
library.add(faComments)
Vue.component('font-awesome-icon', FontAwesomeIcon)

export const eventBus = new Vue();

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init({disable: 'mobile'})
  },
  render: h => h(App),
}).$mount('#app')
