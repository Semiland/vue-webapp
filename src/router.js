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
      redirect: `/${i18n.locale}/home`
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
        },

        // Careera
        {
          path: '220658PDE',
          name: '220658PDE',
          component: () => import(/* webpackChunkName: "contact" */ './views/ResearchAssist.vue')
        },
        {
          path: '220758PDE',
          name: '220758PDE',
          component: () => import(/* webpackChunkName: "contact" */ './views/PrdDesEngn.vue')
        },
        {
          path: '220858PDE',
          name: '220858PDE',
          component: () => import(/* webpackChunkName: "contact" */ './views/PrcsDevEng.vue')
        },
        {
          path: '220958PDE',
          name: '220958PDE',
          component: () => import(/* webpackChunkName: "contact" */ './views/PrcsSustEng.vue')
        }, 
        {
          path: '221058PDE',
          name: '221058PDE',
          component: () => import(/* webpackChunkName: "contact" */ './views/EquiEngn.vue')
        },  
        {
          path: '222058PDE',
          name: '222058PDE',
          component: () => import(/* webpackChunkName: "contact" */ './views/ProdMarket.vue')
        }, 
        {
          path: '223058PDE',
          name: '223058PDE',
          component: () => import(/* webpackChunkName: "contact" */ './views/SalSlystAndSupt.vue')
        }, 
        {
          path: '224058PDE',
          name: '224058PDE',
          component: () => import(/* webpackChunkName: "contact" */ './views/ProduSales.vue')
        }, 
        {
          path: '225058PDE',
          name: '225058PDE',
          component: () => import(/* webpackChunkName: "contact" */ './views/ExecAssistCEOCTO.vue')
        }, 
      ]
    }
  ]
})
