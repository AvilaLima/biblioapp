import Vue from 'vue';
import store from './store';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faKey, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBook,faKey,faGraduationCap);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
