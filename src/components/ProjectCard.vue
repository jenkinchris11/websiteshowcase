<template>
  <article class="card">
    <div class="card__header">
      <div>
        <p class="label">Featured Build</p>
        <h3>{{ project.title }}</h3>
        <p class="description">{{ project.description }}</p>
      </div>
      <a class="cta" :href="project.url" target="_blank" rel="noopener noreferrer">
        View live ↗
      </a>
    </div>

    <div class="card__preview">
      <iframe :src="project.url" loading="lazy" title="Live preview" sandbox="allow-same-origin allow-scripts allow-forms allow-popups"></iframe>
    </div>

    <div class="card__footer">
      <ul class="tags">
        <li v-for="tool in project.tools" :key="tool">{{ tool }}</li>
      </ul>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.card {
  display: grid;
  gap: 16px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  background: radial-gradient(circle at 10% 20%, rgba(122, 94, 255, 0.08), transparent 35%),
    radial-gradient(circle at 80% 0%, rgba(0, 180, 255, 0.08), transparent 25%),
    rgba(17, 24, 39, 0.8);
  backdrop-filter: blur(6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
}

.card__header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: start;
}

.label {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.75rem;
  margin: 0 0 6px;
}

h3 {
  margin: 0 0 6px;
  font-size: 1.25rem;
}

.description {
  margin: 0;
  color: rgba(232, 237, 241, 0.86);
}

.card__preview {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #0a0f1c;
}

.card__preview iframe {
  width: 100%;
  height: 360px;
  border: none;
  background: #0a0f1c;
}

.card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  margin: 0;
}

.tags li {
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  font-size: 0.9rem;
  color: rgba(232, 237, 241, 0.82);
}

.cta {
  color: #7c9bff;
  font-weight: 600;
  white-space: nowrap;
}

.cta:hover {
  color: #9fc1ff;
}

@media (max-width: 768px) {
  .card__header {
    flex-direction: column;
  }

  .card__preview iframe {
    height: 300px;
  }
}
</style>
