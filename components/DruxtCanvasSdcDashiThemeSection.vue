<template>
  <section :class="['section', backgroundColor && `section--${backgroundColor}`]">
    <slot name="main_slot" />
  </section>
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

export default {
  mixins: [DruxtCanvasComponentMixin],
  props: {
    backgroundColor: { type: String, default: '' },
  },
}
</script>

<style>
.section { padding: 2rem 0; }
.section--card { background: var(--card); padding: 3rem 2rem; border-radius: 12px; }
</style>
