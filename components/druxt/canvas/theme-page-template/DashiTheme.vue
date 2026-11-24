<template>
  <div class="layout-container">
    <header role="banner"><div class="region region-header"><slot name="header" /></div></header>
    <main role="main"><div class="layout-content"><div class="region region-content"><slot name="content" /></div></div></main>
    <footer role="contentinfo"><div class="region region-footer"><slot name="footer" /></div></footer>
  </div>
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

// Dashi's page template: the regions its page variant fills.
export default { mixins: [DruxtCanvasComponentMixin] }
</script>
