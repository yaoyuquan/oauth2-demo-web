import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    { 
        path: '/', 
        component: () => import('../views/home.vue')
    },
    {
        path: '/login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/callback',
        component: () => import('../views/callback.vue')
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes
})


 router.beforeEach((to, _) => {

    let token = sessionStorage.getItem('token')

    if(token == null && to.path != '/login' && to.path != '/callback') {
        return '/login'
    }

 })


export default router