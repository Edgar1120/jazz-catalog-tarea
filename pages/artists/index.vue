<template>
  <section class="artists-page">
    <h1 class="page-title">Artistas</h1>
    <input
      v-model="q"
      class="search"
      placeholder="Buscar artista, estilo o país..."
    />
    <div class="artists-grid">
      <Card
        v-for="a in filtered"
        :key="a._path"
        :to="a._path"
        :title="a.name"
        :subtitle="a.styles?.join(', ')"
        :image="a.image"
      >
        <p class="artist-meta">{{ a.country }} • {{ a.years_active }}</p>
      </Card>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const q = ref('')
const { data: artists } = await useAsyncData('artists', () => {
  return queryContent('/artists').sort({ name: 1 }).find()
})

const filtered = computed(() => {
  if (!artists.value) return []
  if (!q.value) return artists.value
  const t = q.value.toLowerCase()
  return artists.value.filter(
    (a) =>
      a.name.toLowerCase().includes(t) ||
      (a.country || '').toLowerCase().includes(t) ||
      (a.styles || []).join(' ').toLowerCase().includes(t)
  )
})
</script>

<style scoped>
.artists-page {
  padding: 1rem;
  color: #ffffff; /* texto blanco global */
}

.page-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-align: center;
  color: #ffffff;
}

.search {
  display: block;
  width: 100%;
  max-width: 480px;
  margin: 0 auto 1.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid #4b5563; /* gris oscuro */
  border-radius: 10px;
  font-size: 1rem;
  background: #1f2937; /* fondo oscuro */
  color: #ffffff; /* texto blanco */
  transition: all 0.2s ease;
}

.search::placeholder {
  color: #9ca3af; /* gris claro */
}

.search:focus {
  outline: none;
  border-color: #60a5fa;
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.3);
}

.artists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}

.artist-meta {
  color: #010610; /* gris muy claro */
  font-size: 0.9rem;
  margin-top: 0.25rem;
}

/* Responsivo */
@media (max-width: 640px) {
  .page-title {
    font-size: 1.6rem;
  }
}
</style>
