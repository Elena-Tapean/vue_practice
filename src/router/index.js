import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: function () {
      return import('../views/ContactView.vue')
    }
  },
  {
    path: '/products',
    name: 'products',
    component: function () {
      return import('../views/ProductsView.vue')
    }
  },
  {
    path: '/basket',
    name: 'basket',
    component: function () {
      return import('../views/BasketView.vue')
    }
  },
  {
    path: '*',
    name: 'Error',
    component: function () {
      return import('../views/ErrorView.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
