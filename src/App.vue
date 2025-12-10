<template>
  <main class="parent">
    <div class="div1">
      <HeroCanvas />
    </div>
    <section id="projects" class="div3" aria-label="Website projects">
      <div class="grid">
        <ProjectCard v-for="project in projects" :key="project.url" :project="project" />
      </div>
    </section>
    <section class="div2" aria-label="Codepen recreation">
      <div class="codepen-card">
        <div class="codepen-scene" aria-hidden="true">
          <div class="grid-overlay"></div>
          <div class="particle-field">
            <span class="particle" aria-hidden="true"></span>
            <span class="particle" aria-hidden="true"></span>
            <span class="particle" aria-hidden="true"></span>
            <span class="particle" aria-hidden="true"></span>
            <span class="particle" aria-hidden="true"></span>
            <span class="particle" aria-hidden="true"></span>
            <div class="particle-message">View my work below</div>
          </div>
        </div>
      </div>
    </section>
    <section class="div4" aria-label="Layered starfield scene">
      <div class="snowflakes" aria-hidden="true">
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❆
          </div>
          <div class="snowflake">
          ❄
          </div>
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❆
          </div>
          <div class="snowflake">
          ❄
          </div>
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❆
          </div>
          <div class="snowflake">
          ❄
          </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import ProjectCard from './components/ProjectCard.vue'
import HeroCanvas from './components/HeroCanvas.vue'
import { projects } from './data/projects'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const skylineRef = ref(null)
let observer
let prefersReducedMotion
const reduceMotion = ref(false)
let ticking = false
const resetMouseTilt = () => {
  if (!skylineRef.value) return
  skylineRef.value.style.setProperty('--mouse-tilt-x', '0')
  skylineRef.value.style.setProperty('--mouse-tilt-y', '0')
}

const updateProgress = () => {
  if (!skylineRef.value) return

  if (reduceMotion.value) {
    skylineRef.value.style.setProperty('--scroll-progress', '0')
    return
  }

  const rect = skylineRef.value.getBoundingClientRect()
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight
  const progress = Math.min(
    1,
    Math.max(0, 1 - (rect.top + rect.height * 0.2) / (viewportHeight + rect.height))
  )
  skylineRef.value.style.setProperty('--scroll-progress', progress.toFixed(4))
}

const handleScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    updateProgress()
    ticking = false
  })
}

const handlePointerMove = (event) => {
  if (!skylineRef.value || reduceMotion.value) return

  const rect = skylineRef.value.getBoundingClientRect()
  const offsetX = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
  const offsetY = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)

  const clampedX = Math.max(-1, Math.min(1, offsetX))
  const clampedY = Math.max(-1, Math.min(1, offsetY))

  skylineRef.value.style.setProperty('--mouse-tilt-x', clampedX.toFixed(4))
  skylineRef.value.style.setProperty('--mouse-tilt-y', clampedY.toFixed(4))
}

const handleReduceMotionChange = (event) => {
  reduceMotion.value = event.matches
  resetMouseTilt()
  updateProgress()
}

onMounted(() => {
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  reduceMotion.value = prefersReducedMotion.matches

  resetMouseTilt()
  updateProgress()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', updateProgress, { passive: true })
  prefersReducedMotion.addEventListener('change', handleReduceMotionChange)

  observer = new IntersectionObserver(() => updateProgress(), {
    threshold: [0, 0.25, 0.5, 0.75, 1],
  })

  if (skylineRef.value) {
    observer.observe(skylineRef.value)
    skylineRef.value.addEventListener('pointermove', handlePointerMove)
    skylineRef.value.addEventListener('mouseleave', resetMouseTilt)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateProgress)
  prefersReducedMotion?.removeEventListener('change', handleReduceMotionChange)
  if (observer && skylineRef.value) {
    observer.unobserve(skylineRef.value)
  }
  if (skylineRef.value) {
    skylineRef.value.removeEventListener('pointermove', handlePointerMove)
    skylineRef.value.removeEventListener('mouseleave', resetMouseTilt)
  }
})
</script>

