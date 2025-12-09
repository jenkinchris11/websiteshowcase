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
    <section class="div3" aria-label="Additional showcase area">
      <div class="cta">
        <h2>More to explore soon</h2>
        <p>
          New experiments, resources, and behind-the-scenes details will appear here as the
          collection grows.
        </p>
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
  grid-column-gap: 0px;
  grid-row-gap: 30px;
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

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
}

.cta {
  padding: 32px;
  border: 1px solid rgba(244, 243, 238, 0.24);
  border-radius: 12px;
  background: rgba(70, 63, 58, 0.4);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
}

.cta h2 {
  margin: 0 0 12px;
  font-size: 1.6rem;
}

.cta p {
  margin: 0;
  color: rgba(244, 243, 238, 0.85);
  line-height: 1.6;
}
</style>
