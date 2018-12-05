import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Catalog from './views/Catalog.vue'
import Book from './views/Book.vue'
import Rankings from './views/Rankings.vue'
import Suggest from './views/Suggest.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    {
      path: '/rankings',
      name: 'rankings',
      component: Rankings
    },
    {
      path: '/suggest',
      name: 'suggest',
      component: Suggest
    }
  ]
})
