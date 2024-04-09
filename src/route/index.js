import { createRouter, createWebHashHistory } from "vue-router";

/**
 * 路由地址
 */
const routes = [
    {
        path: '/',
        redirect: "/index"
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('../views/index/index.vue')
    },
    {
        path: '/community',
        name: 'community',
        component: () => import('../views/community/index.vue')
    },
    {
        path: '/my',
        name: 'my',
        component: () => import('../views/my/index.vue')
    },
    {
        path: '/welfare',
        name: 'welfare',
        component: () => import('../views/welfare/index.vue')
    }
]

/**
 * 路由配置
 */
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: "selected"
})


export default router