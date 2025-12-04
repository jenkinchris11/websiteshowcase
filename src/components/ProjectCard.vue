<template>
  <article
    ref="cardRef"
    class="card"
    @pointermove="handlePointerMove"
    @pointerleave="resetEffects"
    @pointercancel="resetEffects"
  >
    <div class="card__header">
      <div class="card__titles">
        <p class="label">{{ project.label || 'Signature build' }}</p>
        <h3>{{ project.title }}</h3>
        <p class="description">{{ project.description }}</p>
        <div class="meta">
          <span class="meta__item" v-if="project.role">
            <span class="meta__label">Role</span>
            <strong>{{ project.role }}</strong>
          </span>
          <span class="meta__item" v-if="project.impact">
            <span class="meta__label">Impact</span>
            <strong>{{ project.impact }}</strong>
          </span>
          <span class="meta__item" v-if="project.awards">
            <span class="meta__label">Highlights</span>
            <strong>{{ project.awards }}</strong>
          </span>
        </div>
      </div>
      <button
        ref="ctaRef"
        class="cta"
        type="button"
        @click="openOverlay"
        @pointermove="magnetizeCTA"
        @pointerleave="resetCTA"
      >
        {{ project.cta || 'Open case study' }}
      </button>
    </div>

    <div class="card__preview">
      <div class="card__media" :style="mediaStyle" role="presentation">
        <div class="card__spotlight" :style="spotlightStyle"></div>
        <div class="card__live">Live demo</div>
      </div>
      <button
        type="button"
        class="card__preview-overlay"
        @click="openOverlay"
        :aria-label="`Open live preview of ${project.title}`"
      ></button>
    </div>

    <div class="card__footer">
      <ul class="tags" aria-label="Tools used">
        <li v-for="tool in project.tools" :key="tool">{{ tool }}</li>
      </ul>
      <div class="stats" v-if="project.stats?.length">
        <div class="stat" v-for="stat in project.stats" :key="stat.label">
          <p class="stat__value">{{ stat.value }}</p>
          <p class="stat__label">{{ stat.label }}</p>
        </div>
      </div>
    </div>

    <ProjectOverlay :open="showOverlay" :project="project" @close="closeOverlay" />
  </article>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import ProjectOverlay from './ProjectOverlay.vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const showOverlay = ref(false)
const cardRef = ref(null)
const ctaRef = ref(null)
const spotlight = ref({ x: 50, y: 50, opacity: 0 })
const tilt = ref({ x: 0, y: 0 })
const isReducedMotion = ref(false)
let motionMediaQuery = null

const openOverlay = () => {
  showOverlay.value = true
}

const closeOverlay = () => {
  showOverlay.value = false
}

const updateMotionPreference = () => {
  isReducedMotion.value = motionMediaQuery?.matches ?? false
}

