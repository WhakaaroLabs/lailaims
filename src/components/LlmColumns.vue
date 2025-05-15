<template>
  <div class="flex gap-4 overflow-x-auto relative">
    <template v-for="(llm, llmId) in llmsStore.llms">
      <div
        :key="llmId"
        class="rounded-lg shadow min-w-[calc(100vw-15vw)] md:min-w-[50vw] lg:min-w-[40vw] xl:min-w-[30vw] 2xl:min-w-[25vw] min-h-[calc(85vh)] relative flex flex-col bg-white dark:bg-gray-800"
        v-if="llm.enabled"
      >
        <div class="flex justify-between items-center">
          <h2 class="font-semibold p-4 text-gray-900 dark:text-gray-100">{{ llm.title }}</h2>

          <div v-if="llmsStore.hasApiKey(llmId)" class="p-4 flex items-center text-xs text-green-700 dark:text-green-400 gap-1">
            <span>&#x2713; API Key Set</span>
            <TrashIcon class="text-gray-500 dark:text-gray-400 cursor-pointer" @click="llmsStore.deleteApiKey(llmId)"/>
          </div>
          <span v-else class="text-xs text-red-700 dark:text-red-400 p-4">⚠ API Key Not Set</span>
        </div>

        <div class="space-y-2 border-2 border-gray-100 flex-1 mx-4 mb-4 rounded-lg relative max-h-[calc(85vh-100px)] overflow-y-auto">
          <div v-if="!llmsStore.hasApiKey(llmId)">
            <AddApiKey
              :llm="{...llm, id: llmId}"
              :apiKey="llmsStore.savedApiKeys[llmId]"
            />
          </div>

          <div v-else class="flex flex-col space-y-4 p-2 text-sm">
            <div v-if="llmsStore.llms[llmId].error" class="flex flex-col gap-2 bg-red-100 p-4 rounded-xl">
              <span class="text-red-700 font-bold">Error</span>
              <span class="text-red-700">{{ llmsStore.llms[llmId].error }}</span>
            </div>

            <div v-if="llmsStore.llms[llmId].isCurrentlyFetching" class="m-6">
              <DotLoader />
            </div>

            <template v-for="message in llmsStore.conversationHistory" :key="message.id">
              <div
                v-if="message.type === 'user'"
                class="flex items-center justify-end"
              >
                <span class="px-4 py-2 ml-14 bg-blue-100 rounded-xl text-gray-600">{{ message.content }}</span>
              </div>
              <div
                v-else-if="message.type === 'llm' && message.llmId === llmId"
                class="flex items-center justify-start"
              >
                <span class="px-4 py-2 mr-14 bg-gray-100 rounded-xl text-gray-500" v-html="markdown.render(message.content)"></span>
              </div>
            </template>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import AddApiKey from './AddApiKey.vue'
import { useLLMStore } from '@/stores/llms'
import DotLoader from './DotLoader.vue'
import MarkdownIt from 'markdown-it'
import TrashIcon from './TrashIcon.vue'

const markdown = new MarkdownIt()
const llmsStore = useLLMStore()
</script>