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
      // route level code-splitting
      // this generates a separate chunk (Employee.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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

// Redirect to login
//router.beforeEach(async (to, from) => {
//  if (to.meta.requiresAuth && !isLoggedIn() && to.name !== "Login") {
//    return { name: "Login" };
//  }
//  if (isLoggedIn() && to.name === "Login") {
//    return { name: from.name };
//  }
//});

export default router
