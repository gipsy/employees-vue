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

    <a-space>
      <router-link to="/register">
        <a-button type="default">Register</a-button>
      </router-link>
      <router-link to="/login">
        <a-button type="default">Login</a-button>
      </router-link>
    </a-space>
  </a-layout-header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { TeamOutlined } from '@ant-design/icons-vue'
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
