<template>
  <section ref="containerRef" class="container" aria-label="Animated hero title">
    <h1>
      <span class="title">This is</span>
      <span class="title">a long</span>
      <span class="title">long title</span>
    </h1>

    <button class="button" type="button" @click="runAnimation">restart</button>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { gsap, Back } from 'gsap'

const containerRef = ref(null)
let timeline = null

const letterize = (selector) => {
  const container = containerRef.value
  if (!container) return
  const elements = Array.from(container.querySelectorAll(selector))

  elements.forEach((el) => {
    const text = el.textContent || ''
    el.textContent = ''
    const characters = [...text]
    characters.forEach((char) => {
      const span = document.createElement('span')
      span.textContent = char
      el.appendChild(span)
    })
  })
}

const runAnimation = () => {
  if (!containerRef.value) return
  if (timeline) timeline.kill()

  const button = containerRef.value.querySelector('.button')
  const titleLetters = containerRef.value.querySelectorAll('.title span')

  timeline = gsap.timeline()
  timeline.set(button, { visibility: 'hidden', opacity: 0 })
  timeline.staggerFromTo(
    titleLetters,
    0.5,
    { ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80 },
    { ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0 },
    0.05
  )
  timeline.to(button, { duration: 0.2, visibility: 'visible', opacity: 1 })
}

onMounted(() => {
  letterize('.title')
  letterize('.button')
  runAnimation()
})

onBeforeUnmount(() => {
  if (timeline) {
    timeline.kill()
    timeline = null
  }
})
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Fjalla+One');

$background: linear-gradient(to bottom, #405166 0%, #656f6f 100%);
$red: #e55643;
$green: #2b9f5e;
$yellow: #f1c83c;
$shadow: #533d4a;

.container {
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: block;
  position: absolute;
  max-width: 225px;
  height: 250px;
  margin: 0 auto;
  font-family: 'Fjalla One', sans-serif;
  background: $background;
  padding: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
}

.button {
  float: left;
  position: relative;
  bottom: -65px;
  left: 50%;
  transform: translateX(-50%) rotate(-10deg);
  color: $red;
  text-transform: uppercase;
  opacity: 0;
  visibility: hidden;
  cursor: pointer;
  border: none;
  background: transparent;
  font: inherit;
  padding: 0;

  span {
    transform: skew(-10deg);
    display: block;
    float: left;
    text-shadow: $shadow 1px 1px, $shadow 2px 2px, $shadow 3px 3px, $shadow 4px 4px;
  }
}

h1 {
  color: #fff;
  text-transform: uppercase;
  font-size: 42px;
  margin: 0;
  line-height: 47px;
  letter-spacing: 2px;
}

.title {
  transform: translateX(-50%) rotate(-10deg);
  display: block;
  float: left;
  left: 50%;
  position: relative;

  span {
    transform: skew(-10deg);
    display: block;
    float: left;
    text-shadow: $shadow 1px 1px, $shadow 2px 2px, $shadow 3px 3px, $shadow 4px 4px, $shadow 5px 5px, $shadow 6px 6px;
    min-width: 10px;
    min-height: 10px;
    position: relative;
  }
}

.title:nth-child(1) {
  color: $red;
}

.title:nth-child(2) {
  color: $green;
}

.title:nth-child(3) {
  color: $yellow;
  <header class="hero" aria-labelledby="hero-title">
    <div class="hero__intro">
      <p class="eyebrow">Featured experiment</p>
      <h1 id="hero-title">Immersive hero from Robin Treur</h1>
      <p class="lede">
        This recreation brings the animated CodePen experience directly into the site without any embeds. The shader-like
        waves and floating particles are rendered with a lightweight canvas animation tuned to match the original mood.
      </p>
    </div>

    <div class="hero__stage" role="presentation">
      <canvas ref="canvasRef" class="hero__canvas" aria-hidden="true"></canvas>
      <div class="hero__glow hero__glow--left"></div>
      <div class="hero__glow hero__glow--right"></div>
    </div>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const canvasRef = ref(null)
let ctx
let frame
let width = 0
let height = 0
let deviceRatio = 1

const layers = Array.from({ length: 6 }, (_, i) => ({
  amplitude: 28 + i * 6,
  baseline: 0.5 + i * 0.06,
  hue: 15 + i * 12,
  speed: 0.6 + i * 0.12,
  frequency: 1.6 + i * 0.14,
  offset: Math.random() * 1000,
  alpha: 0.8 - i * 0.08,
}))

const particles = Array.from({ length: 70 }, () => ({
  x: Math.random(),
  y: Math.random(),
  z: Math.random() * 0.6 + 0.4,
  drift: (Math.random() - 0.5) * 0.2,
  speed: Math.random() * 0.2 + 0.1,
}))

const resize = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  const rect = canvas.parentElement?.getBoundingClientRect()
  if (!rect) return

  deviceRatio = window.devicePixelRatio || 1
  width = rect.width
  height = Math.max(rect.height, 520)
  canvas.width = width * deviceRatio
  canvas.height = height * deviceRatio

  ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.setTransform(deviceRatio, 0, 0, deviceRatio, 0, 0)
  }
}

