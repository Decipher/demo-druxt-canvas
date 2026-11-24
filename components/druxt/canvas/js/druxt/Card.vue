<template>
  <div class="container mx-auto px-4 pt-4 pb-6">
    <div class="flex flex-col items-start gap-4 rounded-[22px] bg-card p-8 text-card-foreground shadow-[var(--shadow)]">
      <h2 class="m-0 font-serif text-2xl font-semibold">{{ title }}</h2>
      <p class="m-0 text-muted-foreground">{{ body }}</p>
      <slot name="content" />
    </div>
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
