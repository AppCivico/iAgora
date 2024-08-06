<template>
  <a
    @click="share"
    href="#"
    class="share-button">
    <img class="share-button__icon" src="@/assets/images/share.svg" alt="" />
    <span class="share-button__text">
      {{ $t("share.share") }}
    </span>
  </a>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useI18n } from 'vue-i18n';

const router = useRouter();
const canShare = navigator.share;
const { t } = useI18n();

function share() {
  const url = window.location.href;

  if (!canShare) {
    navigator.clipboard.writeText(url);
    alert(t("share.copied"));
    return;
  }

  navigator.share({
    title: t("share.title"),
    text: t("share.text"),
    url,
  });
}
</script>
