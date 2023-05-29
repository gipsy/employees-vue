<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'

</script>

<template>
  <div class="main">
    <Header />

    <a-layout-content style="height: 100%">
      <RouterView />
    </a-layout-content>
  </div>
</template>

<style>
.main {
  width: 80%;
  height: 100%;
  margin-inline: auto;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-weight: normal;
}

html, body, body > div {
  height: 100%;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #141414;
  color: white;
}
</style>
