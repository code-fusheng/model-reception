import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
import APlayer from '@moefe/vue-aplayer'

import './permission' // 权限控制

Vue.use(VueResource)
Vue.use(Antd)
Vue.use(ElementUI)
Vue.use(require('vue-moment'))

Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
