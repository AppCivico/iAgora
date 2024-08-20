<template>
    <ul class="supporters-icons" v-if="supporters.length">
    <li class="supporters-icons__item" v-for="supporter in supporters" :key="supporter.name">
      <a class="supporters-icons__link" :href="`${supporter.website}?utm_source=iagora&utm_medium=iagora&utm_campaign=iagora`" target="_blank">
        <img
          class="supporters-icons__logo"
          :class="`supporters-icons__logo--${supporter.name.toLowerCase()}`"
          :src="supporter.logo"
          :alt="supporter.name"
        />
      </a>
    </li>
  </ul>
</template>
<script setup>
import supporters from '@/data/supporters.json';
</script>
<style lang="css">
.supporters-icons {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-between;
  max-width: 22.5rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
}

.supporters-icons__item {
  list-style-type: none;
  margin: 0;
}

.supporters-icons__link {}

.supporters-icons__logo {
  max-width: 7.5rem;
}
</style>
