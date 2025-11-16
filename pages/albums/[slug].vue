<template>
  <section v-if="album" class="album-page">
    <div class="album-header">
      <img :src="album.cover" :alt="album.title" class="album-cover" />

      <div class="album-info">
        <h1 class="album-title">
          {{ album.title }}
          <span class="year">({{ album.year }})</span>
        </h1>

        <!-- 💰 Precio -->
        <p v-if="album.price" class="price">
          💰 Precio: <strong>\${{ album.price }}</strong>
        </p>

        <p>
          🎷 Artista:
          <NuxtLink :to="`/artists/${album.artistSlug}`" class="link">
            {{ album.artist }}
          </NuxtLink>
        </p>

        <p>
          💿 Discográfica:
          <NuxtLink :to="`/labels/${album.labelSlug}`" class="link">
            {{ album.label }}
          </NuxtLink>
        </p>

        <p class="badge">{{ (album.styles || []).join(', ') }}</p>
        <p class="description">{{ album.description }}</p>

        <!-- 🛒 Botón Snipcart -->
        <button
          v-if="album.price"
          class="add-to-cart snipcart-add-item"
          :data-item-id="album.slug || slug"
          :data-item-name="album.title"
          :data-item-price="album.price"
          :data-item-url="itemUrl"
          :data-item-image="album.cover"
          :data-item-description="album.description"
        >
          Añadir al carrito
        </button>
      </div>
    </div>

    <h2 class="tracks-title">Pistas</h2>
    <ol class="tracklist">
      <li v-for="(t, i) in album.tracks" :key="i">
        {{ i + 1 }}. {{ t }}
      </li>
    </ol>

    <!-- 👇 Sección de comentarios -->
    <UtterancesComments />
  </section>
</template>

<script setup>
import { computed } from 'vue'
import UtterancesComments from '~/components/UtterancesComments.vue'

const route = useRoute()
const slug = route.params.slug

const { data: album } = await useAsyncData(`album-${slug}`, () =>
  queryContent(`/albums/${slug}`).findOne()
)

// URL del producto para Snipcart (puede ser relativa)
const itemUrl = computed(() => route.path)
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

.price {
  font-size: 1.1rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
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

.add-to-cart {
  margin-top: 0.75rem;
  align-self: flex-start;
  background: #22c55e;
  border: none;
  color: #0f172a;
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s ease, filter 0.1s ease;
}

.add-to-cart:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(34,197,94,0.4);
  filter: brightness(1.03);
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
