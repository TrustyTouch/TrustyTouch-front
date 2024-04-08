import { RouteRecordRaw } from "vue-router";

const routes : RouteRecordRaw[] = [
    {
        name: 'home',
        path: '',
        component: () => import("./Home.vue")
    },
    {
        name: 'homenc',
        path: '/HomeNC',
        component: () => import("./HomeNC.vue")
    },
    {
        name: 'category',
        path: '/Category',
        component: () => import("./Category.vue")
    },
    {
        name: 'stat',
        path: '/Statistic',
        component: () => import("./Statistic.vue")
    },
    {
        name: 'createservice',
        path: '/CreateService',
        component: () => import("./CreateService.vue")
    },
    {
        name: 'discussing',
        path: '/Discussing',
        component: () => import("./Discussing.vue")
    },
    {
        name: 'discussions',
        path: '/Discussions',
        component: () => import("./Discussions.vue")
    },
    {
        name: 'myservices',
        path: '/MyServices',
        component: () => import("./MyServices.vue")
    },
    {
        name: 'payment',
        path: '/Payment',
        component: () => import("./Payment.vue")
    },
    {
        name: 'profil',
        path: '/Profil',
        component: () => import("./Profil.vue")
    },
    {
        name: 'progressservices',
        path: '/ProgressServices',
        component: () => import("./ProgressServices.vue")
    },
    {
        name: 'service',
        path: '/Service',
        component: () => import("./Service.vue")
    },
    {
        name: 'serviceedit',
        path: '/ServiceEdit',
        component: () => import("./ServiceEdit.vue")
    },
    {
        name: 'services',
        path: '/Services',
        component: () => import("./Services.vue")
    }
];

export default routes;