//import { useAuthStore } from '@/stores';
import type { NavigationGuard } from 'vue-router';
import { isLoggedIn } from '@/utils/auth';

export const authGuard: NavigationGuard = (to, from, next) => {
  //const authStore = useAuthStore();
  // Fetch user data from the server or local storage
  //await authStore.getUserData;
  
  // Check if the user is authenticated
  if (isLoggedIn()) {
    next();
  } else {
    // You can use try/catch to get an id token and set it to your request header
    // ex: try { ... next() } catch { ... next({ name: '/login') }
    next('/login');
  }
};
