<template>
  <div class="min-h-screen bg-gray-50 dark:bg-black">
    <!-- Hero Section -->
    <div class="container mx-auto px-4 py-16">
      <div class="text-center">
        <div class="flex items-center justify-center gap-2 mb-4">
          <img src="@/assets/logo.svg" alt="Lailaims" class="w-12 h-12 text-gray-700 dark:text-gray-200" />
          <h1 class="text-4xl font-extrabold bg-gradient-to-r from-green-900 to-green-700 bg-clip-text text-transparent">Lailaims</h1>
        </div>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Compare multiple LLM providers side by side in your browser
        </p>
        <a href="/app" class="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
          Try it now
        </a>
      </div>
    </div>

    <div class="container mx-auto px-4 py-16">
      <div class="aspect-video rounded-lg overflow-hidden shadow-xl">
        <iframe
          src="https://player.vimeo.com/video/1084976999?h=8687b63f85"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          class="w-full h-full"
          allowfullscreen>
        </iframe>
      </div>
    </div>

    <div class="container mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">Key Features</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div class="text-green-600 dark:text-green-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-8 w-8"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Privacy First</h3>
          <p class="text-gray-600 dark:text-gray-300">All data stays in your browser. No server-side storage of keys or conversations.</p>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div class="text-green-600 dark:text-green-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-8 w-8"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Multiple LLMs</h3>
          <p class="text-gray-600 dark:text-gray-300">Compare responses from GPT-4, Claude, Gemini, Mistral, and DeepSeek simultaneously.</p>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div class="text-green-600 dark:text-green-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-8 w-8"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Easy Configuration</h3>
          <p class="text-gray-600 dark:text-gray-300">Simple API key management and LLM provider selection through an intuitive interface.</p>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
      <p>Made by <a href="https://whakaarolabs.com" class="font-bold text-green-900 dark:text-green-800">Whakaaro Labs</a></p>
      <p class="mt-2 text-sm">Open source under MIT License</p>
    </div>
  </div>
</template>
