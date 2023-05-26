import { createRouter, createWebHistory } from 'vue-router'
import EmployeesView                      from "@/views/EmployeesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EmployeesView
    },
    {
      path: '/employee/:id',
      name: 'employee',
      // route level code-splitting
      // this generates a separate chunk (Employee.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EmployeeView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})

export default router
