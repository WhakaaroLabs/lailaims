<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow focus-within:ring-2 focus-within:ring-blue-500 relative flex items-center">
    <textarea
      placeholder="Ask them anything"
      v-model="prompt"
      class="w-full p-4 border-0 rounded focus:outline-none bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
      @keyup.enter="sendPrompt"
    />

    <button class="absolute right-4 top-0 bottom-0 my-auto text-gray-400 hover:text-blue-500 dark:hover:text-blue-400" @click="sendPrompt">
      <svg xmlns="http://www.w3.org/2000/svg"
           width="20"
           height="20"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           stroke-width="2"
           stroke-linecap="round"
           stroke-linejoin="round">
        <path d="M22 2L11 13"/>
        <path d="M22 2L15 22 11 13 2 9 22 2z"/>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLLMStore } from '@/stores/llms'

const llmsStore = useLLMStore()

const prompt = ref('')

function sendPrompt() {
  llmsStore.addPrompt(prompt.value)
  prompt.value = ''
}
</script>