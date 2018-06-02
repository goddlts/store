import Vue from 'vue';
import Router from 'vue-router';

// 加载路由规则对应的组件
import HeroesList from '@/views/heroes/list';

// 注册Vue-Router插件
Vue.use(Router);

export default new Router({
  routes: [
    // { name: 'home', path: '/', redirect: '/heroes'},
    { name: 'home', path: '/', redirect: { name: 'heroes' }},
    { name: 'heroes', path: '/heroes', component: HeroesList }
  ]
});
