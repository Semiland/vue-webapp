import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import i18n from './i18n'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: `/${i18n.locale}`
    },
    {
      path: '/:lang',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        // {
        //   path: '/',
        //   name: 'home',
        //   component: Home
        // },
        {
          path: 'home',
          name: 'home',
          component: () => import(/* webpackChunkName: "contact" */ './views/Home.vue')
        },
        {
          path: 'services',
          name: 'services',
          component: () => import(/* webpackChunkName: "contact" */ './views/Services.vue')
        },
        {
          path: 'career',
          name: 'career',
          component: () => import(/* webpackChunkName: "contact" */ './views/Career.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import(/* webpackChunkName: "contact" */ './views/Blog.vue')
        }
      ]
    }
  ]
})
