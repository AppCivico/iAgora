<template>
  <AppHeader v-if="$route.meta.hasHeader" />
  <RouterView />
  <AppFooter v-if="$route.meta.hasFooter" />
</template>

<script>
import { RouterView } from 'vue-router'
import AppHeader from '@components/AppHeader.vue'
import AppFooter from '@components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
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
