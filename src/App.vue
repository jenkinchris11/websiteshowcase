<template>
  <main class="page">
    <header class="hero">
      <p class="eyebrow">Website portfolio</p>
      <h1>Showcase of live client websites</h1>
      <p class="lede">
        Explore the projects I've built—from handcrafted artist portfolios to service sites and photography experiences.
        Each card embeds the live website so you can browse without leaving the page.
      </p>
      <div class="meta">
        <span>Built with Vue + Vite • Ready for Netlify</span>
        <span class="pill">Live previews included</span>
      </div>
    </header>

    <section class="grid" aria-label="Website projects">
      <ProjectCard v-for="project in projects" :key="project.url" :project="project" />
    </section>
  </main>
</template>

<script setup>
import ProjectCard from './components/ProjectCard.vue'
import { projects } from './data/projects'
</script>

<style scoped>
.page {
  display: grid;
  gap: 28px;
}

.hero {
  display: grid;
  gap: 12px;
  padding: 12px 8px 4px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.85rem;
  color: #9fc1ff;
  margin: 0;
}

h1 {
  font-size: clamp(2rem, 2vw + 1.5rem, 2.8rem);
  margin: 0;
}

.lede {
  margin: 0;
  max-width: 760px;
  color: rgba(232, 237, 241, 0.82);
  font-size: 1.05rem;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  color: rgba(232, 237, 241, 0.82);
}

.pill {
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
}

@media (max-width: 640px) {
  .meta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
