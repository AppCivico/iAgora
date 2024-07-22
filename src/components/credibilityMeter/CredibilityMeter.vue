<template>
  <div class="credibily-meter">
    <div class="credibily-meter__arch">
      <ArchMeter></ArchMeter>
      <div class="credibily-meter__pointer" :style="{ transform: `rotate(${props.pointerPosition}deg)` }">
        <MeterPointer></MeterPointer>
      </div>
    </div>
    <div class="credibily-meter__warning" v-if="showWarning">
      <MeterWarning></MeterWarning>
    </div>
    <div class="credibily-meter__label">
      {{ $t("quiz.credibility") }}
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';
  import ArchMeter from '../assets/ArchMeter.vue';
  import MeterPointer from '../assets/MeterPointer.vue';
  import MeterWarning from '../assets/MeterWarning.vue';

  const props = defineProps({
    pointerPosition: {
      type: Number,
      default: 0
    },
    showWarning: {
      type: Boolean,
      required: true
    }
  });
</script>

<style lang="scss">
@use '@styles/abstracts/mixings' as mixing;

.credibily-meter {
  position: relative; /* Necessário para os filhos com posição absoluta */
  width: 8rem; /* Ajuste conforme necessário */
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
  top: 70px;
  left: 15px;
  z-index: 3; 
  opacity: 0.9;
}

.credibily-meter__label {
  margin-top: 0.5rem;
  font-size: 0.8rem;

  @include mixing.breakpoint('medium') {
    font-size: 1rem;
  }
}
</style>
