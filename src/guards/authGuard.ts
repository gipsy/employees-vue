import { useAuthStore } from '@/stores';
import type { NavigationGuard } from 'vue-router';
import { isLoggedIn } from '@/utils/auth';

export const authGuard: NavigationGuard = async (to, from, next) => {
  const { current, state } = useAuthStore();
  await current();
  
  if (isLoggedIn() && state.isAuthorized) {
    next();
  } else {
    // You can use try/catch to get an id token and set it to your request header
    // ex: try { ... next() } catch { ... next({ name: '/login') }
    next('/login');
  }
};
