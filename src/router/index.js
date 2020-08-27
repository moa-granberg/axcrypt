import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView'
import DownloadView from '../views/DownloadView'
import BusinessView from '../views/BusinessView'
import PricingView from '../views/PricingView'
import InformationView from '../views/InformationView'
import SupportView from '../views/SupportView'
import AboutView from '../views/AboutView'
import SignInView from '../views/SignInView'
import ResellerPage from '../pages/information/ResellerPage'
import FaqPage from '../pages/support/FaqPage'
import PressPage from '../pages/about/PressPage'
import PrivacyPolicyPage from '../pages/information/PrivacyPolicyPage'
import PasswordGeneratorPage from '../pages/support/PasswordGeneratorPage'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/download',
        name: 'DownloadView',
        component: DownloadView
    },
    {
        path: '/business',
        name: 'BusinessView',
        component: BusinessView
    },
    {
        path: '/pricing',
        name: 'PricingView',
        component: PricingView
    },
    {
        path: '/information',
        name: 'InformationView',
        component: InformationView,
        children: [
            {
                path: 'reseller',
                name: 'ResellerPage',
                component: ResellerPage
            },
            {
                path: 'privacy-policy',
                name: 'PrivacyPolicyPage',
                component: PrivacyPolicyPage
            }
        ]
    },
    {
        path: '/support',
        name: 'SupportView',
        component: SupportView,
        children: [
            {
                path: 'faq',
                name: 'FaqPage',
                component: FaqPage
            },
            {
                path: 'password-generator',
                name: 'PasswordGeneratorPage',
                component: PasswordGeneratorPage
            }
        ]
    },
    {
        path: '/about',
        name: 'AboutView',
        component: AboutView,
        children: [
            {
                path: 'press',
                name: 'PressPage',
                component: PressPage
            }
        ]
    },
    {
        path: '/sign-in',
        name: 'SignInView',
        component: SignInView
    },
]

export default new VueRouter({ routes });