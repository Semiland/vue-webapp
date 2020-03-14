import Vue from 'vue'
import VueFuse from 'vue-fuse'
import VModal from 'vue-js-modal'
import ToggleButton from 'vue-js-toggle-button'
import VueCarousel from 'vue-carousel'
import BaiduMap from 'vue-baidu-map'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

import Slider from './components/Slider.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import VueRouter from '../node_modules/vue-router';

library.add(faArrowCircleRight)
library.add(faArrowCircleLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(ToggleButton)
Vue.use(VueFuse)
Vue.use(VModal)
Vue.use(Slider) 
Vue.use(VueCarousel)
Vue.use(BaiduMap, {
  ak: 'DD279b2a90afdf0ae7a3796787a0742e'
})

Vue.config.productionTip = false

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {

  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = 'en'
  }

  // set the current language for i18n.
  i18n.locale = language
  next()
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

// const router = new VueRouter({
//   routes: routes,
//   model: 'history',

// })
