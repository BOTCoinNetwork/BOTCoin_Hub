<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar />
  <router-view />
</template>

<style>
#app {
  margin-top: 80px;
  padding: 2rem;
  max-width: 100vw;
}
</style>

<style scoped>

  header {
    line-height: 1.5;
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  

</style>
