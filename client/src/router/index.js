import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Create from '../views/Create.vue';
import Update from "../views/Update.vue";

import ROUTES_NAMES from './routerNames';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: ROUTES_NAMES.Home,
    component: Home,
  },
  {
    path: '/create',
    name: ROUTES_NAMES.Create,
    component: Create,
  },
  {
    path: '/update/:id',
    name: ROUTES_NAMES.Update,
    component: Update
  }
];

const router = new VueRouter({
  routes,
});

export default router;
