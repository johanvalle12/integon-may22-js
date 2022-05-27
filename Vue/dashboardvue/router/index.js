import Vue from 'vue';
import VueRouter from 'vue-router';

import ProgressComponent from '../src/components/pages/ProgressComponent.vue';
import Grafica1Component from '../src/components/pages/Grafica1Component.vue';
import LoginComponent from '../src/components/auth/LoginComponent.vue';
import RegisterComponent from '../src/components/auth/RegisterComponent.vue'
import DashboardComponent from '../src/components/pages/DashboardComponent.vue'
//import PageNotFoundComponent from '../src/components/pages/PageNotFoundComponent.vue'
import PageComponent from '../src/components/pages/Page-Component.vue'


Vue.use(VueRouter);

export const routes = [
    {
      path: '',
      name: 'default',
      component: PageComponent,
      children: 
      [
        {
            path: '/progress',
            name: 'progress',
            component: ProgressComponent
        },
        {
            path: '/grafica1',
            name: 'grafica1',
            component: Grafica1Component
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: DashboardComponent
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterComponent
    },
  ];

const router = new VueRouter ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;