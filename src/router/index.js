import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';

import Home from '../views/Home.vue';
import Dashboard from '@/components/Dashboard.vue';
import Pending from '@/components/Pending.vue';
import Login from '@/components/Login.vue';

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
    return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home
    // },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/pending',
        name: 'pending',
        component: Pending
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            all: true
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.all)) {
        next();
    } else
    if (store.state.user) {
        next();
    } else {
        next({ path: 'login' });
    }
});

export default router;