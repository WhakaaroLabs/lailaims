<template>
  <div class="fixed inset-0 bg-black bg-opacity-0 md:bg-opacity-30 z-40" v-if="isOpen" @click="close"></div>
  <div
    class="fixed top-0 right-0 h-full w-full md:w-auto md:min-w-[400px] bg-white dark:bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ease-in-out"
    :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <div class="p-4">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100">Settings</h2>
        <button @click="close" class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div class="space-y-4">
        <div class="text-sm text-gray-500 dark:text-gray-400">
          Here you can enable or disable the LLMs that you want to use.
        </div>

        <div v-for="(llm, id) in llmsStore.llms" :key="id" class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div>
            <h3 class="font-medium text-gray-900 dark:text-gray-100">{{ llm.title }}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              <span v-if="enabledLLMs[id]">Enabled</span>
              <span v-else>Disabled</span>
            </p>
          </div>
          <Toggle v-model="enabledLLMs[id]" @change="toggleLLM(id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLLMStore } from '@/stores/llms'
import Toggle from './Toggle.vue'
const llmsStore = useLLMStore()
const isOpen = ref(false)
const enabledLLMs = ref<Record<string, boolean>>({})

// Initialize enabled state for each LLM
Object.keys(llmsStore.llms).forEach(id => {
  enabledLLMs.value[id] = llmsStore.shouldDisplayLlm(id)
})

function toggleLLM(id: string) {
  llmsStore.toggleLLM(id, enabledLLMs.value[id])
}

function open() {
  isOpen.value = true
}

function close() {
  isOpen.value = false
}

defineExpose({ open })
</script>