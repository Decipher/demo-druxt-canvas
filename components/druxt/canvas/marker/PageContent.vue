<template>
  <Nuxt />
</template>

<script>
import { DruxtCanvasComponentMixin } from '@druxt-contrib/canvas'

// Where the page variant puts the page itself: the current route.
export default { mixins: [DruxtCanvasComponentMixin] }
</script>
