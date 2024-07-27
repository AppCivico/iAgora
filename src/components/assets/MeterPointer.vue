<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 10.001 27.013" preserveAspectRatio="xMinYMin meet">
        <path id="ponteiro" d="M0,22.057a4.894,4.894,0,0,1,.327-1.766,1.988,1.988,0,0,1,.01-.5L3.023,1.693a2,2,0,0,1,3.956,0L9.663,19.787a1.969,1.969,0,0,1,.011.5A4.912,4.912,0,0,1,10,22.057a5,5,0,0,1-10,0Z" :fill="props.pointerColor"/>
    </svg>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  pointerColor: {
    type: String,
    default: "#6b6b67"
  },
})
</script>

<style>

</style>
