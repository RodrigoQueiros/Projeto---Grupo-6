import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Catalog from './views/Catalog.vue'
import Book from './views/Book.vue'
import Rankings from './views/Rankings.vue'
import Suggest from './views/Suggest.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Profile from './views/Profile.vue'
import Achievements from './views/Achievements.vue'

import Users from './views/backoffice/Users.vue'
import Books from './views/backoffice/Books.vue'
import Tags from './views/backoffice/Tags.vue'
import Suggestions from './views/backoffice/Suggestions.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/book/:id',
      name: 'book',
      component: Book
    },
    {
      path: '/rankings',
      name: 'rankings',
      component: Rankings
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/suggest',
      name: 'suggest',
      component: Suggest
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/books',
      name: 'books',
      component: Books
    },
    {
      path: '/tags',
      name: 'tags',
      component: Tags
    },
    {
      path: '/suggestions',
      name: 'suggestions',
      component: Suggestions
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: Achievements
    }
  ]
})
