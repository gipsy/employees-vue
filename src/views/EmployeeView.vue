<script setup lang="ts">
</script>

<template>
  <a-row justify="center">
    <a-descriptions layout="vertical" title="Employee info" bordered>
      <a-descriptions-item label="name" :colon="3">
        John Doe
      </a-descriptions-item>
      <a-descriptions-item label="age" :colon="3">
        30
      </a-descriptions-item>
      <a-descriptions-item label="address" :colon="3">
        New Jersey
      </a-descriptions-item>
    </a-descriptions>
    <a-divider orientation="left">Actions</a-divider>
    <a-space>
      <a-link to="/employees/edit">
        <a-button type="default" shape="round">Edit</a-button>
      </a-link>
      <a-button type="default" shape="round" danger>Delete</a-button>
    </a-space>
  </a-row>
</template>