<style scoped>
:global(body) {
  background: radial-gradient(circle at 18% 20%, rgba(224, 175, 160, 0.22), transparent 34%),
    radial-gradient(circle at 78% 12%, rgba(188, 184, 177, 0.26), transparent 42%),
    linear-gradient(135deg, #463f3a 0%, #8a817c 55%, #463f3a 100%);
  color: #f4f3ee;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  min-height: 100vh;
}

.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 10px;
}

.div1 {
  grid-area: 1 / 1 / 2 / 4;
}

.div2 {
  grid-area: 2 / 1 / 3 / 4;
}

.div3 {
  grid-area: 3 / 1 / 4 / 4;
}

.div4 {
  grid-area: 4 / 1 / 5 / 4;
}

.skyline {
  position: relative;
  height: clamp(320px, 44vw, 460px);
  overflow: hidden;
  border-radius: 18px;
  box-shadow: 0 22px 38px rgba(0, 0, 0, 0.35);
  isolation: isolate;
  perspective: 900px;
  --scroll-progress: 0;
  --mouse-tilt-x: 0;
  --mouse-tilt-y: 0;
}

.layer {
  position: absolute;
  inset: 0;
  transform-origin: center;
  transition: transform 0.4s ease-out;
}

.layer--stars {
  background: radial-gradient(circle at 24% 18%, rgba(255, 255, 255, 0.35), transparent 36%),
    radial-gradient(circle at 78% 24%, rgba(255, 255, 255, 0.2), transparent 30%);
  transform: translateX(calc(var(--mouse-tilt-x) * 10px))
    translateY(calc(var(--scroll-progress) * -8px + var(--mouse-tilt-y) * -4px)) scale(1.02);
}

.star {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  animation: twinkle 8s ease-in-out infinite;
}

.star--tiny {
  width: 2px;
  height: 2px;
  animation-duration: 10s;
}
/* customizable snowflake styling */
.snowflake {
  color: #fff;
  font-size: 1em;
  font-family: Arial;
  text-shadow: 0 0 1px #000;
}

@-webkit-keyframes snowflakes-fall {
  0% {
    top: -10%;
  }
  100% {
    top: 100%;
  }
}
@-webkit-keyframes snowflakes-shake {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  50% {
    -webkit-transform: translateX(80px);
    transform: translateX(80px);
  }
  100% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
}
@keyframes snowflakes-fall {
  0% {
    top: -10%;
  }
  100% {
    top: 100%;
  }
}
@keyframes snowflakes-shake {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(80px);
  }
  100% {
    transform: translateX(0px);
  }
}
.snowflake {
  position: fixed;
  top: -10%;
  z-index: 9999;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
  -webkit-animation-name: snowflakes-fall, snowflakes-shake;
  -webkit-animation-duration: 10s, 3s;
  -webkit-animation-timing-function: linear, ease-in-out;
  -webkit-animation-iteration-count: infinite, infinite;
  -webkit-animation-play-state: running, running;
  animation-name: snowflakes-fall, snowflakes-shake;
  animation-duration: 10s, 3s;
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: infinite, infinite;
  animation-play-state: running, running;
}
.snowflake:nth-of-type(0) {
  left: 1%;
  -webkit-animation-delay: 0s, 0s;
  animation-delay: 0s, 0s;
}
.snowflake:nth-of-type(1) {
  left: 10%;
  -webkit-animation-delay: 1s, 1s;
  animation-delay: 1s, 1s;
}
.snowflake:nth-of-type(2) {
  left: 20%;
  -webkit-animation-delay: 6s, 0.5s;
  animation-delay: 6s, 0.5s;
}
.snowflake:nth-of-type(3) {
  left: 30%;
  -webkit-animation-delay: 4s, 2s;
  animation-delay: 4s, 2s;
}
.snowflake:nth-of-type(4) {
  left: 40%;
  -webkit-animation-delay: 2s, 2s;
  animation-delay: 2s, 2s;
}
.snowflake:nth-of-type(5) {
  left: 50%;
  -webkit-animation-delay: 8s, 3s;
  animation-delay: 8s, 3s;
}
.snowflake:nth-of-type(6) {
  left: 60%;
  -webkit-animation-delay: 6s, 2s;
  animation-delay: 6s, 2s;
}
.snowflake:nth-of-type(7) {
  left: 70%;
  -webkit-animation-delay: 2.5s, 1s;
  animation-delay: 2.5s, 1s;
}
.snowflake:nth-of-type(8) {
  left: 80%;
  -webkit-animation-delay: 1s, 0s;
  animation-delay: 1s, 0s;
}
.snowflake:nth-of-type(9) {
  left: 90%;
  -webkit-animation-delay: 3s, 1.5s;
  animation-delay: 3s, 1.5s;
}
/* Demo Purpose Only*/
.demo {
  font-family: "Raleway", sans-serif;
  color: #fff;
  display: block;
  margin: 0 auto;
  padding: 15px 0;
  text-align: center;
}
.demo a {
  font-family: "Raleway", sans-serif;
  color: #000;
}

