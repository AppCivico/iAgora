<template>
  <a
    @click="share"
    href="#"
    class="share-button">
    <img class="share-button__icon" src="@/assets/images/share.svg" alt="" />
    <span class="share-button__text">Compartilhar</span>
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
