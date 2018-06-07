// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { XDialog, Popover, Card, Divider, Flexbox, FlexboxItem, Swiper, SwiperItem, Tab, TabItem, XButton, ButtonTab, ButtonTabItem, Panel, LoadingPlugin, AjaxPlugin } from 'vux'
import FastClick from 'fastclick'
import App from './App'
import router from '@/router'
Vue.component('swiper', Swiper)
Vue.component('swiper-item', SwiperItem)
Vue.component('tab', Tab)
Vue.component('TabItem', TabItem)
Vue.component('x-button', XButton)
Vue.component('button-tab', ButtonTab)
Vue.component('button-tab-item', ButtonTabItem)
Vue.component('panel', Panel)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('divider', Divider)
Vue.component('card', Card)
Vue.component('popover', Popover)
Vue.component('x-dialog', XDialog)
Vue.use(LoadingPlugin)
Vue.use(AjaxPlugin)
// Vue.prototype.$http.defaults.baseURL = 'https://easy-mock.com/mock/5af81c131900fd0e51de8b98'
// Vue.prototype.$http.defaults.baseURL = 'http://localhost:8081'
Vue.prototype.$http.defaults.baseURL = 'http://118.31.10.18:8081'
FastClick.attach(document.body)

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
