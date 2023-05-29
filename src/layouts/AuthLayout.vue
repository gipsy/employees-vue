<script>
import { useAuthStore } from '../stores'
import { isLoggedIn } from '../utils/auth'

export default {
  name: "AuthLayout",
  setup() {
    const authStore = useAuthStore();

    return {
      authStore,
      isLoggedIn,
    };
  },
  created() {
    // this.authStore.getUserData();
  },
};
</script>

<template>
  <slot v-if="isLoggedIn() || ($route.path !== '/register' && $route.path !== '/login')" />
</template>
