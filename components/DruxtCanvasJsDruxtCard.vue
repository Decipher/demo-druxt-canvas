<template>
  <div class="druxt-card">
    <h2>{{ title }}</h2>
    <p>{{ body }}</p>
    <slot name="content" />
  </div>
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

export default {
  mixins: [DruxtCanvasComponentMixin],
  props: {
    body: { type: String, default: '' },
    title: { type: String, default: '' },
  },
}
</script>

<style>
.druxt-card { background: var(--card); padding: 1.5rem; border-radius: 12px; margin: 2rem 0; }
</style>
