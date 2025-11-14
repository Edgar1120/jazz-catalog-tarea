# Jazz Catalog (Nuxt 3 + @nuxt/content)

Tema: Catálogo de mejor música jazz — **artista (principal)**, **álbum** y **discográfica**.

## Estructura
- `content/artists/*.md` — 13 artistas (cumple 12+). ≥6 campos: slug, name, country, years_active, styles[], image, labelRefs[] + body.
- `content/albums/*.json` — 6 álbumes. ≥4 campos: title, year, artist/artistSlug, label/labelSlug, styles[], tracks[], cover, description.
- `content/labels/*.md` — 6 sellos. ≥4 campos: name, country, founded, logo, website + body.
- `pages/*` — navegación entre entidades.
  - Artista → sus Álbumes y Discográficas relacionadas
  - Álbum → enlace a su Artista y Discográfica
  - Discográfica → sus Álbumes y sus Artistas vía Álbum

## Uso
```bash
pnpm i   # o npm i / yarn
pnpm dev # http://localhost:3000
```
Despliegue recomendado: Netlify (build: `npm run build`, publish `/.output/public`).

