<template>
  <div class="fixed inset-0 bg-black bg-opacity-30 z-40" v-if="isOpen" @click="close"></div>
  <div
    class="fixed inset-0 flex items-center justify-center z-50"
    v-if="isOpen"
  >
    <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100">Terms of Service</h2>
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

      <div class="terms-content">

        <div class="container mx-auto px-4 py-8 max-w-4xl">
          <div class="prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none">
            <div class="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              Last updated: 15/05/2025
            </div>

            <div class="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Lailaims is a client-side web application for testing multiple LLM providers simultaneously. It allows users to add and store API keys for various services like OpenAI, Claude, Gemini, Mistral, and DeepSeek, then compare their responses to the same prompts side-by-side in a single interface. All processing happens locally in the browser with no server-side storage of keys or conversations. This proof-of-concept prioritizes functionality and experimentation over polish, featuring a responsive design with dark/light mode support.
            </div>

            <section class="mb-6">
              <h2 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">1. Acceptance of terms</h2>
              <p>
                By using this Lailaims ("the service"), you agree to be bound by these terms of service.
                if you do not agree, do not use the service.
              </p>
            </section>

            <section class="mb-6">
              <h2 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">2. Description of service</h2>
              <p>
                The service is a browser-based application for talking to llms. it is provided as a proof-of-concept,
                experimental tool with no guarantees of functionality, availability, or fitness for any purpose.
              </p>
            </section>

            <section class="mb-6">
              <h2 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">3. No warranties</h2>
              <p>
                The service is provided "as is" without any warranties of any kind, express or implied, including but not limited to:
              </p>
              <ul class="list-disc pl-6">
                <li>merchantability</li>
                <li>fitness for a particular purpose</li>
                <li>non-infringement</li>
                <li>availability</li>
                <li>security</li>
                <li>accuracy</li>
              </ul>
            </section>

            <section class="mb-6">
              <h2 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">4. Limitation of liability</h2>
              <p>To the maximum extent permitted by law:</p>
              <ul class="list-disc pl-6">
                <li>the developer shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages</li>
                <li>total liability shall not exceed $0 (zero dollars)</li>
                <li>this limitation applies even if the developer has been advised of the possibility of such damages</li>
              </ul>
            </section>

            <section class="mb-6">
              <h2 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">5. User responsibilities</h2>
              <p>You are solely responsible for:</p>
              <ul class="list-disc pl-6">
                <li>your api keys and their security</li>
                <li>compliance with third-party llm provider terms</li>
                <li>any consequences of using the service</li>
                <li>ensuring the service meets your needs before use</li>
              </ul>
            </section>

            <section class="mb-6">
              <h2 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">6. Api keys and data</h2>
              <ul class="list-disc pl-6">
                <li>you acknowledge api keys are stored locally in your browser</li>
                <li>the developer has no access to, responsibility for, or liability regarding your api keys</li>
                <li>you use third-party llm services at your own risk</li>
                <li>you must comply with all relevant api provider terms</li>
              </ul>
            </section>

            <section class="mb-6">
              <h2 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">7. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless the developer from any claims, damages, losses, or expenses arising from:
              </p>
              <ul class="list-disc pl-6">
                <li>your use of the service</li>
                <li>your violation of these terms</li>
                <li>your violation of third-party rights</li>
                <li>your api usage or violations of llm provider terms</li>
              </ul>
            </section>

            <section class="mb-6">
              <h2 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">8. No support or maintenance</h2>
              <ul class="list-disc pl-6">
                <li>no support, maintenance, or updates are guaranteed</li>
                <li>the service may be discontinued at any time without notice</li>
                <li>no data recovery assistance will be provided</li>
              </ul>
            </section>

            <section class="mb-6">
              <h2 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">9. Modifications</h2>
              <p>
                These terms may be changed at any time without notice. continued use constitutes acceptance of modified terms.
              </p>
            </section>

            <section class="mb-6">
              <h2 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">10. Governing law</h2>
              <p>
                These terms are governed by the laws of the United States, excluding conflict of law principles.
              </p>
            </section>

            <section class="mb-6">
              <h2 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">11. Severability</h2>
              <p>
                If any provision is deemed invalid, the remaining provisions remain in full effect.
              </p>
            </section>

            <section class="mb-6">
              <h2 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">12. Experimental nature</h2>
              <p>
                You acknowledge this is an experimental, proof-of-concept project with known limitations including but not limited to:
              </p>
              <ul class="list-disc pl-6">
                <li>basic code quality</li>
                <li>limited error handling</li>
                <li>no testing</li>
                <li>no production-level optimization</li>
              </ul>
            </section>

            <section class="mb-6">
              <h2 class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">13. Prohibited uses</h2>
              <p>The service may not be used for:</p>
              <ul class="list-disc pl-6">
                <li>illegal activities</li>
                <li>circumventing llm provider terms</li>
                <li>commercial purposes without express permission</li>
                <li>any activities that could harm the developer or third parties</li>
              </ul>
            </section>

            <p class="font-medium mt-8">
              By using this service, you acknowledge you have read, understood, and agree to be bound by these terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

function open() {
  isOpen.value = true
}

function close() {
  isOpen.value = false
}

defineExpose({ open, close })
</script>