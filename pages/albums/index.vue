<template>
  <section class="albums-section">
    <h1 class="section-title">Álbumes</h1>
    <div class="albums-grid">
      <Card
        v-for="al in albums"
        :key="al._path"
        :to="al._path"
        :title="al.title"
        :subtitle="al.year?.toString()"
        :image="al.cover"
      >
        <p class="info">
          🎷 Artista:
          <NuxtLink :to="`/artists/${al.artistSlug}`" class="link">
            {{ al.artist }}
          </NuxtLink>
        </p>
        <p class="info">
          💿 Discográfica:
          <NuxtLink :to="`/labels/${al.labelSlug}`" class="link">
            {{ al.label }}
          </NuxtLink>
        </p>
      </Card>
    </div>
  </section>
</template>

<script setup>
const { data: albums } = await useAsyncData('albums', () => {
  return queryContent('/albums').sort({ year: 1 }).find()
})
</script>

<style scoped>
.albums-section {
  padding: 20px 0;
  color: #ffffff; /* texto blanco por defecto */
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #ffffff; /* blanco */
  text-align: center;
}

.albums-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  align-items: stretch;
}

.info {
  font-size: 0.9rem;
  color: #000000; /* blanco suave */
  margin-top: 4px;
}

.link {
  color: #93c5fd; /* azul claro */
  font-weight: 500;
  transition: color 0.2s;
}

.link:hover {
  color: #bfdbfe; /* azul más brillante en hover */
  text-decoration: underline;
}
</style>
