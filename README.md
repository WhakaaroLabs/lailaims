# Lailaims

Lailaims is a client-side web application for testing multiple LLM providers simultaneously. It allows users to add and store API keys for various services like OpenAI, Claude, Gemini, Mistral, and DeepSeek, then compare their responses to the same prompts side-by-side in a single interface.

All processing happens locally in the browser with no server-side storage of keys or conversations.

This proof-of-concept prioritizes functionality and experimentation over polish, featuring a responsive design with dark/light mode support.


This application allows you to:
- Add and manage API keys for various LLM providers
- Test LLM interactions directly in your browser
- Switch between different LLM providers easily
- Keep your API keys secure (they never leave your browser)

## Known limitations
As stated, this is a POC project, thus it has:

- basic code quality
- limited error handling
- no testing
- no persistence across browser sessions
- quick implementation without production-level optimization

## How to Use

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Start the development server**
   ```bash
   pnpm dev
   ```

3. **Add your API keys**
   - Select an LLM provider
   - Enter your API key when prompted
   - Click "Save API Key"

4. **Start using the LLM**
   - Your API key is stored locally in your browser
   - Begin interacting with your chosen LLM

## Tech Stack

- Vue 3 + TypeScript
- Pinia (State Management)
- Tailwind CSS
- Vite

## Privacy

- ✅ All data stays in your browser
- ✅ No server-side storage

## License
MIT License - feel free to fork and improve!