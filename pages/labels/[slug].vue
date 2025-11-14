<template>
  <section v-if="label" class="label-page">
    <div class="label-header">
      <img :src="label.logo" :alt="label.name" class="label-logo" />
      <div class="label-info">
        <h1 class="label-name">{{ label.name }}</h1>
        <p class="badge">{{ label.country }}</p>
        <p>Fundada: <strong>{{ label.founded }}</strong></p>
        <ContentRenderer :value="label" class="label-bio" />
      </div>
    </div>

    <h2 class="section-title">Álbumes del sello</h2>
    <div class="albums-grid">
      <Card
        v-for="al in albums"
        :key="al._path"
        :to="al._path"
        :title="al.title"
        :subtitle="al.year?.toString()"
        :image="al.cover"
      >
        <p>
          🎷 Artista:
          <NuxtLink :to="`/artists/${al.artistSlug}`" class="link">{{ al.artist }}</NuxtLink>
        </p>
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

const { data: label } = await useAsyncData(`label-${slug}`, () =>
  queryContent(`/labels/${slug}`).findOne()
)

const { data: albums } = await useAsyncData(`label-albums-${slug}`, () =>
  queryContent('/albums').where({ labelSlug: slug }).find()
)
</script>

<style scoped>
.label-page {
  padding: 1rem;
  color: #000000; /* texto */
}

.label-header {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 1.5rem;
  align-items: start;
  margin-bottom: 1.25rem;
}

.label-logo {
  width: 100%;
  border-radius: 12px;
  object-fit: contain;
  background: #1f2937;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
}

.label-info {
  display: grid;
  gap: 0.5rem;
}

.label-name {
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

.label-bio :deep(p) {
  margin: 0.25rem 0;
  color: #f3f4f6;
  line-height: 1.6;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1.5rem 0 1rem;
  color: #ffffff;
}

.albums-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
}

.link {
  color: #93c5fd;
  font-weight: 500;
  transition: color 0.2s ease;
}

.link:hover {
  color: #bfdbfe;
  text-decoration: underline;
}

/* Responsivo */
@media (max-width: 720px) {
  .label-header {
    grid-template-columns: 1fr;
  }
  .label-logo {
    max-width: 280px;
    justify-self: center;
  }
}
</style>
