<template>
    <button
      :class="['custom-button', color]"
      @click="handleClick"
    >
      <span v-if="hasIcon" class="icon">
        <slot name="icon"></slot>
      </span>
      {{ text }}
    </button>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    text: {
      type: String,
      required: true
    },
    hasIcon: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'yellow',
      validator: (value) => ['yellow', 'green', 'blue', 'white', 'red'].includes(value)
    }
  });
  
  const emit = defineEmits(['buttonClick']);
  
  const handleClick = () => {
    emit('buttonClick');
  };
  </script>
  
  <style>
  .custom-button {
    border: none;
    padding: 20px 25px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
  }
  
  .custom-button .icon {
    margin-right: 8px;
  }
  
  .custom-button.yellow {
    background-color: #FFC233;
    box-shadow: 0px 7px 0px #F3B31C;
    color: #3A3A38;
  }
  
  .custom-button.green {
    background-color: #CCFF33;
    box-shadow: 0px 5px 0px #A3CF20;
    color: #3A3A38;
  }
  
  .custom-button.blue {
    background-color: #2A60FE;
    box-shadow: 0px 4px 0px #1D43B5;
    color: #FFFFCC;
  }
  
  .custom-button.white {
    background-color: #FBF9EF;
    box-shadow: 0px 4px 0px #D8D7CD;
    color: #D8D7CD;
  }
  
  .custom-button.red {
    background-color: #F05038;
    box-shadow: 0px 6px 0px #C64431;
    color: #FFFFCC;
  }
  </style>
  