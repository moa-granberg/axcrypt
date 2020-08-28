import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import mq from 'vue-mq';

Vue.config.productionTip = false;

Vue.use(mq, {
  breakpoints: {
    mobile: 950,
    desktop: Infinity,
  },
  defaultBreakpoint: 'mobile',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
