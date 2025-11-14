<template>
  <section v-if="album" class="album-page">
    <div class="album-header">
      <img :src="album.cover" :alt="album.title" class="album-cover" />
      <div class="album-info">
        <h1 class="album-title">{{ album.title }} <span class="year">({{ album.year }})</span></h1>
        <p>
          🎷 Artista:
          <NuxtLink :to="`/artists/${album.artistSlug}`" class="link">{{ album.artist }}</NuxtLink>
        </p>
        <p>
          💿 Discográfica:
          <NuxtLink :to="`/labels/${album.labelSlug}`" class="link">{{ album.label }}</NuxtLink>
        </p>
        <p class="badge">{{ (album.styles || []).join(', ') }}</p>
        <p class="description">{{ album.description }}</p>
      </div>
    </div>

    <h2 class="tracks-title">Pistas</h2>
    <ol class="tracklist">
      <li v-for="(t,i) in album.tracks" :key="i">{{ i+1 }}. {{ t }}</li>
    </ol>

    <!-- 👇 Sección de comentarios -->
    <UtterancesComments />
  </section>
</template>

<script setup>
import UtterancesComments from '~/components/UtterancesComments.vue'

const route = useRoute()
const slug = route.params.slug
const { data: album } = await useAsyncData(`album-${slug}`, () =>
  queryContent(`/albums/${slug}`).findOne()
)
</script>

<style scoped>
.album-page {
  padding: 1rem;
  color: #ffffff; /* texto blanco por defecto */
}

.album-header {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 1.5rem;
  align-items: start;
}

.album-cover {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  object-fit: cover;
}

.album-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.album-title {
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
}

.album-title .year {
  font-size: 1.2rem;
  color: #d1d5db; /* gris claro */
}

.badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,0.2);
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 500;
}

.description {
  margin-top: 0.5rem;
  color: #f3f4f6; /* blanco suave */
  line-height: 1.6;
}

.tracks-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.tracklist {
  list-style: decimal inside;
  padding-left: 1rem;
  display: grid;
  gap: 0.4rem;
  font-size: 1rem;
  color: #f9fafb;
}

.link {
  color: #93c5fd; /* azul claro */
  font-weight: 500;
  transition: color 0.2s ease;
}

.link:hover {
  color: #bfdbfe; /* azul más brillante */
  text-decoration: underline;
}
</style>
