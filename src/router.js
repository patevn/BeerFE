import Vue from 'vue'
import Router from 'vue-router'
import beers from './views/Beers.vue'
import New from './views/New.vue'
import Show from './views/Show.vue'
import Edit from './views/Edit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/beers',
    },
    {
      path: '/beers',
      name: 'beers',
      component: beers,
    },
    {
      path: '/beers/new',
      name: 'new-beer',
      component: New,
    },
    {
      path: '/beers/:id',
      name: 'show',
      component: Show,
    },
    {
      path: '/beers/:id/edit',
      name: 'edit',
      component: Edit,
    },
  ],
})
