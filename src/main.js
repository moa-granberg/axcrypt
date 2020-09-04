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

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title + 'Axcrypt - File Security Made Easy'
  next();
});

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');
