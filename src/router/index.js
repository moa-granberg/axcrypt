import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView';
import DownloadView from '../views/DownloadView';
import BusinessView from '../views/BusinessView';
import PricingView from '../views/PricingView';
import InformationView from '../views/InformationView';
import SupportView from '../views/SupportView';
import AboutView from '../views/AboutView';
import SignInView from '../views/SignInView';

import GetStartedPage from '../pages/information/GetStartedPage';
import FeaturesPage from '../pages/information/FeaturesPage';
import RequirementsPage from '../pages/information/RequirementsPage';
import ResellerPage from '../pages/information/ResellerPage';
import UsageTipsPage from '../pages/information/UsageTipsPage';
import SecurityPage from '../pages/information/SecurityPage';
import TechnicalDetailsPage from '../pages/information/TechnicalDetailsPage';
import ReleaseNotesPage from '../pages/information/ReleaseNotesPage';
import PrivacyPolicyPage from '../pages/information/PrivacyPolicyPage';
import TermsOfUsePage from '../pages/information/TermsOfUsePage';

import FaqPage from '../pages/support/FaqPage';
import AxcryptBusinessPage from '../pages/support/AxcryptBusinessPage';
import RegulatoryCompliancePage from '../pages/support/RegulatoryCompliancePage';
import PasswordGeneratorPage from '../pages/support/PasswordGeneratorPage';
import ServiceStatusPage from '../pages/support/ServiceStatusPage';

import PressPage from '../pages/about/PressPage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/download',
    name: 'DownloadView',
    component: DownloadView,
  },
  {
    path: '/business',
    name: 'BusinessView',
    component: BusinessView,
  },
  {
    path: '/pricing',
    name: 'PricingView',
    component: PricingView,
  },
  {
    path: '/information',
    name: 'InformationView',
    component: InformationView,
    children: [
      {
        path: 'get-started/:platform',
        name: 'GetStartedPage',
        component: GetStartedPage,
      },
      {
        path: 'features',
        name: 'FeaturesPage',
        component: FeaturesPage,
      },
      {
        path: 'requirements',
        name: 'RequirementsPage',
        component: RequirementsPage,
      },
      {
        path: 'reseller',
        name: 'ResellerPage',
        component: ResellerPage,
      },
      {
        path: 'usage-tips',
        name: 'UsageTipsPage',
        component: UsageTipsPage,
      },
      {
        path: 'security',
        name: 'SecurityPage',
        component: SecurityPage,
      },
      {
        path: 'technical-details',
        name: 'TechnicalDetailsPage',
        component: TechnicalDetailsPage,
      },
      {
        path: 'release-notes',
        name: 'ReleaseNotesPage',
        component: ReleaseNotesPage,
      },
      {
        path: 'privacy-policy',
        name: 'PrivacyPolicyPage',
        component: PrivacyPolicyPage,
      },
      {
        path: 'terms-of-use',
        name: 'TermsOfUsePage',
        component: TermsOfUsePage,
      },
    ],
  },
  {
    path: '/support',
    name: 'SupportView',
    component: SupportView,
    children: [
      {
        path: 'faq',
        name: 'FaqPage',
        component: FaqPage,
      },
      {
        path: 'axcrypt-business',
        name: 'AxcryptBusinessPage',
        component: AxcryptBusinessPage,
      },
      {
        path: 'regulatory-compliance',
        name: 'RegulatoryCompliancePage',
        component: RegulatoryCompliancePage,
      },
      {
        path: 'password-generator',
        name: 'PasswordGeneratorPage',
        component: PasswordGeneratorPage,
      },
      {
        path: 'service-status',
        name: 'ServiceStatusPage',
        component: ServiceStatusPage,
      },
    ],
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
    children: [
      {
        path: 'press',
        name: 'PressPage',
        component: PressPage,
      },
    ],
  },
  {
    path: '/sign-in',
    name: 'SignInView',
    component: SignInView,
  },
];

export default new VueRouter({ routes });
