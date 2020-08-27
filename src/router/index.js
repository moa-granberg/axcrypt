import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home'
import Download from '../views/Download'
import Business from '../views/Business'
import Pricing from '../views/Pricing'
import Information from '../views/Information'
import Support from '../views/Support'
import AboutUs from '../views/AboutUs'
import SignIn from '../views/SignIn'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/download',
        name: 'Download',
        component: Download
    },
    {
        path: '/business',
        name: 'Business',
        component: Business
    },
    {
        path: '/pricing',
        name: 'Pricing',
        component: Pricing
    },
    {
        path: '/information',
        name: 'Information',
        component: Information
    },
    {
        path: '/support',
        name: 'Support',
        component: Support
    },
    {
        path: '/about-us',
        name: 'AboutUs',
        component: AboutUs
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn
    },
]

export default new VueRouter({ routes });