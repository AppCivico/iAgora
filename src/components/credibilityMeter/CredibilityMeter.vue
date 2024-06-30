<template>
  <div class="credibily-meter">
    <div class="credibily-meter__arch">
      <ArchMeter></ArchMeter>
    </div>
    <div class="credibily-meter__pointer" :style="{ transform: `rotate(${props.pointerPosition}deg)` }">
      <MeterPointer></MeterPointer>
    </div>
    <div class="credibily-meter__warning" v-if="showWarning">
      <MeterWarning></MeterWarning>
    </div>
    <div class="credibily-meter__label">
      CREDIBILIDADE
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

<style>
.credibily-meter {
  position: relative; /* Necessário para os filhos com posição absoluta */
  width: fit-content; /* Ajuste conforme necessário */
  height: fit-content; /* Ajuste conforme necessário */
  text-align: center;
}

.credibily-meter__arch {
  position: relative;
  z-index: 1; 
}

.credibily-meter__pointer {
  position: absolute;
  top: 50%;
  left: 45%;
  width: 20px;
  height: 55px;
 transform-origin: bottom center; 
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
  margin-top: 30px;
  font-size: 16px;
}
</style>
