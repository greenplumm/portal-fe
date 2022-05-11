import Vue from 'vue';
import Router from 'vue-router';
import Config from './components/config.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/content',
      name: 'content',
      redirect: '/partList',
      component: () => import('./views/part/content.vue'),
      children: [
        /* {
          path: '/partList',
          name: 'partList',
          component: () => import('./views/part/child.vue')
        } */
      ]
    },
    {
      path: '/config',
      name: 'config',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './../components/config.vue')
      component: Config
    }
  ]
});
router.beforeEach((to, from, next) => {
  // ...
  console.log('xxxxxx', to, from, next);
});
export default router;
