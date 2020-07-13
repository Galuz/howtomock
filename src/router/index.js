import Vue from 'vue';
import VueRouter from 'vue-router';
import BHome from '@/views/BHome.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/bhome',
    name: 'BHome',
    component: BHome,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
