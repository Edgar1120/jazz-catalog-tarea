<template>
  <article class="card">
    <img v-if="image" :src="image" :alt="title" class="thumb" />
    <h3><NuxtLink :to="to" class="title-link">{{ title }}</NuxtLink></h3>
    <p v-if="subtitle" class="badge">{{ subtitle }}</p>
    <slot />
  </article>
</template>

<script setup lang="ts">
defineProps<{
  to: string
  title: string
  subtitle?: string
  image?: string
}>()
</script>

<style scoped>
.card {
  border: 1px solid #e5e7eb; /* gris claro */
  border-radius: 12px;
  padding: 16px;
  background: #fff;
  display: grid;
  gap: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}

.thumb {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 10px;
}

.title-link {
  font-weight: 600;
  font-size: 1.1rem;
  color: #1f2937; /* gris oscuro */
  transition: color 0.2s;
}

.title-link:hover {
  color: #2563eb; /* azul */
}

.badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  background: #eef2ff;
  color: #3730a3;
  font-size: 0.8rem;
  font-weight: 500;
}
</style>
