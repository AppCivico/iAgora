<template>
  <!--
  <div class="credibily-meter">
    <div class="credibily-meter__arch">
      <ArchMeter
        :arch-lower-color="props.archLowerColor"
        :arch-upper-color="props.archUpperColor"
      ></ArchMeter>
      <div class="credibily-meter__pointer" :style="{ transform: `rotate(${credibilityStore.credibility}deg)` }">
        <MeterPointer
          :pointer-color="props.pointerColor"
        ></MeterPointer>
      </div>
    </div>
    <div class="credibily-meter__warning" v-if="credibilityStore.showWarning">
      <MeterWarning></MeterWarning>
    </div>
    <div
      class="credibily-meter__label"
      :class="{ 'credibily-meter__label--big': props.bigLabel }"
    >
      {{ $t("quiz.credibility") }}
    </div>
  </div>
  -->
</template>

<script setup>
  import { useCredibilityStore } from '@/stores/credibility'
  import { defineProps } from 'vue';
  import ArchMeter from '../assets/ArchMeter.vue';
  import MeterPointer from '../assets/MeterPointer.vue';
  import MeterWarning from '../assets/MeterWarning.vue';

  const credibilityStore = useCredibilityStore();

  const props = defineProps({
    archLowerColor: {
      type: String,
    },
    archUpperColor: {
      type: String,
    },
    bigLabel: {
      type: Boolean,
    },
  });
</script>

<style lang="scss">
@use '@styles/abstracts/mixings' as mixing;

.credibily-meter {
  position: relative; /* Necessário para os filhos com posição absoluta */
  width: min-content; /* Ajuste conforme necessário */
  height: fit-content; /* Ajuste conforme necessário */
  text-align: center;
  text-transform: uppercase;
}

.credibily-meter__arch {
  position: relative;
  z-index: 1; 
}

.credibily-meter__pointer {
  position: absolute;
  top: 45%;
  left: 45%;
  width: 10%;
  height: 55px;
  transform-origin: center; 
  z-index: 2; 
}

.credibily-meter__warning {
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 3;
  width: 25%;
  opacity: 0.9;
}

.credibily-meter__label {
  --label-font-size: 0.8rem;

  margin-top: 0.5rem;
  font-size: var(--label-font-size);

  @include mixing.breakpoint('medium') {
    --label-font-size: 1rem;
  }
}

.credibily-meter__label--big {
  --label-font-size: 1.125rem;

  @include mixing.breakpoint('medium') {
    --label-font-size: 1.25rem;
  }
}

</style>
