<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <footer class="main-footer">
    <div class="flex gap-24 align-items-center">
      <nav class="main-header__nav">
        <RouterLink
          class="main-footer__link"
          :to="{ name: 'privacy' }"
        >
          {{ $t("footer.privacy") }}
        </RouterLink>
      </nav>
    </div>
  </footer>
</template>
