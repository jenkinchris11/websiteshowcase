<template>
  <main class="page">
    <header class="hero-embed" aria-labelledby="hero-title">
      <div class="embed__intro">
        <p class="eyebrow">Featured experiment</p>
        <h1 id="hero-title">Immersive hero from Robin Treur</h1>
        <p class="lede">
          The opening of this page now showcases the interactive hero directly from the referenced CodePen so you can
          explore the experience exactly as designed.
        </p>
      </div>

      <div class="embed__frame">
        <p
          class="codepen"
          data-height="660"
          data-default-tab="result"
          data-slug-hash="pyWLeB"
          data-user="RobinTreur"
          data-theme-id="dark"
        >
          <span>
            See the Pen <a href="https://codepen.io/RobinTreur/pen/pyWLeB">Hero concept</a> by Robin Treur (<a
              href="https://codepen.io/RobinTreur">@RobinTreur</a>) on <a href="https://codepen.io">CodePen</a>.
          </span>
        </p>
      </div>
    </header>

    <section id="projects" class="grid" aria-label="Website projects">
      <ProjectCard v-for="project in projects" :key="project.url" :project="project" />
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import ProjectCard from './components/ProjectCard.vue'
import { projects } from './data/projects'

const ensureCodePenScript = () => {
  const existing = document.querySelector('script[src*="codepen.io/assets/embed/ei.js"]')
  if (existing) return

  const script = document.createElement('script')
  script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js'
  script.async = true
  document.body.appendChild(script)
}

onMounted(() => {
  ensureCodePenScript()
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

.page {
  display: grid;
  gap: 32px;
  padding: clamp(16px, 3vw, 32px);
  position: relative;
  overflow: hidden;
}

.hero-embed {
  display: grid;
  gap: 18px;
  padding: clamp(16px, 3vw, 28px);
  border-radius: 24px;
  border: 1px solid rgba(244, 243, 238, 0.12);
  background: linear-gradient(120deg, rgba(244, 243, 238, 0.08), rgba(244, 243, 238, 0)),
    linear-gradient(180deg, rgba(188, 184, 177, 0.16), rgba(70, 63, 58, 0.4));
  box-shadow: 0 24px 70px rgba(27, 21, 18, 0.6);
}

.embed__intro {
  display: grid;
  gap: 12px;
  max-width: 840px;
}

.embed__frame {
  border-radius: 18px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.24);
  border: 1px solid rgba(244, 243, 238, 0.12);
  box-shadow: inset 0 0 0 1px rgba(244, 243, 238, 0.05), 0 18px 40px rgba(27, 21, 18, 0.5);
}

.codepen {
  height: 100%;
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

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
}
</style>
