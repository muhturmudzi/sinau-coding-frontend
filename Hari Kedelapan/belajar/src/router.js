import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "./components/Home.vue"
import Kontak from "./components/Kontak.vue"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home
},{
    path: '/home',
    component: Home
},{
    path: '/kontak',
    component: Kontak
}];

const router = new VueRouter({
    routes: routes,
    linkActiveClass: "active-bngt"
});

export default router;