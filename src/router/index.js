import Vue from 'vue';
import VueRouter from 'vue-router';
import * as Views from '../views';
import * as Pages from '../pages';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: Views.HomeView,
    meta: {
      title: ' ',
    },
  },
  {
    path: '/download',
    name: 'DownloadView',
    component: Views.DownloadView,
    meta: {
      title: 'Download | ',
    },
  },
  {
    path: '/business',
    name: 'BusinessView',
    component: Views.BusinessView,
    meta: {
      title: 'Business | ',
    },
  },
  {
    path: '/premium',
    name: 'PremiumView',
    component: Views.PremiumView,
    meta: {
      title: 'Premium | ',
    },
  },
  {
    path: '/pricing',
    name: 'PricingView',
    component: Views.PricingView,
    meta: {
      title: 'Pricing | ',
    },
  },
  {
    path: '/information',
    name: 'InformationView',
    component: Views.InformationView,
    meta: {
      title: 'Information | ',
    },
    children: [
      {
        path: 'get-started/:platform',
        name: 'GetStartedPage',
        component: Pages.GetStartedPage,
        meta: {
          title: 'Get Started | ',
        },
      },
      {
        path: 'features',
        name: 'FeaturesPage',
        component: Pages.FeaturesPage,
        meta: {
          title: 'Features | ',
        },
      },
      {
        path: 'requirements',
        name: 'RequirementsPage',
        component: Pages.RequirementsPage,
        meta: {
          title: 'Requirements | ',
        },
      },
      {
        path: 'reseller',
        name: 'ResellerPage',
        component: Pages.ResellerPage,
        meta: {
          title: 'Reseller | ',
        },
      },
      {
        path: 'reseller-application',
        name: 'ResellerApplicationPage',
        component: Pages.ResellerApplicationPage,
        meta: {
          title: 'Reseller Application | ',
        },
      },
      {
        path: 'usage-tips',
        name: 'UsageTipsPage',
        component: Pages.UsageTipsPage,
        meta: {
          title: 'Usage Tips | ',
        },
      },
      {
        path: 'security',
        name: 'SecurityPage',
        component: Pages.SecurityPage,
        meta: {
          title: 'Security | ',
        },
      },
      {
        path: 'technical-details',
        name: 'TechnicalDetailsPage',
        component: Pages.TechnicalDetailsPage,
        meta: {
          title: 'Technical Details | ',
        },
      },
      {
        path: 'release-notes',
        name: 'ReleaseNotesPage',
        component: Pages.ReleaseNotesPage,
        meta: {
          title: 'Release Notes | ',
        },
      },
      {
        path: 'cryptographic-hashes-of-files',
        name: 'CryptographicHashesOfFilesPage',
        component: Pages.CryptographicHashesOfFilesPage,
        meta: {
          title: 'Cryptographic Hashes of Files | ',
        },
      },
      {
        path: 'privacy-policy',
        name: 'PrivacyPolicyPage',
        component: Pages.PrivacyPolicyPage,
        meta: {
          title: 'Privacy Policy | ',
        },
      },
      {
        path: 'gdpr',
        name: 'GdprPage',
        component: Pages.GdprPage,
        meta: {
          title: 'GDPR | ',
        },
      },
      {
        path: 'terms-of-use',
        name: 'TermsOfUsePage',
        component: Pages.TermsOfUsePage,
        meta: {
          title: 'Terms of Use | ',
        },
      },
    ],
  },
  {
    path: '/support',
    name: 'SupportView',
    component: Views.SupportView,
    meta: {
      title: 'Support | ',
    },
    children: [
      {
        path: 'faq',
        name: 'FaqPage',
        component: Pages.FaqPage,
        meta: {
          title: 'FAQ | ',
        },
      },
      {
        path: 'axcrypt-business',
        name: 'AxcryptBusinessPage',
        component: Pages.AxcryptBusinessPage,
        meta: {
          title: 'AxCrypt Business | ',
        },
      },
      {
        path: 'regulatory-compliance',
        name: 'RegulatoryCompliancePage',
        component: Pages.RegulatoryCompliancePage,
        meta: {
          title: 'Regulatory Compliance | ',
        },
      },
      {
        path: 'forums',
        name: 'ForumLink',
        beforeEnter() {
          {
            location.href = 'http://www.axcrypt.net/forums/';
          }
        },
      },
      {
        path: 'blog',
        name: 'BlogLink',
        beforeEnter() {
          {
            location.href = 'http://www.axcrypt.net/blog/';
          }
        },
      },
      {
        path: 'password-generator',
        name: 'PasswordGeneratorPage',
        component: Pages.PasswordGeneratorPage,
        meta: {
          title: 'Password Generator | ',
        },
      },
      {
        path: 'service-status',
        name: 'ServiceStatusPage',
        component: Pages.ServiceStatusPage,
        meta: {
          title: 'Service Status | ',
        },
      },
    ],
  },
  {
    path: '/about',
    name: 'AboutView',
    component: Views.AboutView,
    meta: {
      title: 'About | ',
    },
    children: [
      {
        path: 'axcrypt',
        name: 'AboutAxcryptPage',
        component: Pages.AboutAxcryptPage,
        meta: {
          title: 'About AxCrypt | ',
        },
      },
      {
        path: 'jobs',
        name: 'JobsPage',
        component: Pages.JobsPage,
        meta: {
          title: 'Jobs: Apply Now | ',
        },
      },
      {
        path: 'jobs/:id',
        name: 'JobPositionPage',
        component: Pages.JobPositionPage,
        meta: {
          title: ' ',
        },
      },
      {
        path: 'press',
        name: 'PressPage',
        component: Pages.PressPage,
        meta: {
          title: 'Press and Media | ',
        },
      },
    ],
  },
  {
    path: '/sign-in',
    name: 'SignInView',
    component: Views.SignInView,
    meta: {
      title: 'Sign In | ',
    },
  },
  {
    path: '/application/:id',
    name: 'JobApplicationPage',
    component: Pages.JobApplicationPage,
    meta: {
      title: 'Application Form | ',
    },
  },
  {
    path: '/404',
    name: 'NotFound',
    component: Views.NotFoundView,
    meta: {
      title: 'Page Not Found | ',
    },
  },
  { path: '*', redirect: '/404' },
];

export default new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
