<script setup lang="ts">
import { useRoute } from 'vue-router'

const { params } = useRoute()

console.log(params)
</script>

<template>
  <a-row
    justify="center"
    style="width: 100%"
  >
    <a-result
      :status="status ? 'success' : 404"
      :title="status ? Statuses[status] : 'Not found'"
    />
      <template #extra>
        <Button key="dashboard">
          <RouterLink to='/'>To main</RouterLink>
        </Button>
      </template>
  </a-row>
</template>
