// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios'; //主要AJAX套件
import VueAxios from 'vue-axios'; //將他轉為Vue的套件
import 'bootstrap';
//上方為npm的套件內容

//下方為自訂義的套件內容
import App from './App';
import router from './router';
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
axios.defaults.withCredentials = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
});

router.beforeEach((to, from, next) => {
  console.log(to, from, next);
  if(to.meta.requiresAuth){
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then(response => {
        console.log(response.data);
        if(response.data.success){
            next();
        }else{
          next({
            path:'/login',
          })
        }
      });
  }else{
    next();
  }
  
});