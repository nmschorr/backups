import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Pages
        {
          name: 'Create Graph',
          path: 'pages/creategraph',
          component: () => import('@/views/dashboard/pages/CreateGraph'),
        }, 
        {
          name: 'Saved Graphs',
          path: 'pages/savedgraphs',
          component: () => import('@/views/dashboard/pages/SavedGraphs'),
        },
        {
          name: 'Tokenomics',
          path: 'components/tokenomics',
          component: () => import('@/views/dashboard/component/Tokenomics'),
        },
        {
          name: 'Plots',
          path: 'assets/plots',
        },
        // Dashboard
        // {
        //   name: 'Dashboard',
        //   path: 'dashboard',
        //   component: () => import('@/views/dashboard/Dashboard'),
        // },        
        // Tables
        // {
        //   name: 'Blockchain',
        //   path: 'tables/regular-tables',
        //   component: () => import('@/views/dashboard/tables/RegularTables'),
        // },
        // Maps
        // {
        //   name: 'View Maps',
        //   path: 'maps/google-maps',
        //   component: () => import('@/views/dashboard/maps/GoogleMaps'),
        // },
 
        // E:\wsvue\vuetify-material-dashboard-master\src\views\dashboard\components\svgs
        // {
        //   name: 'Profile Card',
        //   path: 'componentsns',
        //   component: () => import('@/views/dashboard/componentsns/ProfileCardNs'),
        // },
        // Upgrade
        // {
        //   name: 'Upgrade',
        //   path: 'upgrade',
        //   component: () => import('@/views/dashboard/Upgrade'),
        // },
        // {
        //   name: 'pltreal',
        //   path: 'assets/plots/pltreal.svg',  
          // component: () => import('@/assets/plots/pltreal.svg'),  
        // },
        // {
        //   name: 'uoneplot',
        //   path: 'assets/users/uone',  
        //   component: () => import('@/assets/users/uone/e1.svg'),  
        // },
      ],
    },
  ],
})
