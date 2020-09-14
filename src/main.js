import Vue from 'vue';
import App from './App.vue';
import VueGtag from 'vue-gtag';
import router from './router/index';
import mq from 'vue-mq';
import i18n from './i18n';
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.config.productionTip = false;

Vue.use(
  VueGtag,
  {
    config: {
      id: 'UA-177556391-1',
    },
    pageTrackerTemplate(to) {
      return {
        page_title: to.meta.title + 'Axcrypt - File Security Made Easy',
        page_path: to.path,
      };
    },
  },
  router
);

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
  if (nearestWithTitle)
    document.title =
      nearestWithTitle.meta.title + 'Axcrypt - File Security Made Easy';
  next();
});

new Vue({
  router,
  i18n,
  created() {
    AOS.init();
  },
  render: h => h(App),
}).$mount('#app');
