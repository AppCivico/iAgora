<template>
  <a
    @click="share"
    href="#"
    class="share-button">
    <img src="@/assets/images/share.svg" />
    <span class="sr-only">Compartilhar</span>
  </a>
</template>

<script setup>
function share() {
  navigator.share({
    title: "IAgora",
    text: "Jogue o jogo de notícias e fale sobre o mundo real",
    url: "https://google.com",
  });
}
</script>
