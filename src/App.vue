<template>
  <main class="page">
    <header class="hero">
      <p class="eyebrow">Jenkin Programming</p>
      <p class="lede">
        Hi, My name is Chris Jenkin, and I have found myself here!
        <br>
        I have been programming for quite a while now, I started programming small games and websites, and eventually enrolled on a university course for Video Game Programming during this various coding languages and different disciplines were taught.
        <br>
        My time at university was majorly beneficial to my journey in computer programming, since then I have worked for a brilliant company called Envirovue as a software programmer which was a brilliant experience.
        <br>
        Now in my venture, I hope to make beautiful websites for you such as this one!
      </p>
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

h2 {
  margin: 0 0 8px;
  font-size: 1.35rem;
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

.about {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 14px;
}

.about__card {
  padding: 16px 18px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(155deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01));
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}

.about__card ul {
  margin: 0;
  padding-left: 18px;
  color: rgba(232, 237, 241, 0.86);
}

.about__card p {
  margin: 0;
  color: rgba(232, 237, 241, 0.86);
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
}

@media (max-width: 640px) {
  .meta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
