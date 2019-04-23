import Vue from 'vue';

import '@/assets/styles/style';
import router from './router';
import App from './App';

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
