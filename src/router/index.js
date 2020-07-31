import Vue from 'vue';
import VueRouter from 'vue-router';
//官方元件
// import Home from '@/components/HelloWorld';
import Login from '@/components/pages/Login';
import Dashboard from '@/components/Dashboard';
import Products from '@/components/pages/Products';
Vue.use(VueRouter);

export default new VueRouter({
  routes:[
      {
        path:'*',
        redirect:'login',
      },
      // {
      //   path:'/index',
      //   name:'首頁',
      //   component:Home,
      //   meta: { requiresAuth: true },
      // },

      {
          path:'/login',
          name:'Login',
          component: Login,
      },
      {
        path:'/admin',
        name:'後臺管理頁',
        component: Dashboard,
        meta: { requiresAuth: true },
        children:[
          {
            path:'products',
            name:'Products',
            component: Products,
            meta: { requiresAuth: true },
          }
      ],
      },
  ],  
});