<template>
  <section v-if="artist" class="artist-page">
    <div class="artist-header">
      <img :src="artist.image" :alt="artist.name" class="artist-photo" />
      <div class="artist-info">
        <h1 class="artist-name">{{ artist.name }}</h1>
        <p class="badge">{{ artist.styles?.join(', ') }}</p>
        <p>País: <strong>{{ artist.country }}</strong></p>
        <p>Años activo(s): <strong>{{ artist.years_active }}</strong></p>
        <ContentRenderer :value="artist" class="artist-bio" />
      </div>
    </div>

    <h2 class="section-title">Álbumes</h2>
    <div class="cards-grid">
      <Card
        v-for="al in albums"
        :key="al._path"
        :to="al._path"
        :title="al.title"
        :subtitle="al.year?.toString()"
        :image="al.cover"
      >
        <p>Discográfica:
          <NuxtLink :to="`/labels/${al.labelSlug}`" class="link">{{ al.label }}</NuxtLink>
        </p>
      </Card>
    </div>

    <h2 class="section-title">Discográficas relacionadas</h2>
    <div class="cards-grid">
      <Card
        v-for="lb in labels"
        :key="lb._path"
        :to="lb._path"
        :title="lb.name"
        :subtitle="lb.country"
        :image="lb.logo"
      >
        <p>Fundada: {{ lb.founded }}</p>
      </Card>
    </div>

    <!-- 👇 Sección de comentarios Utterances -->
    <UtterancesComments />
  </section>
</template>

<script setup>
import UtterancesComments from '~/components/UtterancesComments.vue'

const route = useRoute()
const slug = route.params.slug

const { data: artist } = await useAsyncData(`artist-${slug}`, () =>
  queryContent(`/artists/${slug}`).findOne()
)

const { data: albums } = await useAsyncData(`artist-albums-${slug}`, () =>
  queryContent('/albums')
    .where({ artistSlug: slug })
    .sort({ year: 1 })
    .find()
)

const { data: labels } = await useAsyncData(`artist-labels-${slug}`, async () => {
  if (!artist.value?.labelRefs?.length) return []
  const refs = artist.value.labelRefs.map((r) => `/labels/${r}`)
  return await queryContent().where({ _path: { $in: refs } }).find()
})
</script>

<style scoped>
.artist-page {
  padding: 1rem;
  color: rgb(255, 255, 255); /* texto blanco global */
}

.artist-header {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 1.5rem;
  align-items: start;
  margin-bottom: 1.25rem;
}

.artist-photo {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  aspect-ratio: 1/1;
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
}

.artist-info {
  display: grid;
  gap: 0.5rem;
}

.artist-name {
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
}

.badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,0.2);
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 600;
  width: fit-content;
}

.artist-bio :deep(p) {
  margin: 0.25rem 0;
  color: #f3f4f6; /* gris claro */
  line-height: 1.6;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1.25rem 0 0.75rem;
  color: #ffffff;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
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
.cards-grid :deep(p) {
  color: #000000;
}

/* Responsivo */
@media (max-width: 720px) {
  .artist-header {
    grid-template-columns: 1fr;
  }
  .artist-photo {
    max-width: 320px;
    justify-self: center;
  }
}
</style>
