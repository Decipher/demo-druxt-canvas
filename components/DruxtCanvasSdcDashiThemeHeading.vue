<template>
  <component :is="`h${level}`" :class="['heading', `heading--${align}`]">
    {{ headingText }}
  </component>
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

export default {
  mixins: [DruxtCanvasComponentMixin],
  props: {
    align: { type: String, default: 'left' },
    headingText: { type: String, default: '' },
    level: { type: Number, default: 2 },
  },
}
</script>

<style>
.heading { font-size: 2rem; line-height: 1.2; margin: 0 0 2rem; }
.heading--center { text-align: center; }
</style>
