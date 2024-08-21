<script setup>
import ShareButton from "@/components/shareButton/ShareButton.vue";
import { RouterLink } from 'vue-router';
</script>
<template>
  <header class="main-header">
    <ShareButton />
    <div class="flex gap-24 align-items-center">
      <nav class="main-header__nav">
        <RouterLink
          class="main-header__link"
          :to="{ name: 'about' }"
        >
          {{ $t("links.about") }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
