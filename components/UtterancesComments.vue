<template>
  <section class="comments">
    <hr />
    <h2 class="comments-title">Comentarios</h2>

    <!-- 👇 Aseguramos que solo se renderice en el cliente -->
    <ClientOnly>
      <div ref="commentsEl" />
    </ClientOnly>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from '#app'

const route = useRoute()
const commentsEl = ref(null)

// 👇 IMPORTANTE: tu repo público
const REPO = 'Edgar1120/jazz-catalog-tarea'
const ISSUE_TERM = 'pathname'
const THEME = 'github-light'

function loadUtterances() {
  if (!commentsEl.value) return

  // Limpia si ya había un iframe (por cambios de ruta)
  commentsEl.value.innerHTML = ''

  const script = document.createElement('script')
  script.src = 'https://utteranc.es/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'

  script.setAttribute('repo', REPO)
  script.setAttribute('issue-term', ISSUE_TERM)
  script.setAttribute('theme', THEME)

  commentsEl.value.appendChild(script)
}

onMounted(() => {
  // Pequeño delay por si acaso (hidratación)
  setTimeout(() => {
    loadUtterances()
  }, 0)
})
</script>

<style scoped>
.comments {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #ddd;
}

.comments-title {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 600;
}
</style>
