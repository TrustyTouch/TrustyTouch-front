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
    }
];

export default routes;