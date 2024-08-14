<template>
  <dialog
    class="dialog"
    :class="props.theme ? `dialog--${props.theme}` : ''"
    ref="dialog"
  >
    <form
      method="dialog"
      class="dialog__form"
    >
      <header class="dialog__header">
        <img
          class="dialog__icon"
          :src="props.headerIcon"
        />
        <h2
          class="dialog__title"
          :class="props.titleIcon ? `dialog__title--icon-${props.titleIcon}` : ''"
        >
          {{ props.title }}
        </h2>
        <button
          type="button"
          v-if="props.hasCloseButton"
          class="dialog__close-button"
          @click="$emit('close')"
        >
          <span class="sr-only">{{ $t("dialog.close") }}</span>
        </button>
      </header>
      <article class="dialog__body">
        <slot name="body" />
      </article>
      <footer class="dialog__footer">
        <slot name="footer" />
      </footer>
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
  hasCloseButton: {
    type: Boolean,
    default: false
  },
  theme: {
    type: String,
  },
  title: {
    type: String,
    required: true
  },
  titleIcon: {
    type: String,
  },
  headerIcon: {
    type: String
  }
});

const dialog = ref(null);
const openValue = ref(props.open);

onMounted(() => {
  // dialog.value.showModal();
})

watch(() => props.open, (newValue, oldValue) => {
  if (dialog.value) {
    if (newValue) {
      dialog.value.showModal();
    }
    if (!newValue) {
      dialog.value.close();
    }
  }
  openValue.value = newValue;
});

</script>

<style lang="scss" scoped>
  @use '@styles/components/dialog';
</style>