const drawLayer = (layer, t) => {
  if (!ctx) return
  const { amplitude, baseline, hue, speed, frequency, offset, alpha } = layer
  ctx.beginPath()
  const step = Math.max(24, width / 20)
  for (let x = -step; x <= width + step; x += step) {
    const progress = x / width
    const noise = Math.sin(progress * Math.PI * frequency + t * speed + offset)
    const crest = Math.cos(progress * Math.PI * 0.6 + offset * 0.2 + t * 0.3)
    const y = height * baseline + noise * amplitude + crest * 10
    if (x === -step) {
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
    }
  }
  ctx.lineTo(width + step, height + step)
  ctx.lineTo(-step, height + step)
  ctx.closePath()

  const gradient = ctx.createLinearGradient(0, height * baseline - amplitude * 2, 0, height)
  gradient.addColorStop(0, `hsla(${hue}, 70%, 70%, ${Math.max(0, alpha - 0.15)})`)
  gradient.addColorStop(0.6, `hsla(${hue + 4}, 65%, 64%, ${alpha})`)
  gradient.addColorStop(1, `hsla(${hue + 16}, 55%, 48%, ${Math.max(0.3, alpha - 0.25)})`)
  ctx.fillStyle = gradient
  ctx.globalCompositeOperation = 'screen'
  ctx.fill()
}

const drawParticles = (t) => {
  if (!ctx) return
  ctx.globalCompositeOperation = 'lighter'
  particles.forEach((p) => {
    p.x += p.drift * 0.002
    p.y -= p.speed * 0.0018
    if (p.y < -0.05) {
      p.y = 1.05
      p.x = Math.random()
    }
    if (p.x < -0.1) p.x = 1.1
    if (p.x > 1.1) p.x = -0.1

    const size = (1.4 - p.z) * 3.4
    const x = p.x * width
    const y = p.y * height
    const flicker = 0.8 + Math.sin(t * 0.002 + p.z * 6) * 0.2
    ctx.beginPath()
    ctx.fillStyle = `rgba(240, 226, 210, ${0.4 * flicker})`
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fill()
  })
}

const render = (timestamp) => {
  if (!ctx) return
  const t = timestamp || 0
  ctx.clearRect(0, 0, width, height)

  const background = ctx.createLinearGradient(0, 0, width, height)
  background.addColorStop(0, 'rgba(18, 16, 28, 0.95)')
  background.addColorStop(0.4, 'rgba(39, 31, 44, 0.95)')
  background.addColorStop(1, 'rgba(80, 65, 66, 0.92)')
  ctx.fillStyle = background
  ctx.fillRect(0, 0, width, height)

  layers.forEach((layer) => drawLayer(layer, t * 0.001))
  drawParticles(t)

  frame = requestAnimationFrame(render)
}

onMounted(() => {
  resize()
  render(0)
  window.addEventListener('resize', resize)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  window.removeEventListener('resize', resize)
})
</script>

<style scoped>
.hero {
  display: grid;
  gap: 18px;
  padding: clamp(16px, 3vw, 28px);
  border-radius: 24px;
  border: 1px solid rgba(244, 243, 238, 0.12);
  background: linear-gradient(120deg, rgba(244, 243, 238, 0.08), rgba(244, 243, 238, 0)),
    linear-gradient(180deg, rgba(188, 184, 177, 0.16), rgba(70, 63, 58, 0.4));
  box-shadow: 0 24px 70px rgba(27, 21, 18, 0.6);
  position: relative;
  overflow: hidden;
}

.hero__intro {
  display: grid;
  gap: 12px;
  max-width: 840px;
  position: relative;
  z-index: 2;
}

.hero__stage {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(244, 243, 238, 0.12);
  background: radial-gradient(circle at 20% 30%, rgba(224, 175, 160, 0.18), transparent 40%),
    radial-gradient(circle at 80% 10%, rgba(138, 129, 124, 0.2), transparent 48%),
    rgba(0, 0, 0, 0.24);
  min-height: min(72vh, 720px);
  box-shadow: inset 0 0 0 1px rgba(244, 243, 238, 0.05), 0 18px 40px rgba(27, 21, 18, 0.5);
}

.hero__canvas {
  width: 100%;
  height: 100%;
  display: block;
  filter: saturate(1.12) contrast(1.05);
}

.hero__glow {
  position: absolute;
  width: 40%;
  height: 60%;
  filter: blur(80px);
  opacity: 0.16;
  z-index: 1;
  pointer-events: none;
}

.hero__glow--left {
  top: 8%;
  left: -6%;
  background: radial-gradient(circle, rgba(224, 175, 160, 0.8), transparent 52%);
}

.hero__glow--right {
  bottom: 2%;
  right: -4%;
  background: radial-gradient(circle, rgba(147, 196, 198, 0.7), transparent 52%);
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.9rem;
  color: #e0afa0;
  margin: 0;
}

h1 {
  font-size: clamp(2.2rem, 2vw + 1.6rem, 3.2rem);
  margin: 0;
}

.lede {
  margin: 0;
  max-width: 720px;
  color: rgba(244, 243, 238, 0.88);
  font-size: 1.1rem;
}
</style>
