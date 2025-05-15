<template>
  <div class="absolute inset-0 flex items-center justify-center mx-2 md:mx-6">
    <div class="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-lg w-full">
      <div class="mb-4">
        <div class="text-center text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">API Key Required</div>
        <div class="text-sm mb-4 font-light text-gray-700 dark:text-gray-300">
          Add your API key to start using this LLM. <br> Need a key? <a :href="llm.howToGetApiKeyLink" target="_blank" class="text-blue-500 dark:text-blue-400">Get one here</a>.
        </div>
        <div class="text-xs font-light text-gray-600 dark:text-gray-400">
          🔒 Your API key is stored locally in your browser only.<br>
          We do not store nor send your API key to any external servers.
        </div>
      </div>

      <div class="md:flex text-sm group">
        <input
          type="password"
          :placeholder="`Enter ${llm.title} API Key`"
          v-model="currentSavedApiKey"
          class="rounded w-full md:flex-1 h-12 px-2 rounded-l border-2 md:rounded-r-none md:border-r-0 border-gray-200 dark:border-gray-600 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 group-focus-within:border-blue-500 dark:group-focus-within:border-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          @keyup.enter="llmsStore.saveApiKey({ llmId: llm.id, key: currentSavedApiKey })"
        />

        <button
          @click="llmsStore.saveApiKey({ llmId: llm.id, key: currentSavedApiKey })"
          class="w-full md:w-auto bg-blue-500 dark:bg-blue-600 h-12 px-2 text-white border-2 md:rounded-l-none md:border-l-0 border-gray-200 dark:border-gray-600 font-bold rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 md:group-focus-within:border-blue-500 dark:md:group-focus-within:border-blue-400"
        >
          Save API Key
        </button>
      </div>

      <div class="mt-3 text-xs text-center text-gray-600 dark:text-gray-400">
        By using Lailaims, you agree to the <button @click="termsModalRef?.open()" class=" underline">Terms of Service</button>
      </div>
    </div>
  </div>

  <TermsModal ref="termsModalRef" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLLMStore } from '@/stores/llms'
import TermsModal from './TermsModal.vue'

const llmsStore = useLLMStore()
const termsModalRef = ref<InstanceType<typeof TermsModal> | null>(null)

defineProps<{
  llm: Record<string, any>
}>()

const currentSavedApiKey = ref('')
</script>