<template>
  <main class="page">
    <header class="hero" aria-labelledby="intro-title">
      <div class="hero__bg" aria-hidden="true">
        <div class="hero__orb hero__orb--one"></div>
        <div class="hero__orb hero__orb--two"></div>
        <div class="hero__noise"></div>
      </div>

      <div class="hero__content">
        <p class="eyebrow">Jenkin Programming</p>
        <div class="hero__grid">
          <div class="hero__copy">
            <h1 id="intro-title">Crafting purposeful digital experiences</h1>
            <p class="lede">
              I build immersive, performant web experiences that elevate brands and move users to act. Each
              launch blends thoughtful storytelling, accessible design systems, and measurable outcomes.
            </p>
            <div class="hero__actions">
              <a class="button" href="#projects">View case studies</a>
              <a class="button button--ghost" href="mailto:hello@jenkin.dev">Book a discovery call</a>
            </div>
            <div class="hero__meta">
              <div class="pill">
                <span class="pill__label">Specialties</span>
                <strong>Product UX · Web Apps · Creative Dev</strong>
              </div>
              <div class="pill">
                <span class="pill__label">Impact</span>
                <strong>+35% avg. conversion uplift</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="projects" class="grid" aria-label="Website projects">
      <ProjectCard v-for="project in projects" :key="project.url" :project="project" />
    </section>
  </main>
</template>

<script setup>
import ProjectCard from './components/ProjectCard.vue'
import { projects } from './data/projects'
</script>

<style scoped>
:global(body) {
  background: radial-gradient(circle at 15% 20%, rgba(120, 80, 255, 0.12), transparent 35%),
    radial-gradient(circle at 80% 10%, rgba(0, 185, 255, 0.14), transparent 40%),
    linear-gradient(135deg, #05080f 0%, #090f1d 55%, #05080f 100%);
  color: #e8edf1;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.page {
  display: grid;
  gap: 32px;
  padding: 18px;
  position: relative;
  overflow: hidden;
}

.hero {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  padding: clamp(16px, 3vw, 28px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(120deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0)),
    linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.5);
}

.hero__bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.hero__orb {
  position: absolute;
  width: 420px;
  height: 420px;
  filter: blur(50px);
  opacity: 0.55;
  mix-blend-mode: screen;
  animation: float 16s ease-in-out infinite;
}

.hero__orb--one {
  top: -120px;
  left: -80px;
  background: radial-gradient(circle, rgba(125, 96, 255, 0.8), transparent 55%);
}

.hero__orb--two {
  bottom: -180px;
  right: -60px;
  background: radial-gradient(circle, rgba(0, 188, 255, 0.8), transparent 60%);
  animation-duration: 18s;
}

.hero__noise {
  position: absolute;
  inset: 0;
  background-image: url('data:image/svg+xml,%3Csvg width="160" height="160" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="n" x="0" y="0" width="100%" height="100%"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23n)" opacity="0.12"/%3E%3C/svg%3E');
  mix-blend-mode: soft-light;
  opacity: 0.35;
}

.hero__content {
  position: relative;
  display: grid;
  gap: 16px;
  isolation: isolate;
}

.hero__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(16px, 2vw, 32px);
  align-items: stretch;
}

.hero__copy {
  display: grid;
  gap: 16px;
  align-content: start;
}

.hero__visual {
  display: grid;
  gap: 12px;
  align-content: start;
}

.hero__parallax {
  position: relative;
  height: 100%;
  min-height: 260px;
  border-radius: 18px;
  overflow: hidden;
  background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.12), transparent 40%),
    linear-gradient(135deg, rgba(16, 26, 46, 0.8), rgba(10, 14, 24, 0.9));
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04), 0 18px 40px rgba(0, 0, 0, 0.35);
}

.hero__layer {
  position: absolute;
  inset: 0;
  transition: transform 0.4s ease;
}

.hero__layer--accent {
  background: radial-gradient(circle at 30% 30%, rgba(124, 155, 255, 0.18), transparent 45%),
    radial-gradient(circle at 70% 60%, rgba(0, 188, 255, 0.18), transparent 45%);
  animation: drift 18s ease-in-out infinite;
}

.hero__layer--card {
  background: linear-gradient(180deg, rgba(6, 10, 20, 0.8), rgba(6, 10, 20, 0.95));
  padding: 18px;
  display: grid;
  gap: 8px;
  align-content: end;
  animation: drift 22s ease-in-out infinite reverse;
}

.hero__status {
  margin: 0;
  color: #9fc1ff;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.85rem;
}

.hero__caption {
  margin: 0;
  color: rgba(232, 237, 241, 0.86);
  font-size: 1.05rem;
}

.hero__marquee {
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  overflow: hidden;
  padding: 10px 0;
}

.hero__marquee-track {
  display: flex;
  gap: 18px;
  animation: marquee 16s linear infinite;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  white-space: nowrap;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: linear-gradient(135deg, #7c9bff, #58d2ff);
  color: #05080f;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 12px 30px rgba(88, 210, 255, 0.25);
}

.button--ghost {
  background: rgba(255, 255, 255, 0.06);
  color: #e8edf1;
  box-shadow: none;
}

.hero__meta {
  display: grid;
  gap: 10px;
}

.pill {
  padding: 12px 14px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.03);
}

.pill__label {
  display: block;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.8rem;
  color: #9fc1ff;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.9rem;
  color: #9fc1ff;
  margin: 0;
}

h1 {
  font-size: clamp(2.2rem, 2vw + 1.6rem, 3.2rem);
  margin: 0;
}

.lede {
  margin: 0;
  max-width: 720px;
  color: rgba(232, 237, 241, 0.86);
  font-size: 1.1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-16px);
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes drift {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(-10px, 12px, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__orb,
  .hero__marquee-track,
  .hero__layer,
  .hero__parallax,
  .hero__panel {
    animation: none !important;
    transition: none !important;
  }
}
</style>
