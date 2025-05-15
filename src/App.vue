<template>
  <div class="min-h-screen bg-gray-50 dark:bg-black">

    <div class="space-y-1 p-4 py-2 border-b-4 border-b-dashed border-gray-100 dark:border-gray-800">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <img src="@/assets/logo.svg" alt="Lailaims" class="w-8 h-8 text-gray-700 dark:text-gray-200" />
          <h1 class="text-2xl font-extrabold bg-gradient-to-r from-green-900 to-green-700 bg-clip-text text-transparent">Lailaims</h1>
        </div>

        <button class="text-gray-600 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400" @click="sideMenuRef?.open()">
          <svg xmlns="http://www.w3.org/2000/svg"
               width="20"
               height="20"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round">
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"/>
          </svg>
        </button>
      </div>

      <div class="hidden md:block w-full text-gray-500 dark:text-gray-200 text-xs font-light">
        An open source client-side web application for testing multiple LLM providers simultaneously.<br>
        <!-- Your data stays private. <b class="font-medium">We do not store anything, and everything runs in your browser!</b> -->
      </div>
    </div>

    <div class="border-b-4 border-b-dashed border-gray-100 dark:border-gray-800 p-4">
      <div class="container mx-auto space-y-4">

        <ThePrompt />

        <div class="w-full text-gray-500 dark:text-gray-200 text-xs font-light text-center">
          Your data stays private. <b class="font-medium">We do not store anything, and everything runs in your browser!</b>
        </div>
      </div>
    </div>

    <LlmColumns class="p-4" />
    <SideMenu ref="sideMenuRef" />

    <div class="p-4 text-center text-xs text-gray-600 dark:text-gray-200 ">
      Made by <a href="https://whakaarolabs.com" class="font-bold text-green-900 dark:text-green-800">Whakaaro Labs</a>.
    </div>
  </div>
</template>

<script lang="ts" setup>
import LlmColumns from '@/components/LlmColumns.vue'
import ThePrompt from '@/components/ThePrompt.vue'
import SideMenu from '@/components/SideMenu.vue'
import { ref } from 'vue'

const sideMenuRef = ref<InstanceType<typeof SideMenu> | null>(null)
</script>
