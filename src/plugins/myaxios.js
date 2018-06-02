import axios from 'axios';

const MyAxios = {};
MyAxios.install = function (Vue) {
  // 全局设置axios的baseUrl
  // axios.defaults.baseURL = 'http://localhost:3000';

  const instance = axios.create({
    baseURL: 'http://localhost:3000'
  });

  // const instance1 = axios.create({
  //   baseURL: 'http://xxx:80'
  // });

  Vue.prototype.$http = instance;
  // Vue.prototype.$http1 = instance1;
};

export default MyAxios;
