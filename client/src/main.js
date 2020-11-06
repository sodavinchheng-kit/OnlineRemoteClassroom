import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Meta from 'vue-meta'
import Default from './layouts/Default.vue'
import Blank from './layouts/Blank.vue'

Vue.use(Meta)

Vue.component('default-layout', Default)
Vue.component('blank-layout', Blank)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')
