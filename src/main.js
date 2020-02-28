// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//plugin
import './plugin/bootstrap';
import './assets/main.css'
import './assets/sidenav.css';
import Core from './plugin/Core';
//end-plugin

Vue.use(Core,{
  navBackground:'#448AFF',
  navTextColor:'#fff'
});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vueApp:'xxxxx',
  router,
  components: { App },
  template: '<App/>'
})
