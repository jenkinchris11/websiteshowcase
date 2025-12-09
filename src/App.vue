<template>
  <main class="page">
    <HeroCanvas />
    <section id="projects" class="grid" aria-label="Website projects">
      <ProjectCard v-for="project in projects" :key="project.url" :project="project" />
    </section>
  </main>
</template>

<script setup>
import ProjectCard from './components/ProjectCard.vue'
import HeroCanvas from './components/HeroCanvas.vue'
import { projects } from './data/projects'
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

.page {
  display: grid;
  gap: 32px;
  padding: clamp(16px, 3vw, 32px);
  position: relative;
  overflow: hidden;
  justify-items: stretch;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
}
</style>
