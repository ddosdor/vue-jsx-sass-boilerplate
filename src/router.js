import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: process.env.NODE_ENV === 'production' && 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About'),
    },
  ],
});
