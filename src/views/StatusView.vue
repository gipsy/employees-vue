<script setup lang="ts">
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'

const { params } = useRoute()

const Statuses: Record<string, string> = {
  created: "User created successfully",
  updated: "User updated successfully",
  deleted: "User deleted successfully"
}

</script>

<template>
  <a-row
    justify="center"
    style="width: 100%"
  >
    <a-result
      :status="params.status ? 'success' : 404"
      :title="params.status ? Statuses[params.status] : 'Not found'"
    >
      <template #extra>
        <a-button key="dashboard">
          <RouterLink to='/'>To main</RouterLink>
        </a-button>
      </template>
    </a-result>
  </a-row>
</template>
