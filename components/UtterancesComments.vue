<template>
  <section class="comments">
    <h2 class="comments-title">Comentarios</h2>
    <div ref="commentsEl" />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from '#app'

const route = useRoute()
const commentsEl = ref<HTMLElement | null>(null)

// 👇 CAMBIA ESTO POR TU REPO
const REPO = 'usuario/nombre-del-repo' // ej: 'eithel/jazz-catalog'

// Config de Utterances
const ISSUE_TERM = 'pathname'
const THEME = 'github-light'

function loadUtterances() {
  if (!commentsEl.value) return

  // Limpiar comentarios si ya había un iframe (cambio de ruta)
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
  loadUtterances()
})

// Si cambias de página (otro álbum, artista, etc.), recarga el widget
watch(
  () => route.path,
  () => {
    loadUtterances()
  }
)
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
