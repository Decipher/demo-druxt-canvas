<template>
  <div class="site">
    <header class="site-header">
      <NuxtLink to="/" class="site-name">Dashi</NuxtLink>
      <DruxtMenu name="main" />
    </header>
    <main><Nuxt /></main>
    <footer class="site-footer">
      Served by decoupled-drupal-mock from a recording of Drupal CMS's Dashi
      site template. No Drupal is running.
    </footer>
  </div>
</template>

<!-- Dashi builds its header and footer as a Canvas page variant, and places no
     blocks in its own theme. So this layout replaces Druxt Site's, which would
     render the admin theme's blocks instead. -->

<style>
:root {
  --ink: #1d1d1b;
  --muted: #5c5a55;
  --paper: #fbf8f3;
  --card: #f1ebe0;
  --accent: #b5401f;
  font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
  color: var(--ink);
  background: var(--paper);
}
body { margin: 0; }
a { color: var(--accent); }
img { max-width: 100%; height: auto; display: block; border-radius: 6px; }
.site-header { display: flex; align-items: center; gap: 2rem; padding: 1rem 2rem; border-bottom: 1px solid var(--card); }
.site-name { font-weight: 700; font-size: 1.4rem; color: var(--ink); text-decoration: none; }
.site-header li, .druxt-card li { display: inline-block; margin-right: 1.25rem; }
.site-header a { color: var(--ink); text-decoration: none; }
main { max-width: 1200px; margin: 0 auto; padding: 0 2rem 3rem; }
/* A view's rows sit in a grid. Its pager is empty on every view here. */
.section [data-fetch-key^="DruxtView"] > div { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.5rem; }
[data-fetch-key^="DruxtViewsPager"] { display: none; }
.teaser--hero { padding: 3rem 0 1rem; }
.teaser--featured { border-top: 3px solid var(--accent); padding-top: 0.5rem; }
.teaser--card { display: flex; flex-direction: column; }
.teaser--card > h3 { order: 1; margin-bottom: 0.25rem; }
.teaser--card > [data-fetch-key*="field_description"] { order: 2; color: var(--muted); font-size: 0.95rem; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.site-footer { padding: 1.5rem 2rem; color: var(--muted); font-size: 0.9rem; border-top: 1px solid var(--card); }
</style>
