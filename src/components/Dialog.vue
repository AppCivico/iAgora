<template>
  <dialog class="dialog" ref="dialog">
    <form
      method="dialog"
      className="dialog__form"
    >
      <header class="dialog__header">
        <img
          class="dialog__icon"
          :src="props.headerIcon"
        />
        <h2 class="dialog__title dialog__title--icon-medal">
          {{ props.title }}
        </h2>
        <button class="dialog__close-button" onclick="this.closest('dialog').close('close')">
          <span class="sr-only">{{ $t("dialog.close") }}</span>
        </button>
      </header>
      <article class="dialog__body">
        <slot name="body" />
      </article>
    </form>
  </dialog>
</template>

<script setup>
import { ref, defineProps, watch, onMounted } from 'vue';

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    required: true
  },
  headerIcon: {
    type: String
  }
});

const dialog = ref(null);
const openValue = ref(props.open);

onMounted(() => {
  dialog.value.showModal();
})

watch(() => props.open, (newValue, oldValue) => {
  if (dialog.value) {
    dialog.value.showModal();
  }
  openValue.value = newValue;
});

</script>

<style lang="scss" scoped>
  @use '@styles/components/dialog';
</style>
