<template>
  <section class="home-page">
    <h1 class="page-title">Catálogo de Jazz</h1>
    <p class="page-subtitle">Explora artistas, sus álbumes y sellos discográficos.</p>
    <div class="artists-grid">
      <Card
        v-for="a in artists"
        :key="a._path"
        :to="a._path"
        :title="a.name"
        :subtitle="a.styles?.join(', ')"
        :image="a.image"
      >
        <p class="artist-meta">{{ a.country }} • Activo(s): {{ a.years_active }}</p>
      </Card>
    </div>
  </section>
</template>

<script setup>
const { data: artists } = await useAsyncData('home-artists', () => {
  return queryContent('/artists')
    .only(['_path','name','styles','image','country','years_active'])
    .sort({ name: 1 })
    .find()
})
</script>

<style scoped>
.home-page {
  padding: 1rem;
  color: #ffffff; /* texto blanco global */
}

.page-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
  color: #ffffff; /* blanco */
}

.page-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: #f3f4f6; /* gris claro */
  margin-bottom: 2rem;
}

.artists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}

.artist-meta {
  color: #000103; /* gris muy claro */
  font-size: 0.9rem;
  margin-top: 0.25rem;
}

/* Responsivo */
@media (max-width: 640px) {
  .page-title {
    font-size: 1.8rem;
  }
  .page-subtitle {
    font-size: 1rem;
  }
}
</style>
