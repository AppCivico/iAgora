<template>
  <div class="locale-select">
    <label
      for="language-select"
      class="sr-only">
      <span class="sr-only">
        {{ $t("header.language-select-label") }}
      </span>
    </label>
    <select
      id="language-select"
      v-model="$i18n.locale"
      class="locale-select__select"
    >
      <option v-for="(lang, i) in langs"
        :key="`Lang${i}`"
        :value="lang.code"
      >
        {{ lang.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "locale-selector",
  data() {
    return {
      langs: [
        { code: "ptBR", text: "Português" },
        { code: "en", text: "English" },
      ],
    };
  },
};
</script>
<!-- <style src="@styles/components/locale-select.scss"></style> -->
