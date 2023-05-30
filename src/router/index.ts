import { createRouter, createWebHistory } from 'vue-router'
import EmployeesView                      from "@/views/EmployeesView.vue";
import { authGuard } from '@/guards/authGuard';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EmployeesView,
      meta: { requiresAuth: true },
    },
    {
      path: '/employee/:id',
      name: 'employee',
      component: () => import('@/views/EmployeeView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/employee/add',
      name: 'addEmployee',
      component: () => import('@/views/AddEmployeeView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/status/:status',
      name: 'status',
      component: () => import('@/views/StatusView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    authGuard(to, from, next);
  } else {
    next();
  }
});

export default router
