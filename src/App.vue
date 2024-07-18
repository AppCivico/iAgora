<template>
  <AppHeader v-if="$route.meta.hasHeader" />
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
