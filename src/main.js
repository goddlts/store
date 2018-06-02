// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 程序的入口
import Vue from 'vue';
// 根组件
import App from './App';
import router from './router';

// 导入bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// 导入css模块
import '@/assets/css/index.css';

// 原始的写法
// import axios from 'axios';
// // 让Vue实例中可以直接拿到axios对象
// Vue.prototype.$http = axios;

// 插件的使用
import MyAxios from '@/plugins/myaxios';
// Vue.use()内部调用了 MyAxios.install方法
Vue.use(MyAxios);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