const handlePointerMove = (event) => {
  if (isReducedMotion.value || !cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  const percentX = (x - rect.width / 2) / (rect.width / 2)
  const percentY = (y - rect.height / 2) / (rect.height / 2)

  tilt.value = {
    x: percentY * 6,
    y: percentX * -6,
  }

  spotlight.value = {
    x: (x / rect.width) * 100,
    y: (y / rect.height) * 100,
    opacity: 1,
  }
}

const resetEffects = () => {
  tilt.value = { x: 0, y: 0 }
  spotlight.value = { x: 50, y: 50, opacity: 0 }
}

const magnetizeCTA = (event) => {
  if (isReducedMotion.value || !ctaRef.value) return
  const rect = ctaRef.value.getBoundingClientRect()
  const offsetX = (event.clientX - rect.left - rect.width / 2) / 6
  const offsetY = (event.clientY - rect.top - rect.height / 2) / 6
  ctaRef.value.style.transform = `translate(${offsetX}px, ${offsetY}px)`
}

const resetCTA = () => {
  if (ctaRef.value) {
    ctaRef.value.style.transform = 'translate(0, 0)'
  }
}

const mediaStyle = computed(() => ({
  backgroundImage: `linear-gradient(135deg, rgba(9, 12, 24, 0.75), rgba(9, 12, 24, 0.25)), url(${props.project.cover})`,
  transform: `rotateX(${tilt.value.x}deg) rotateY(${tilt.value.y}deg)`
}))

const spotlightStyle = computed(() => ({
  opacity: spotlight.value.opacity,
  background: `radial-gradient(160px at ${spotlight.value.x}% ${spotlight.value.y}%, rgba(255, 255, 255, 0.25), transparent 60%)`,
}))

onMounted(() => {
  motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  updateMotionPreference()
  motionMediaQuery?.addEventListener('change', updateMotionPreference)
})

onBeforeUnmount(() => {
  motionMediaQuery?.removeEventListener('change', updateMotionPreference)
})
</script>

<style scoped>
.card {
  position: relative;
  display: grid;
  gap: 16px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  background: radial-gradient(circle at 10% 20%, rgba(122, 94, 255, 0.08), transparent 35%),
    radial-gradient(circle at 80% 0%, rgba(0, 180, 255, 0.08), transparent 25%),
    rgba(17, 24, 39, 0.8);
  backdrop-filter: blur(6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  transform-style: preserve-3d;
  perspective: 1000px;
  overflow: hidden;
}

.card__header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: start;
}

.card__titles {
  display: grid;
  gap: 6px;
}

.label {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.75rem;
  margin: 0;
}

h3 {
  margin: 0;
  font-size: 1.35rem;
}

.description {
  margin: 0;
  color: rgba(232, 237, 241, 0.86);
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.meta__item {
  padding: 8px 10px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: grid;
  gap: 2px;
}

.meta__label {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  color: #9fc1ff;
}

.card__preview {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #0a0f1c;
}

.card__media {
  position: relative;
  width: 100%;
  height: 340px;
  background-size: cover;
  background-position: center;
  transition: transform 0.25s ease;
  transform-style: preserve-3d;
}

.card__spotlight {
  position: absolute;
  inset: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}

.card__live {
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(6, 10, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.12);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.72rem;
}

.card__preview-overlay {
  position: absolute;
  inset: 0;
  border: none;
  background: linear-gradient(180deg, rgba(9, 12, 24, 0), rgba(9, 12, 24, 0.75));
  cursor: pointer;
  transition: background 0.2s ease, box-shadow 0.2s ease;
}

.card__preview-overlay:hover,
.card__preview-overlay:focus-visible {
  background: linear-gradient(180deg, rgba(9, 12, 24, 0.05), rgba(9, 12, 24, 0.85));
  outline: none;
}

.card__preview-overlay:focus-visible {
  box-shadow: 0 0 0 3px rgba(124, 155, 255, 0.5);
}

.card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  margin: 0;
}

.tags li {
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  font-size: 0.9rem;
  color: rgba(232, 237, 241, 0.82);
}

.stats {
  display: flex;
  gap: 12px;
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

.cta {
  color: #05080f;
  font-weight: 700;
  white-space: nowrap;
  border: none;
  background: linear-gradient(135deg, #7c9bff, #58d2ff);
  cursor: pointer;
  padding: 12px 14px;
  border-radius: 12px;
  box-shadow: 0 10px 28px rgba(88, 210, 255, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cta:hover,
.cta:focus-visible {
  color: #05080f;
  outline: none;
  box-shadow: 0 12px 32px rgba(124, 155, 255, 0.35);
}

.cta:focus-visible {
  box-shadow: 0 0 0 3px rgba(124, 155, 255, 0.5), 0 12px 32px rgba(124, 155, 255, 0.35);
}

@media (max-width: 768px) {
  .card__header {
    flex-direction: column;
  }

  .card__preview {
    order: 3;
  }

  .card__footer {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card,
  .card__media,
  .cta,
  .card__spotlight {
    transition: none !important;
    transform: none !important;
  }
}
</style>
