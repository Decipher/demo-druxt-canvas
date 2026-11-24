<template>
  <div class="druxt-menu-inline text-sm font-medium">
    <DruxtMenu :name="menu" />
  </div>
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

export default {
  mixins: [DruxtCanvasComponentMixin],
  props: {
    menu: { type: String, default: 'main' },
  },
}
</script>

<style>
/* The menu's links in a row, as Dashi's utility bar lists its links. */
.druxt-menu-inline ul { display: flex; flex-wrap: wrap; gap: 1.25rem; list-style: none; margin: 0; padding: 0; }
.druxt-menu-inline a { text-decoration: none; transition-duration: 0.3s; }
.druxt-menu-inline a:hover { color: var(--primary); }
</style>
