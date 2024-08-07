<template>
  <button
    @click="share"
    class="share-button"
  >
    <img class="share-button__icon" src="@/assets/images/share.svg" alt="" />
    <span class="share-button__text">
      <template v-if="buttonText">
        {{ buttonText }}
      </template>
      <template v-else>
        {{ $t("share.share") }}
      </template>
    </span>
  </button>
</template>

<script setup>
import { defineProps } from "vue";
import share from "@/utils/share";

const canShare = navigator.share;

const props = defineProps({
  buttonText: {
    type: String,
  },
});

</script>
