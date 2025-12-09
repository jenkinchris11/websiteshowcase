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

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Fjalla+One');

.container {
  display: block;
  max-width: 320px;
  width: 100%;
  height: 250px;
  margin: 0 auto;
  padding: 32px;
  box-sizing: border-box;
  font-family: 'Fjalla One', sans-serif;
  background: linear-gradient(to bottom, #405166 0%, #656f6f 100%);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
}

.button {
  float: left;
  position: relative;
  bottom: -65px;
  left: 50%;
  transform: translateX(-50%) rotate(-10deg);
  color: #e55643;
  text-transform: uppercase;
  opacity: 0;
  visibility: hidden;
  cursor: pointer;
  border: none;
  background: transparent;
  font: inherit;
  padding: 0;
}

.button span {
  transform: skew(-10deg);
  display: block;
  float: left;
  text-shadow: #533d4a 1px 1px, #533d4a 2px 2px, #533d4a 3px 3px, #533d4a 4px 4px;
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
}

.title span {
  transform: skew(-10deg);
  display: block;
  float: left;
  text-shadow: #533d4a 1px 1px, #533d4a 2px 2px, #533d4a 3px 3px, #533d4a 4px 4px, #533d4a 5px 5px,
    #533d4a 6px 6px;
  min-width: 10px;
  min-height: 10px;
  position: relative;
}

.title:nth-child(1) {
  color: #e55643;
}

.title:nth-child(2) {
  color: #2b9f5e;
}

.title:nth-child(3) {
  color: #f1c83c;
}
</style>
