<template>
  <div class="t-rex-game-container">
    <div id="runner-container" class="runner-container">
      <div style="display: none;">
        <img id="1x-obstacle-large" :src="sprites['1x-obstacle-large']" alt="" />
        <img id="1x-obstacle-small" :src="sprites['1x-obstacle-small']" alt="" />
        <img id="1x-cloud" :src="sprites['1x-cloud']" alt="" />
        <img id="1x-horizon" :src="sprites['1x-horizon']" alt="" />
        <img id="1x-restart" :src="sprites['1x-restart']" alt="" />
        <img id="1x-text" :src="sprites['1x-text']" alt="" />
        <img id="1x-trex" :src="sprites['1x-trex']" alt="" />

        <img id="2x-obstacle-large" :src="sprites['2x-obstacle-large']" alt="" />
        <img id="2x-obstacle-small" :src="sprites['2x-obstacle-small']" alt="" />
        <img id="2x-cloud" :src="sprites['2x-cloud']" alt="" />
        <img id="2x-horizon" :src="sprites['2x-horizon']" alt="" />
        <img id="2x-restart" :src="sprites['2x-restart']" alt="" />
        <img id="2x-text" :src="sprites['2x-text']" alt="" />
        <img id="2x-trex" :src="sprites['2x-trex']" alt="" />

        <template id="audio-resources">
          <source id="offline-sound-press" src="data:audio/mp3;base64,..." type="audio/mpeg" />
          <source id="offline-sound-hit" src="data:audio/mp3;base64,..." type="audio/mpeg" />
          <source id="offline-sound-reached" src="data:audio/mp3;base64,..." type="audio/mpeg" />
        </template>
      </div>
    </div>
    <p>Press <strong>Space</strong> or <strong>Up Arrow</strong> to start the game.</p>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { trexSprites } from '../data/trexSprites'
import '../trex-game-logic.js'

const sprites = trexSprites

let runnerInstance = null

onMounted(() => {
  if (window.Runner) {
    runnerInstance = new window.Runner('#runner-container')
    console.log('T-Rex Runner Game initialized in Vue.')
  } else {
    console.error(
      'T-Rex Runner class not found. Check if trex-game-logic.js is complete and imported correctly.'
    )
  }
})

onUnmounted(() => {
  if (runnerInstance) {
    runnerInstance.stopListening()
    const canvasEl = runnerInstance.canvas
    if (canvasEl && canvasEl.parentNode) {
      canvasEl.parentNode.removeChild(canvasEl)
    }
    if (window.Runner.instance_) {
      window.Runner.instance_ = null
    }
  }
})
</script>

<style scoped>
.t-rex-game-container {
  padding: 24px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  text-align: center;
  color: #f4f3ee;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.runner-container {
  overflow: hidden;
  position: relative;
  max-width: 600px;
  height: 150px;
  transform: translateZ(0);
  border: 1px solid #ccc;
  margin: 0 auto 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.runner-canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
