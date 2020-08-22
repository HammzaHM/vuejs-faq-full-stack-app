import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import hooks from '@u3u/vue-hooks';

import 'bulma/css/bulma.css';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueCompositionAPI);
Vue.use(hooks);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
