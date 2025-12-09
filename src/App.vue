<template>
  <main class="parent">
    <div class="div1">
      <HeroCanvas />
    </div>
    <section id="projects" class="div2" aria-label="Website projects">
      <div class="grid">
        <ProjectCard v-for="project in projects" :key="project.url" :project="project" />
      </div>
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

.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
}

.div1 {
  grid-area: 1 / 1 / 2 / 4;
}

.div2 {
  grid-area: 2 / 1 / 6 / 4;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
}
</style>
