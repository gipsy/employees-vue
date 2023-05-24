<template>
  <div class="main">
    <Header/>
    <a-layout-content style="">
      <slot></slot>
    </a-layout-content>
  </div>
</template>

<script>
import Header from "./Header";

export default {
  components: { Header }
}

</script>


<style lang="css">
.main {
  width: 80%;
  height: 100%;
  margin-inline: auto;
}
</style>
