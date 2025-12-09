import { createApp } from 'vue'
import { defineCustomElements } from '@dotlottie/player-component/dist/loader'
import App from './App.vue'

import './assets/base.css'

(async () => {
  await defineCustomElements(window)
  createApp(App).mount('#app')
})()
