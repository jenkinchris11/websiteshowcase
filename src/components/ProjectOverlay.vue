<template>
  <Teleport to="body">
    <Transition name="overlay-fade">
      <div
        v-if="open"
        class="overlay"
        role="dialog"
        :aria-label="`${project.title} case study`"
        aria-modal="true"
      >
        <div class="overlay__backdrop" aria-hidden="true" @click="emit('close')"></div>

        <div class="overlay__panel" ref="overlayRef">
          <header class="overlay__header">
            <div class="overlay__nav">
              <button
                ref="closeButtonRef"
                type="button"
                class="overlay__close"
                @click="emit('close')"
                aria-label="Close case study"
              >
                Close
              </button>
              <nav aria-label="Case study sections">
                <a href="#challenge">Challenge</a>
                <a href="#solution">Solution</a>
                <a href="#results">Results</a>
                <a href="#live">Live demo</a>
              </nav>
            </div>
            <a class="overlay__link" :href="project.url" target="_blank" rel="noopener noreferrer">
              Open in new tab ↗
            </a>
          </header>

          <div class="overlay__content" role="document">
            <section class="case-hero">
              <div class="case-hero__media" role="presentation">
                <img v-if="project.heroMedia?.type === 'image'" :src="project.heroMedia.src" :alt="project.heroMedia.alt" />
                <video
                  v-else-if="project.heroMedia?.type === 'video'"
                  :src="project.heroMedia.src"
                  :poster="project.heroMedia.poster"
                  autoplay
                  muted
                  loop
                  playsinline
                ></video>
                <div class="case-hero__glass"></div>
              </div>
              <div class="case-hero__copy">
                <p class="case-hero__label">Guided case study</p>
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <div class="case-hero__stats" v-if="project.stats?.length">
                  <div class="stat" v-for="stat in project.stats" :key="stat.label">
                    <p class="stat__value">{{ stat.value }}</p>
                    <p class="stat__label">{{ stat.label }}</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="challenge" class="case-section">
              <div class="section__header">
                <p class="section__eyebrow">Challenge</p>
                <h4>{{ project.challenge.title }}</h4>
                <p class="section__lede">{{ project.challenge.copy }}</p>
              </div>
            </section>

            <section id="solution" class="case-section case-section--columns">
              <div class="section__header">
                <p class="section__eyebrow">Solution</p>
                <h4>{{ project.solution.title }}</h4>
                <p class="section__lede">{{ project.solution.copy }}</p>
              </div>
              <ul class="solution__list">
                <li v-for="point in project.solution.bullets" :key="point">{{ point }}</li>
              </ul>
            </section>

            <section id="results" class="case-section">
              <div class="section__header">
                <p class="section__eyebrow">Results</p>
                <h4>{{ project.results.title }}</h4>
                <p class="section__lede">{{ project.results.copy }}</p>
              </div>
              <div class="tech" v-if="project.tech?.length">
                <p class="tech__label">Tech stack</p>
                <div class="tech__pills">
                  <span v-for="item in project.tech" :key="item">{{ item }}</span>
                </div>
              </div>
            </section>

            <section id="live" class="case-section case-live">
              <div class="section__header">
                <p class="section__eyebrow">Live demo</p>
                <h4>Explore the build</h4>
                <p class="section__lede">Interactive preview with full keyboard control.</p>
              </div>
              <div class="overlay__frame" role="presentation">
                <template v-if="!showFallback">
                  <iframe
                    :src="project.url"
                    title="Live preview"
                    loading="lazy"
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                    allowfullscreen
                    @load="handleIframeLoad"
                    @error="handleIframeError"
                  ></iframe>
                </template>
                <div v-else class="overlay__fallback">
                  <div class="fallback__media" aria-hidden="true">
                    <img
                      v-if="project.heroMedia?.type === 'image'"
                      :src="project.heroMedia.src"
                      :alt="project.heroMedia.alt || `${project.title} preview`"
                    />
                    <div v-else class="fallback__placeholder">Preview unavailable</div>
                  </div>
                  <div class="fallback__copy">
                    <p class="fallback__message">{{ fallbackMessage }}</p>
                    <a
                      class="fallback__button"
                      :href="project.url"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open live site ↗
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  project: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['close'])

const overlayRef = ref(null)
const closeButtonRef = ref(null)
let lastActiveElement = null
const showFallback = ref(false)
const embedError = ref('')
const prefersFallback = ref(false)

const isCrossOrigin = computed(() => {
  try {
    const targetOrigin = new URL(props.project.url).origin
    return targetOrigin !== window.location.origin
  } catch (error) {
    return false
  }
})

const fallbackMessage = computed(() => {
  if (embedError.value) return embedError.value
  if (isCrossOrigin.value) return 'This site restricts embeds, so we are showing a safe preview instead.'
  if (prefersFallback.value) return 'Preview shown as a static snapshot for a smoother mobile experience.'
  return 'The live preview is unavailable. Use the button below to open the site.'
})

const handleIframeError = () => {
  embedError.value = 'The site blocked embedding (CSP/X-Frame-Options). Showing a snapshot instead.'
  showFallback.value = true
}

