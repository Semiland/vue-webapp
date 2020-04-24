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
				
				/* Companies Positions */
        {
          path: 'r-d-center',
          name: 'r-d-center',
          component: () => import(/* webpackChunkName: "contact" */ './views/RandDCenter.vue')
        },
				{
          path: 'eng-manu',
          name: 'eng-manu',
          component: () => import(/* webpackChunkName: "contact" */ './views/EngineeringandManufacturing.vue')
        },
				{
          path: 'sales-market',
          name: 'sales-market',
          component: () => import(/* webpackChunkName: "contact" */ './views/SalesAndMarketing.vue')
        },
				{
          path: 'company-services',
          name: 'company-services',
          component: () => import(/* webpackChunkName: "contact" */ './views/CompanyServices.vue')
        },

        // Blog
        {
          path: '324656-bl-1',
          name: '324656-bl-1',
          component: () => import(/* webpackChunkName: "contact" */ './views/Blog1.vue')
        }, 
        {
          path: '324656-bl-2',
          name: '324656-bl-2',
          component: () => import(/* webpackChunkName: "contact" */ './views/Blog2.vue')
        },
        {
          path: '324656-bl-3',
          name: '324656-bl-3',
          component: () => import(/* webpackChunkName: "contact" */ './views/Blog3.vue')
        },
        {
          path: '324656-bl-4',
          name: '324656-bl-4',
          component: () => import(/* webpackChunkName: "contact" */ './views/Blog4.vue')
        },
        {
          path: '324656-bl-5',
          name: '324656-bl-5',
          component: () => import(/* webpackChunkName: "contact" */ './views/Blog5.vue')
        },
        {
          path: '324656-bl-6',
          name: '324656-bl-6',
          component: () => import(/* webpackChunkName: "contact" */ './views/Blog6.vue')
        },
        {
          path: '324656-bl-7',
          name: '324656-bl-7',
          component: () => import(/* webpackChunkName: "contact" */ './views/Blog7.vue')
        },
				
				// Application Area 
				{
          path: 'renev',
          name: 'renev',
          component: () => import(/* webpackChunkName: "contact" */ './views/Renevables.vue')
        },
				{
          path: 'ev-hve',
          name: 'ev-hve',
          component: () => import(/* webpackChunkName: "contact" */ './views/EVHVE.vue')
        },
				{
          path: 'industr',
          name: 'industr',
          component: () => import(/* webpackChunkName: "contact" */ './views/Industrial.vue')
        },
      ]
    } 
  ],

  data() {
    return{

    }
  },

  scrollBehavior(to, from, savedPosition){
    if(to.hash){
      return {
        selector: to.hash
      };
    }

    if(savedPosition){
      return savedPosition;
    }
    return {x:0, y:0};
  },

  methods: {
    
  }

})
