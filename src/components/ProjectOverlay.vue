<template>
  <Teleport to="body">
    <Transition name="overlay-fade">
      <div
        v-if="open"
        class="overlay"
        role="dialog"
        :aria-label="`${title} live preview`"
        aria-modal="true"
      >
        <div class="overlay__backdrop" aria-hidden="true" @click="emit('close')"></div>

        <div class="overlay__panel" ref="overlayRef">
          <header class="overlay__header">
            <div>
              <p class="overlay__label">Live demo</p>
              <h3 class="overlay__title">{{ title }}</h3>
            </div>
            <div class="overlay__actions">
              <a
                class="overlay__link"
                :href="url"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in new tab ↗
              </a>
              <button
                ref="closeButtonRef"
                type="button"
                class="overlay__close"
                @click="emit('close')"
              >
                Close
              </button>
            </div>
          </header>

          <div class="overlay__frame" role="presentation">
            <iframe
              :src="url"
              title="Live preview"
              loading="lazy"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['close'])

const overlayRef = ref(null)
const closeButtonRef = ref(null)
let lastActiveElement = null

const getFocusableElements = () => {
  if (!overlayRef.value) return []
  const selectors = [
    'a[href]',
    'button:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ]
  return Array.from(
    overlayRef.value.querySelectorAll(selectors.join(', ')),
  ).filter((el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'))
}

const trapFocus = (event) => {
  const focusable = getFocusableElements()
  if (!focusable.length) return

  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  const active = document.activeElement

  if (event.shiftKey && (active === first || !overlayRef.value.contains(active))) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && (active === last || !overlayRef.value.contains(active))) {
    event.preventDefault()
    first.focus()
  }
}

const handleKeydown = (event) => {
  if (!props.open) return

  if (event.key === 'Escape') {
    event.preventDefault()
    emit('close')
  } else if (event.key === 'Tab') {
    trapFocus(event)
  }
}

watch(
  () => props.open,
  async (value) => {
    if (value) {
      lastActiveElement = document.activeElement
      document.addEventListener('keydown', handleKeydown)
      document.body.style.overflow = 'hidden'
      await nextTick()
      closeButtonRef.value?.focus({ preventScroll: true })
    } else {
      document.removeEventListener('keydown', handleKeydown)
      document.body.style.overflow = ''
      if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
        lastActiveElement.focus({ preventScroll: true })
      }
    }
  },
)

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 90;
  padding: 24px;
}

.overlay__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(5, 9, 20, 0.82);
  backdrop-filter: blur(10px);
}

.overlay__panel {
  position: relative;
  width: min(1200px, 96vw);
  height: min(860px, 88vh);
  border-radius: 18px;
  background: #0b1224;
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.overlay__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 18px 22px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.05), transparent);
}

.overlay__label {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
}

.overlay__title {
  margin: 4px 0 0;
}

.overlay__actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.overlay__link,
.overlay__close {
  border-radius: 999px;
  padding: 8px 14px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.08);
  color: #dbeafe;
  font-weight: 600;
}

.overlay__link:hover,
.overlay__close:hover {
  background: rgba(255, 255, 255, 0.14);
}

.overlay__frame {
  flex: 1;
  background: #050914;
}

.overlay__frame iframe {
  width: 100%;
  height: 100%;
  border: none;
  background: #050914;
}

.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

@media (max-width: 768px) {
  .overlay {
    padding: 12px;
  }

  .overlay__header {
    flex-direction: column;
    align-items: flex-start;
  }

  .overlay__actions {
    width: 100%;
  }

  .overlay__link,
  .overlay__close {
    flex: 1;
    text-align: center;
  }
}
</style>
