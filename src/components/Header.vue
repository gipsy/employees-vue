<template>
  <a-layout-header class="header">
    <a-space>
      <team-outlined class="teamIcon"/>
      <router-link to="/">
        <a-button type="link">
          <a-typography-title style="color: white" :level="1">Employees</a-typography-title>
        </a-button>
      </router-link>
    </a-space>

    <a-space v-if="!state.isAuthorized">
      <router-link to="/register">
        <a-button type="text">
          <template #icon><UserOutlined /></template>
          Register
        </a-button>
      </router-link>
      <router-link to="/login">
        <a-button type="text">
          <template #icon><LoginOutlined /></template>
          Login
        </a-button>
      </router-link>
    </a-space>
    <a-space v-else>
      <a-button
          type="text"
          @click="onLogout"
      >
        <template #icon><LogoutOutlined /></template>
        Logout
      </a-button>
    </a-space>
  </a-layout-header>
</template>

<script setup lang="ts">
import { RouterLink }   from 'vue-router'
import {
  TeamOutlined,
  LogoutOutlined,
  UserOutlined }        from '@ant-design/icons-vue'
import { useAuthStore } from '@/stores'
import router           from '@/router'
import { ref }          from "vue";

const { logout, state } = useAuthStore()
const localAuth = ref(true)

const onLogout = async () => {
  await logout()

  await router.push({ name: 'login' })
  localAuth.value = false
}

</script>

<style lang="scss">
.header {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  background-color: transparent;
}

.teamIcon {
  font-size: 26px;
  margin-right: 12px;
  svg {
    fill: white;
  }
}
</style>