.star--small {
  width: 3px;
  height: 3px;
  animation-duration: 9s;
}

.star--bright {
  width: 6px;
  height: 6px;
  filter: drop-shadow(0 0 18px rgba(255, 255, 255, 0.8));
  animation-duration: 7s;
}

.layer--stars-back .star:nth-child(1) {
  top: 18%;
  left: 22%;
}

.layer--stars-back .star:nth-child(2) {
  top: 32%;
  left: 66%;
}

.layer--stars-back .star:nth-child(3) {
  top: 42%;
  left: 48%;
}

.layer--stars-back .star:nth-child(4) {
  top: 26%;
  left: 82%;
}

.layer--stars-back .star:nth-child(5) {
  top: 14%;
  left: 12%;
}

.layer--stars-mid .star:nth-child(1) {
  top: 48%;
  left: 18%;
}

.layer--stars-mid .star:nth-child(2) {
  top: 58%;
  left: 64%;
}

.silhouette--back {
  bottom: 34%;
  background-image: linear-gradient(180deg, rgba(104, 112, 140, 0.4) 0%, rgba(50, 58, 92, 0.8) 100%);
  clip-path: polygon(
    4% 70%,
    12% 48%,
    18% 54%,
    22% 42%,
    30% 60%,
    36% 46%,
    44% 52%,
    48% 36%,
    56% 58%,
    64% 44%,
    70% 52%,
    76% 38%,
    84% 58%,
    94% 44%,
    94% 100%,
    4% 100%
  );
}

.silhouette--mid {
  bottom: 24%;
  background-image: linear-gradient(180deg, rgba(82, 92, 130, 0.8) 0%, rgba(34, 42, 78, 0.95) 100%);
  clip-path: polygon(
    6% 76%,
    14% 52%,
    20% 58%,
    24% 38%,
    30% 64%,
    38% 48%,
    46% 56%,
    50% 32%,
    58% 60%,
    66% 46%,
    72% 56%,
    80% 34%,
    86% 62%,
    94% 46%,
    94% 100%,
    6% 100%
  );
}

.layer--background {
  transform: translateX(calc(var(--mouse-tilt-x) * 8px))
    translateY(calc(var(--scroll-progress) * -18px + var(--mouse-tilt-y) * -6px)) scale(1.02);
}

.layer--mid {
  transform: translateX(calc(var(--mouse-tilt-x) * 12px))
    translateY(calc(var(--scroll-progress) * -26px + var(--mouse-tilt-y) * -8px)) scale(1.03);
}

.layer--foreground {
  display: flex;
  align-items: flex-end;
  transform: translateX(calc(var(--mouse-tilt-x) * 16px))
    translateY(calc(var(--scroll-progress) * -42px + var(--mouse-tilt-y) * -10px)) scale(1.04);
}

.layer--stars-mid .star:nth-child(4) {
  top: 62%;
  left: 36%;
}

.layer--stars-mid .star:nth-child(5) {
  top: 46%;
  left: 52%;
}

.layer--stars-foreground .star:nth-child(1) {
  top: 68%;
  left: 18%;
}

.layer--stars-foreground .star:nth-child(2) {
  top: 72%;
  left: 72%;
}

