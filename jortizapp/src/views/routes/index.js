const router = [
    {
        path: '/',
        name: 'home',
        component: () => import('../HomeView.vue'),
        children: [
            {
                path: 'clients',
                name: 'client',
                component: () => import('../pages/clients/ClientView.vue'),
                meta: {
                    needsAuth: true
                },
                children: [
                    {
                        path: '',
                        name: 'client-list',
                        component: () => import('../pages/clients/ClientList.vue'),
                        meta: {
                            needsAuth: true
                        }
                    },
                    {
                        path: 'create',
                        name: 'client-create',
                        component: () => import('../pages/clients/ClientCreate.vue'),
                        meta: {
                            needsAuth: true
                        }
                    }
                ]
            },
            {
                path: 'dashboards',
                name: 'dashboard',
                component: () => import('../pages/dashboards/DashboardView.vue'),
                meta: {
                    needsAuth: true
                }
            },
            {
                path: 'employees',
                name: 'employee',
                component: () => import('../pages/employees/EmployeeView.vue'),
                meta: {
                    needsAuth: true
                },
                children: [
                    {
                        path: '',
                        name: 'employee-list',
                        component: () => import('../pages/employees/EmployeeList.vue'),
                        meta: {
                            needsAuth: true
                        }
                    },
                    {
                        path: 'create',
                        name: 'employee-create',
                        component: () => import('../pages/employees/EmployeeCreate.vue'),
                        meta: {
                            needsAuth: true
                        }
                    }
                ]
            },
            {
                path: 'payments',
                name: 'payment',
                component: () => import('../pages/payments/PaymentView.vue'),
                meta: {
                    needsAuth: true
                },
                children: [
                    {
                        path: '',
                        name: 'payment-list',
                        component: () => import('../pages/payments/PaymentList.vue'),
                        meta: {
                            needsAuth: true
                        }
                    },
                    {
                        path: 'create',
                        name: 'payment-create',
                        component: () => import('../pages/payments/PaymentCreate.vue'),
                        meta: {
                            needsAuth: true
                        }
                    },
                    {
                        path: 'report',
                        name: 'payment-report',
                        component: () => import('../pages/payments/PaymentReport.vue'),
                        meta: {
                            needsAuth: true
                        }
                    }
                ]
            },
            {
                path: 'services',
                name: 'service',
                component: () => import('../pages/services/ServiceView.vue'),
                meta: {
                    needsAuth: true
                },
                children: [
                    {
                        path: '',
                        name: 'service-list',
                        component: () => import('../pages/services/ServiceList.vue'),
                        meta: {
                            needsAuth: true
                        }
                    },
                    {
                        path: 'create',
                        name: 'service-create',
                        component: () => import('../pages/services/ServiceCreate.vue'),
                        meta: {
                            needsAuth: true
                        }
                    }
                ]
            }
        ]
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../pages/supports/AboutView.vue')
    }
]
export default router