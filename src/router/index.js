import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/layouts/Main';
import DashboardRoute from './DashboardRoute';
Vue.use(Router)

export default new Router({
  routes: [
    { path:'/dashboard',name:'dashboard',component:Main,children:DashboardRoute}
   
  ]
})
