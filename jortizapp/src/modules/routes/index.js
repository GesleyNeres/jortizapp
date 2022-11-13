const router = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../login/LoginView.vue')
    },
]
export default router