import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Parallax from './views/Parallax.vue'
import Video from './views/Video.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // base: __dirname,
  // base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Parallax
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/video',
      name: 'video',
      // component: () => import('./views/Video.vue')
      component: Video
    }
  ]
})
