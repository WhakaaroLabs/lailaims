<template>
  <div
    v-if="isVisible"
    class="absolute mx-2 bottom-4 right-4 bg-orange-700 text-white px-4 py-2 rounded-lg shadow-lg z-50 text-lg"
    :class="{ 'animate-fade-out': isClosing }"
  >
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isVisible = ref(false)
const isClosing = ref(false)
const message = ref('')

function show(msg: string, duration = 3000) {
  message.value = msg
  isVisible.value = true
  isClosing.value = false

  setTimeout(() => {
    isClosing.value = true
    setTimeout(() => {
      isVisible.value = false
    }, 400)
  }, duration)
}

defineExpose({ show })
</script>

<style scoped>
.animate-fade-out {
  animation: fadeOut 0.3s ease-out forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>