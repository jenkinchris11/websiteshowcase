<template>
  <div class="chat-widget" :class="{ 'chat-widget--open': isOpen }">
    <button
      class="chat-toggle"
      type="button"
      :aria-expanded="isOpen.toString()"
      :aria-controls="panelId"
      @click="togglePanel"
    >
      <span class="sr-only">Toggle chat prompts</span>
      💬
    </button>

    <div
      v-if="isOpen"
      :id="panelId"
      class="chat-panel"
      role="dialog"
      aria-label="Quick chat prompts"
    >
      <p class="chat-panel__title">Quick help</p>
      <ul class="chat-options" role="list">
        <li v-for="option in promptOptions" :key="option.id">
          <button
            class="chat-option"
            type="button"
            @click="handlePrompt(option)"
          >
            {{ option.label }}
          </button>
        </li>
      </ul>

      <div v-if="activeMessage" class="chat-response" role="status">
        {{ activeMessage }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const isOpen = ref(false)
const activeMessage = ref('')
const panelId = 'chat-widget-panel'

const promptOptions = [
  { id: 'starter', label: 'Starter Website', prompt: 'starter website' },
  { id: 'small-business', label: 'Small Business Website', prompt: 'small business website' },
  { id: 'custom', label: 'Custom build', prompt: 'custom build' },
  { id: 'other', label: 'Something else', prompt: 'something else' },
]

const togglePanel = () => {
  isOpen.value = !isOpen.value
}

const contactCta = computed(
  () => 'Want to chat? Drop me a line with your project goals and timeline—happy to help.'
)

const sendPrompt = (prompt) => {
  const cannedReplies = {
    'starter website': 'Great choice! I can craft a fast, modern starter site with essentials like About, Services, and Contact.',
    'small business website': 'Let’s plan a clean, mobile-ready site with up to 5 pages, forms, and a map—built to convert.',
    'custom build': 'Exciting! Tell me about your dream features, animations, or integrations and we’ll scope it together.',
    'something else': 'No worries—share your idea, and I will tailor a plan just for you.',
  }

  return `${cannedReplies[prompt] || 'Tell me what you need.'} ${contactCta.value}`
}

const handlePrompt = (option) => {
  activeMessage.value = sendPrompt(option.prompt)
}
</script>

<style scoped>
.chat-widget {
  position: fixed;
  right: 1.25rem;
  bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  z-index: 2000;
}

.chat-toggle {
  background: linear-gradient(135deg, #f4f3ee, #e4d9ff);
  color: #241f31;
  border: none;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 999px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, outline-color 0.2s ease;
}

.chat-toggle:hover {
  transform: translateY(-1px) scale(1.01);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.4);
}

.chat-toggle:focus-visible {
  outline: 3px solid rgba(115, 153, 255, 0.8);
  outline-offset: 2px;
}

.chat-panel {
  width: min(320px, 88vw);
  background: rgba(18, 18, 24, 0.92);
  color: #f7f6f3;
  border-radius: 16px;
  padding: 1rem;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(6px);
}

.chat-panel__title {
  font-weight: 700;
  font-size: 1rem;
  margin: 0 0 0.5rem;
  color: #d0c5ff;
}

.chat-options {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.5rem;
}

.chat-option {
  width: 100%;
  text-align: left;
  background: rgba(255, 255, 255, 0.06);
  color: inherit;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 0.55rem 0.75rem;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.15s ease;
}

.chat-option:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(208, 197, 255, 0.45);
  transform: translateY(-1px);
}

.chat-option:focus-visible {
  outline: 2px solid rgba(208, 197, 255, 0.85);
  outline-offset: 2px;
}

.chat-response {
  margin-top: 0.75rem;
  padding: 0.75rem;
  border-radius: 10px;
  background: rgba(39, 38, 48, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #f4f3ee;
  line-height: 1.4;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
