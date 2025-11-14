<template>
  <div>
    <header class="site-header">
      <NuxtLink to="/" class="brand">🎷 Jazz Catalog</NuxtLink>
      <nav class="nav">
        <NuxtLink to="/artists" class="nav-link">Artistas</NuxtLink>
        <NuxtLink to="/albums" class="nav-link">Álbumes</NuxtLink>
        <NuxtLink to="/labels" class="nav-link">Discográficas</NuxtLink>
      </nav>
    </header>

    <main class="site-main">
      <NuxtPage />
    </main>
  </div>
</template>

<style>
/* ========= Base ========= */
:root {
  --bg: #ffffff;
  --fg: #0f172a;           /* slate-900 */
  --muted: #6b7280;        /* gray-500 */
  --card: #ffffff;
  --border: #e5e7eb;       /* gray-200 */
  --primary: #2563eb;      /* blue-600 */
  --primary-700: #1d4ed8;
  --badge-bg: #eef2ff;
  --badge-fg: #3730a3;
  --shadow-sm: 0 2px 8px rgba(0,0,0,.06);
  --shadow-md: 0 8px 24px rgba(0,0,0,.12);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0b1020;
    --fg: #e5e7eb;
    --muted: #9ca3af;
    --card: #121a2c;
    --border: #1f2937;
    --primary: #60a5fa;
    --primary-700: #3b82f6;
    --badge-bg: rgba(96,165,250,.12);
    --badge-fg: #93c5fd;
    --shadow-sm: 0 2px 8px rgba(0,0,0,.35);
    --shadow-md: 0 8px 24px rgba(0,0,0,.45);
  }
}

html, body, #__nuxt {
  height: 100%;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  background: var(--bg);
  color: var(--fg);
}

/* ========= Header ========= */
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: .8rem 1rem;
  border-bottom: 1px solid var(--border);
  backdrop-filter: saturate(120%) blur(8px);
  background: color-mix(in oklab, var(--bg) 85%, transparent);
}

.brand {
  font-weight: 800;
  font-size: 1.25rem;
  color: var(--fg);
  text-decoration: none;
  letter-spacing: .2px;
}

.nav {
  display: flex;
  gap: .5rem;
  margin-left: auto;
}

.nav-link {
  position: relative;
  display: inline-block;
  padding: .5rem .75rem;
  border-radius: 10px;
  color: var(--fg);
  text-decoration: none;
  transition: background .2s ease, color .2s ease, transform .2s ease;
}

.nav-link:hover {
  background: color-mix(in oklab, var(--primary) 12%, transparent);
  transform: translateY(-1px);
}

.nav-link:focus-visible {
  outline: 3px solid color-mix(in oklab, var(--primary) 35%, transparent);
  outline-offset: 2px;
  border-radius: 12px;
}

/* Estado activo de NuxtLink */
.nav-link.router-link-exact-active {
  background: color-mix(in oklab, var(--primary) 16%, transparent);
  color: var(--primary);
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--primary) 55%, transparent);
}

/* ========= Main ========= */
.site-main {
  padding: 1.5rem;
  max-width: 80rem; /* ~1280px */
  margin: 0 auto;
}

/* ========= Tarjetas genéricas ========= */
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px;
  display: grid;
  gap: 8px;
  box-shadow: var(--shadow-sm);
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: color-mix(in oklab, var(--primary) 30%, var(--border));
}

.grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--badge-bg);
  color: var(--badge-fg);
  font-size: .8rem;
  font-weight: 600;
  width: fit-content;
}

img.thumb {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: var(--shadow-sm);
}

.search {
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 10px;
  width: 100%;
  max-width: 480px;
  background: var(--card);
  color: var(--fg);
  transition: border-color .2s ease, box-shadow .2s ease;
}

.search::placeholder {
  color: var(--muted);
}

.search:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px color-mix(in oklab, var(--primary) 25%, transparent);
}

/* ========= Utilidades pequeñas ========= */
a { text-decoration: none; color: inherit; }
</style>
