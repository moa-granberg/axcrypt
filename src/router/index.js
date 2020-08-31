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
  },
  {
    path: '/download',
    name: 'DownloadView',
    component: Views.DownloadView,
    // Eventually add another key for phraseKey-mapping
  },
  {
    path: '/business',
    name: 'BusinessView',
    component: Views.BusinessView,
    // Awaiting finished architecture
  },
  {
    path: '/pricing',
    name: 'PricingView',
    component: Views.PricingView,
  },
  {
    path: '/information',
    name: 'InformationView',
    component: Views.InformationView,
    children: [
      {
        path: 'get-started/:platform',
        name: 'GetStartedPage',
        component: Pages.GetStartedPage,
      },
      {
        path: 'features',
        name: 'FeaturesPage',
        component: Pages.FeaturesPage,
      },
      {
        path: 'requirements',
        name: 'RequirementsPage',
        component: Pages.RequirementsPage,
      },
      {
        path: 'reseller',
        name: 'ResellerPage',
        component: Pages.ResellerPage,
      },
      {
        path: 'usage-tips',
        name: 'UsageTipsPage',
        component: Pages.UsageTipsPage,
      },
      {
        path: 'security',
        name: 'SecurityPage',
        component: Pages.SecurityPage,
      },
      {
        path: 'technical-details',
        name: 'TechnicalDetailsPage',
        component: Pages.TechnicalDetailsPage,
      },
      {
        path: 'release-notes',
        name: 'ReleaseNotesPage',
        component: Pages.ReleaseNotesPage,
      },
      {
        path: 'privacy-policy',
        name: 'PrivacyPolicyPage',
        component: Pages.PrivacyPolicyPage,
      },
      {
        path: 'terms-of-use',
        name: 'TermsOfUsePage',
        component: Pages.TermsOfUsePage,
      },
    ],
  },
  {
    path: '/support',
    name: 'SupportView',
    component: Views.SupportView,
    children: [
      {
        path: 'faq',
        name: 'FaqPage',
        component: Pages.FaqPage,
      },
      {
        path: 'axcrypt-business',
        name: 'AxcryptBusinessPage',
        component: Pages.AxcryptBusinessPage,
      },
      {
        path: 'regulatory-compliance',
        name: 'RegulatoryCompliancePage',
        component: Pages.RegulatoryCompliancePage,
      },
      {
        path: 'password-generator',
        name: 'PasswordGeneratorPage',
        component: Pages.PasswordGeneratorPage,
      },
      {
        path: 'service-status',
        name: 'ServiceStatusPage',
        component: Pages.ServiceStatusPage,
      },
    ],
  },
  {
    path: '/about',
    name: 'AboutView',
    component: Views.AboutView,
    children: [
      {
        path: 'jobs',
        name: 'JobsPage',
        component: Pages.JobsPage,
      },
      {
        path: 'jobs/:id',
        name: 'JobPositionPage',
        component: Pages.JobPositionPage,
      },
      {
        path: 'press',
        name: 'PressPage',
        component: Pages.PressPage,
      },
    ],
  },
  {
    path: '/sign-in',
    name: 'SignInView',
    component: Views.SignInView,
  },
  {
    path: '/application/:id',
    name: 'JobApplicationPage',
    component: Pages.JobApplicationPage,
  },
];

export default new VueRouter({ routes });