.shooting-star {
  position: absolute;
  width: 120px;
  height: 1px;
  top: 22%;
  left: 16%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, transparent 100%);
  filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.6));
  transform: rotate(12deg);
  animation: shoot 12s ease-in-out infinite;
}

@keyframes shoot {
  0% {
    opacity: 0;
    transform: translate3d(-80px, 22px, 0) rotate(12deg);
  }
  12% {
    opacity: 1;
    transform: translate3d(60px, -12px, 0) rotate(12deg);
  }
  20% {
    opacity: 0;
    transform: translate3d(140px, -24px, 0) rotate(12deg);
  }
  100% {
    opacity: 0;
    transform: translate3d(-80px, 22px, 0) rotate(12deg);
  }
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.4;
    transform: scale(0.98);
  }
  50% {
    opacity: 1;
    transform: scale(1.06);
  }
}

@media (prefers-reduced-motion: reduce) {
  .layer {
    transition: none;
    transform: none !important;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
}

.codepen-card {
  position: relative;
  overflow: hidden;
  display: grid;
  align-items: stretch;
  min-height: 320px;
}

.codepen-scene {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  min-height: 320px;
}

.glow {
  position: absolute;
  width: 320px;
  height: 320px;
  filter: blur(60px);
  mix-blend-mode: screen;
  opacity: 0.8;
  animation: float 16s ease-in-out infinite;
}

.glow-one {
  background: radial-gradient(circle, rgba(255, 133, 92, 0.6), transparent 58%);
  top: -40px;
  left: -60px;
  animation-delay: -4s;
}

.glow-two {
  background: radial-gradient(circle, rgba(103, 163, 255, 0.65), transparent 60%);
  bottom: -80px;
  right: -20px;
  animation-duration: 18s;
}

.glow-three {
  background: radial-gradient(circle, rgba(255, 219, 120, 0.6), transparent 62%);
  top: 40px;
  right: 120px;
  animation-duration: 20s;
  animation-delay: -10s;
}

@keyframes float {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(40px, -16px, 0) scale(1.05);
  }
  100% {
    transform: translate3d(-12px, 20px, 0);
  }
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 22px 22px;
  opacity: 0.3;
  mask-image: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.8) 45%, rgba(0, 0, 0, 1) 100%);
  transform: perspective(520px) rotateX(66deg) translateY(36px);
  transform-origin: center top;
}

.particle-field {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 18px rgba(255, 255, 255, 0.7);
  animation: drift 14s linear infinite;
}

.particle:nth-child(1) {
  top: 14%;
  left: 16%;
  animation-delay: -2s;
  animation-duration: 16s;
}

.particle:nth-child(2) {
  top: 40%;
  left: 58%;
  animation-delay: -6s;
  animation-duration: 18s;
}

.particle:nth-child(3) {
  top: 68%;
  left: 22%;
  animation-delay: -10s;
}

.particle:nth-child(4) {
  top: 78%;
  left: 72%;
  animation-duration: 12s;
}

.particle:nth-child(5) {
  top: 16%;
  left: 80%;
  animation-duration: 20s;
  animation-delay: -8s;
}

.particle:nth-child(6) {
  top: 32%;
  left: 32%;
  animation-duration: 15s;
}

.particle-message {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 18px 28px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(244, 243, 238, 0.9);
  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  pointer-events: none;
}

@keyframes drift {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
  50% {
    transform: translate3d(14px, -26px, 0) scale(0.9);
    opacity: 0.8;
  }
  100% {
    transform: translate3d(-10px, 30px, 0) scale(1.05);
    opacity: 1;
  }
}

.codepen-copy {
  padding: 28px 28px 32px;
  align-self: center;
}

.eyebrow {
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 0.75rem;
  opacity: 0.7;
  margin: 0 0 10px;
}

.codepen-copy h2 {
  margin: 0 0 12px;
  font-size: 1.5rem;
}

.codepen-copy p {
  margin: 0;
  color: rgba(244, 243, 238, 0.86);
  line-height: 1.6;
}

@media (max-width: 960px) {
  .codepen-card {
    grid-template-columns: 1fr;
  }

  .codepen-copy {
    padding: 22px;
  }
}
</style>
