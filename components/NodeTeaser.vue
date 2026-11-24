<template>
  <article :class="['teaser', `teaser--${mode}`]">
    <slot />
    <h3>
      <NuxtLink :to="path">{{ entity.attributes.title }}</NuxtLink>
    </h3>
  </article>
</template>

<script>
export default {
  props: {
    entity: { type: Object, required: true },
    mode: { type: String, default: 'card' },
  },
  computed: {
    path: ({ entity }) =>
      (entity.attributes.path || {}).alias ||
      `/node/${entity.attributes.drupal_internal__nid}`,
  },
}
</script>

<style>
.teaser h3 { margin: 0.75rem 0 0; font-size: 1.15rem; }
.teaser h3 a { color: var(--ink); text-decoration: none; }
.teaser h3 a:hover { color: var(--accent); }
.teaser--hero h3 { font-size: 2.25rem; }
.teaser p { color: var(--muted); }
</style>
