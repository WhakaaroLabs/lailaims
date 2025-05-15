import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import OpenAI from 'openai'
import Anthropic from '@anthropic-ai/sdk'
import { GoogleGenAI } from '@google/genai'

const LOCAL_STORAGE_API_KEY = 'lailaims_api_key_'
const LOCAL_STORAGE_IS_ENABLED = 'lailaims_is_enabled_'

export const useLLMStore = defineStore('llms', () => {
  const llms = ref({
    'gpt-4.1': {
      title: 'Open AI GPT-4.1',
      howToGetApiKeyLink: 'https://platform.openai.com/api-keys',
      client: null as null | any,
      enabled: true,
      async initClient(apiKey: string) {
        return new OpenAI({ apiKey, dangerouslyAllowBrowser: true })
      },
      isCurrentlyFetching: false,
      lastResponses: [] as any[],
      error: null as null | any,
      async makeCall(prompt: string) {
        const previousResponseId = this.lastResponses[this.lastResponses.length - 1]?.id || null
        const response = await this.client.responses.create({
          model: 'gpt-4.1',
          input: prompt,
          store: true,
          previous_response_id: previousResponseId,
        })

        this.lastResponses.push(response)

        return response.output_text
      },
      formatError(error: any) {
        return error.message
      }
    },
    'claude-3.7': {
      title: 'Claude 3.7',
      howToGetApiKeyLink: 'https://console.anthropic.com/settings/keys',
      client: null as null | any,
      enabled: true,
      async initClient(apiKey: string) {
        return new Anthropic({ apiKey, dangerouslyAllowBrowser: true })
      },
      isCurrentlyFetching: false,
      currentConversation: [] as any[],
      lastResponses: [] as any[],
      error: null as null | any,
      async makeCall(prompt: string) {
        this.currentConversation.push({ role: 'user', content: prompt })

        const response = await this.client.messages.create({
          model: 'claude-3-7-sonnet-20250219',
          max_tokens: 1000,
          messages: this.currentConversation,
        })

        this.currentConversation.push({
          role: 'assistant',
          content: response.content[0].text
        })

        this.lastResponses.push(response)

        return response.content[0].text
      },
      formatError({ error }: any) {
        return error?.message || error?.error?.message || 'An error occurred'
      }
    },
    deepseek: {
      title: 'DeepSeek',
      howToGetApiKeyLink: 'https://api-docs.deepseek.com/',
      client: null as null | any,
      enabled: true,
      async initClient(apiKey: string) {
        return new OpenAI({
          baseURL: 'https://api.deepseek.com',
          apiKey,
          dangerouslyAllowBrowser: true
        })
      },
      isCurrentlyFetching: false,
      currentConversation: [] as any[],
      lastResponses: [] as any[],
      error: null as null | any,
      async makeCall(prompt: string) {
        this.currentConversation.push({ role: 'user', content: prompt })

        const response = await this.client.chat.completions.create({
          model: 'deepseek-chat',
          messages: this.currentConversation,
        })

        this.currentConversation.push({
          role: 'assistant',
          content: response.choices[0].message.content
        })
        this.lastResponses.push(response)

        return response.choices[0].message.content
      },
      formatError(error: any) {
        return error.message
      }
    },
    'gemini-2.0': {
      title: 'Google Gemini 2.0 Flash',
      howToGetApiKeyLink: 'https://ai.google.dev/gemini-api/docs/api-key',
      client: null as null | any,
      enabled: true,
      async initClient(apiKey: string) {
        return new GoogleGenAI({
          apiKey
        })
      },
      isCurrentlyFetching: false,
      currentConversation: [] as any[],
      lastResponses: [] as any[],
      error: null as null | any,
      async makeCall(prompt: string) {
        const chat = this.client.chats.create({
          model: 'gemini-2.0-flash',
          history: this.currentConversation,
        })

        const response = await chat.sendMessage({
          message: prompt
        })

        this.currentConversation.push({ role: 'user', content: prompt })
        this.currentConversation.push({ role: 'model', content: response.text })

        this.lastResponses.push(response.text)

        return response.text
      },
      formatError(error: any) {
        return error.message
      }
    },
    mistral: {
      title: 'Mistral Large',
      howToGetApiKeyLink: 'https://docs.mistral.ai/getting-started/quickstart/',
      client: null as null | any,
      enabled: true,
      async initClient(apiKey: string) {
        return {
          async chat(body: any) {
            const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`
              },
              body: JSON.stringify(body)
            })

            return response.json()
          }
        }
      },
      isCurrentlyFetching: false,
      lastResponses: [] as any[],
      currentConversation: [] as any[],
      error: null as null | any,
      async makeCall(prompt: string) {
        this.currentConversation.push({ role: 'user', content: prompt })

        const response = await this.client.chat({
          model: 'mistral-large-latest',
          messages: this.currentConversation
        })

        this.currentConversation.push({
          role: 'assistant',
          content: response.choices[0].message.content
        })
        this.lastResponses.push(response)

        return response.choices[0].message.content
      },
      formatError(error: any) {
        return error.message
      }
    }
  })
  const savedApiKeys = ref<Record<string, string>>({})
  const prompts = ref<string[]>([])
  const conversationHistory = ref<Record<string, string>[]>([])

  Object.keys(llms.value).forEach(async (llmId) => {
    savedApiKeys.value[llmId] = localStorage.getItem(`${LOCAL_STORAGE_API_KEY}${llmId}`) || ''
    llms.value[llmId as keyof typeof llms.value].enabled = shouldDisplayLlm(llmId)

    if (savedApiKeys.value[llmId]) {
      llms.value[llmId as keyof typeof llms.value].client = await llms.value[llmId as keyof typeof llms.value].initClient(savedApiKeys.value[llmId])
    }
  })

  /** COMPUTED */
  const lastPrompts = computed(() => {
    return prompts.value.slice(-5)
  })

  /** FUNCTIONS */
  function shouldDisplayLlm(llmId: string) {
    const saved = localStorage.getItem(`${LOCAL_STORAGE_IS_ENABLED}${llmId}`)

    return saved === 'false' ? false : true
  }


  function hasApiKey(llmId: string) {
    return savedApiKeys.value[llmId] !== ''
  }

  async function saveApiKey({ llmId, key }: { llmId: string, key: string }) {
    if (key) {
      localStorage.setItem(`${LOCAL_STORAGE_API_KEY}${llmId}`, key)
      savedApiKeys.value[llmId] = key
      llms.value[llmId as keyof typeof llms.value].client = await llms.value[llmId as keyof typeof llms.value].initClient(key)
    }
  }

  function deleteApiKey(llmId: string) {
    localStorage.removeItem(`${LOCAL_STORAGE_API_KEY}${llmId}`)

    savedApiKeys.value[llmId] = ''
  }

  function addPrompt(prompt: string) {
    prompts.value.push(prompt)
    conversationHistory.value.unshift({
      id: Math.random().toString(36).substring(2, 15),
      type: 'user',
      content: prompt,
      timestamp: new Date().toISOString()
    })

    // for each client, make the call
    Object.keys(llms.value).forEach(async (llmId) => {
      const llm = llms.value[llmId as keyof typeof llms.value]

      if (llm.client && llm.enabled) {
        try {
          llm.isCurrentlyFetching = true
          const response = await llm.makeCall(prompt)

          conversationHistory.value.unshift({
            id: Math.random().toString(36).substring(2, 15),
            llmId,
            type: 'llm',
            content: response,
            timestamp: new Date().toISOString()
          })
        } catch (error) {
          llm.error = llm.formatError(error)
        } finally {
          llm.isCurrentlyFetching = false
        }
      }
    })
  }

  function toggleLLM(llmId: string, enabled: boolean) {
    llms.value[llmId as keyof typeof llms.value].enabled = enabled
    localStorage.setItem(`${LOCAL_STORAGE_IS_ENABLED}${llmId}`, enabled.toString())
  }

  return {
    // state
    llms,
    conversationHistory,
    savedApiKeys,
    // computed,
    lastPrompts,
    // functions
    hasApiKey,
    saveApiKey,
    deleteApiKey,
    addPrompt,
    toggleLLM,
    shouldDisplayLlm
  }
})