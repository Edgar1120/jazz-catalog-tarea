<template>
  <section class="labels-page">
    <h1 class="page-title">Discográficas</h1>

    <div class="labels-grid">
      <Card
        v-for="lb in labels"
        :key="lb._path"
        :to="lb._path"
        :title="lb.name"
        :subtitle="lb.country"
        :image="lb.logo"
      >
        <p class="label-meta">Fundada: {{ lb.founded }}</p>
      </Card>
    </div>

    <!-- 👇 Sección de comentarios Utterances -->
    <UtterancesComments />
  </section>
</template>

<script setup>
import UtterancesComments from '~/components/UtterancesComments.vue'

const { data: labels } = await useAsyncData('labels', () => {
  return queryContent('/labels').sort({ name: 1 }).find()
})
</script>

<style scoped>
.labels-page {
  padding: 1rem;
  color: #ffffff; /* texto blanco global */
}

.page-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #ffffff;
}

.labels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  align-items: stretch;
}

.label-meta {
  margin-top: 0.25rem;
  font-size: 0.9rem;
  color: #000000;
}

/* Responsivo */
@media (max-width: 640px) {
  .page-title {
    font-size: 1.6rem;
  }
}
</style>
