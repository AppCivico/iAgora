<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 120 50">
      <g id="arco" transform="translate(-77.001 -240.377)">
        <path id="Union_1" data-name="Union 1" d="M78,32.009C78,19.068,63.195,8.538,45,8.538c-8.816,0-17.1,2.441-23.334,6.873a25.76,25.76,0,0,0-5.946,5.759A18.339,18.339,0,0,0,12,32.009c0,2.358-2.686,4.267-6,4.267s-6-1.91-6-4.267a24.908,24.908,0,0,1,5.039-14.73,35.176,35.176,0,0,1,8.023-7.817c.039-.03.078-.058.117-.086C21.679,3.332,32.978,0,45,0,69.811,0,90,14.362,90,32.009c0,2.358-2.686,4.267-6,4.267S78,34.367,78,32.009Z" transform="translate(92.001 255.377)" fill="#a9a7a1" opacity="0.8"/>
        <path id="Path_18863" data-name="Path 18863" d="M5.947,78.577a6,6,0,0,1,0-12A33.062,33.062,0,0,0,29.075,10.242a6.038,6.038,0,0,1,0-8.485,5.91,5.91,0,0,1,8.41,0A44.909,44.909,0,0,1,50.548,33.577C50.548,58.39,30.54,78.577,5.947,78.577Z" transform="translate(103.423 292.547) rotate(-90)" :fill="props.archUpperColor"/>
        <path id="Union_2" data-name="Union 2" d="M23.423,5.947a5.9,5.9,0,0,1-1.757,4.2A32.473,32.473,0,0,0,12,33.28a6,6,0,0,1-12,0A44.322,44.322,0,0,1,13.18,1.742a6.038,6.038,0,0,1,8.485,0A5.9,5.9,0,0,1,23.423,5.947Z" transform="translate(92 253.32)" :fill="props.archLowerColor"/>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  archLowerColor: {
    type: String,
    default: "#f05038"
  },
  archUpperColor: {
    type: String,
    default: "#2a60fe"
  },
})
</script>
