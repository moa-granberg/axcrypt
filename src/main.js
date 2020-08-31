import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import mq from 'vue-mq';
import i18n from './i18n';

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
  i18n,
  render: h => h(App),
}).$mount('#app');