const handleIframeLoad = (event) => {
  if (showFallback.value) return
  const iframe = event?.target
  if (!iframe) return

  try {
    const doc = iframe.contentDocument || iframe.contentWindow?.document
    if (!doc || doc.body?.childElementCount === 0) {
      embedError.value = 'The preview did not load fully, so a static snapshot is shown instead.'
      showFallback.value = true
    }
  } catch (error) {
    embedError.value = 'This site prevents embedding due to cross-origin policies. Showing a snapshot instead.'
    showFallback.value = true
  }
}

const evaluatePreferredView = () => {
  const smallScreen = window.matchMedia('(max-width: 768px)').matches
  prefersFallback.value = smallScreen || isCrossOrigin.value

  if (prefersFallback.value) {
    showFallback.value = true
  } else if (!embedError.value) {
    showFallback.value = false
  }
}

const getFocusableElements = () => {
  if (!overlayRef.value) return []
  const selectors = [
    'a[href]',
    'button:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ]
  return Array.from(overlayRef.value.querySelectorAll(selectors.join(', '))).filter(
    (el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'),
  )
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
      evaluatePreferredView()
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

onMounted(() => {
  evaluatePreferredView()
  window.addEventListener('resize', evaluatePreferredView)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
  window.removeEventListener('resize', evaluatePreferredView)
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
  background: radial-gradient(circle at 30% 30%, rgba(124, 155, 255, 0.16), rgba(5, 9, 20, 0.92));
  backdrop-filter: blur(12px);
}

.overlay__panel {
  position: relative;
  width: min(1200px, 96vw);
  height: min(900px, 90vh);
  border-radius: 18px;
  background: rgba(10, 14, 24, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.overlay__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
}

.overlay__nav {
  display: flex;
  align-items: center;
  gap: 12px;
}

.overlay__nav nav {
  display: flex;
  gap: 12px;
}

.overlay__nav a {
  color: #dbeafe;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.overlay__link,
.overlay__close {
  border-radius: 12px;
  padding: 10px 14px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.08);
  color: #dbeafe;
  font-weight: 600;
}

.overlay__link:hover,
.overlay__close:hover {
  background: rgba(255, 255, 255, 0.14);
}

.overlay__content {
  flex: 1;
  overflow-y: auto;
  padding: 18px;
  display: grid;
  gap: 18px;
  scroll-behavior: smooth;
}

.case-hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  align-items: stretch;
}

.case-hero__media {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  isolation: isolate;
  background: linear-gradient(135deg, rgba(124, 155, 255, 0.25), rgba(88, 210, 255, 0.25));
  border: 1px solid rgba(255, 255, 255, 0.08);
  min-height: 240px;
}

.case-hero__media img,
.case-hero__media video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.case-hero__glass {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(5, 9, 20, 0.15), rgba(5, 9, 20, 0.8));
  mix-blend-mode: screen;
  pointer-events: none;
}

.case-hero__copy {
  padding: 14px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02);
  display: grid;
  gap: 10px;
}

.case-hero__label {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.8rem;
  color: #9fc1ff;
}

.case-hero__stats {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.case-section {
  padding: 14px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02);
}

.case-section--columns {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 14px;
}

.section__header {
  display: grid;
  gap: 6px;
}

.section__eyebrow {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.78rem;
  color: #9fc1ff;
}

.section__lede {
  margin: 0;
  color: rgba(232, 237, 241, 0.86);
}

.solution__list {
  margin: 0;
  padding-left: 16px;
  display: grid;
  gap: 8px;
  color: rgba(232, 237, 241, 0.86);
}

.tech {
  margin-top: 12px;
  display: grid;
  gap: 6px;
}

.tech__label {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.8rem;
  color: #9fc1ff;
}

.tech__pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech__pills span {
  padding: 8px 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.case-live {
  background: linear-gradient(135deg, rgba(124, 155, 255, 0.08), rgba(10, 14, 24, 0.8));
}

.overlay__frame {
  background: #050914;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  min-height: 400px;
}

.overlay__frame iframe {
  width: 100%;
  height: 100%;
  border: none;
  background: #050914;
}

.overlay__fallback {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  align-items: stretch;
  gap: 14px;
  height: 100%;
}

.fallback__media {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.fallback__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.fallback__placeholder {
  display: grid;
  place-items: center;
  color: rgba(232, 237, 241, 0.72);
  height: 100%;
}

.fallback__copy {
  display: grid;
  gap: 12px;
  align-content: center;
  padding: 14px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02);
}

.fallback__message {
  margin: 0;
  color: rgba(232, 237, 241, 0.9);
}

.fallback__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 14px;
  border-radius: 10px;
  background: linear-gradient(135deg, #6cb2ff, #7dd3fc);
  color: #050914;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 12px 30px rgba(108, 178, 255, 0.3);
}

.stat {
  padding: 8px 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.stat__value {
  margin: 0;
  font-weight: 700;
}

.stat__label {
  margin: 0;
  font-size: 0.85rem;
  color: rgba(232, 237, 241, 0.78);
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

  .overlay__nav nav {
    flex-wrap: wrap;
  }

  .case-section--columns {
    grid-template-columns: 1fr;
  }

  .overlay__fallback {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .overlay__content {
    scroll-behavior: auto;
  }

  video {
    animation: none !important;
  }
}
</style>
