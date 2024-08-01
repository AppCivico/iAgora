<script setup>
  import { RouterLink } from 'vue-router'
  import ShareButton from "@/components/shareButton/ShareButton.vue";
  import LocaleSelect from "@/components/localeSelect/LocaleSelect.vue";
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
      <LocaleSelect />
    </div>
  </header>
</template>
<style>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  width: 100%;
}
</style>
