<template>
  <div :class="['font-body [&_h2]:mt-8 [&_h2]:mb-6 [&_h3]:mt-6 [&_h3]:mb-4 [&_li]:mb-1 [&_ol]:my-4 [&_ol]:list-decimal [&_ul]:my-4 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&_a]:underline [&_a]:underline-offset-2 text-foreground [&_a]:hover:text-foreground/70', sizes[textSize] || '']" v-html="html" />
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

// Dashi's text: formatted text Drupal has already filtered.
export default {
  mixins: [DruxtCanvasComponentMixin],
  props: {
    text: { type: [Object, String], default: '' },
    textSize: { type: String, default: '' },
  },
  data: () => ({ sizes: { 'text-xs': 'text-xs md:text-sm', 'text-sm': 'text-sm md:text-base' } }),
  computed: {
    html: ({ text }) => (typeof text === 'string' ? text : (text || {}).value || ''),
  },
}
</script>
